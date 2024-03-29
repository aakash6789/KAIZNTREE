import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";
import { Item,Category } from "../models/item.model.js";


const getAllItems=asyncHandler(async(req,res)=>{
    try{
        let query = {}; 
        if (req.query.category) {
            query.category = req.query.category;
        }

        if (req.query.tags) {
            query.tags = { $all: req.query.tags.split(',') };
        }

        if (req.query.stock_status) {
            query.stock_status = req.query.stock_status;
        }
        if (req.body.category) {
            const category= await Category.findOne({name:req.body.category});
            query.category = category?._id;
        }

        if (req.body.tags) {
            query.tags = { $all: req.body.tags };
        }

        if (req.body.stock_status) {
            query.stock_status = req.body.stock_status;
        }
        const items=await Item.find(query);
    if(!items){
        throw new ApiError(404,"No items found, try inserting some first");
    }
    return res.status(200).json(new ApiResponse(200,items,"All items fetched successfully"));
    }
    catch(err){
        console.log(err);
        throw new ApiError(500,"Unable to fetch items");
    }
})

const createItem=asyncHandler(async(req,res)=>{
    const {SKU,name,category,tags,inStock,availableStock}=req.body;
   if([SKU,name,category,tags,inStock,availableStock].some((field)=> {return typeof field === 'string' && field.trim() === ""})){
    throw new ApiError({statusCode:400,message:"All fields are required"});
   }
   const existingItem= await Item.findOne({$or:[{SKU},{name}]});
   if(existingItem){
         throw new ApiError(409,"Item already exists!!");
   }

  const item=await Item.create({
    SKU,
    name:name.toLowerCase(),
    category,
    tags,
    inStock,
    availableStock
   });
   const createdItem=await Item.findById(item._id);
   if(!createdItem){
    throw new ApiError(500,"Something went wrong item could not be created");
   }
   return res.status(201).json(
    new ApiResponse(200,createdItem,"Item added sucessfully")
   )
})

const createCategory=asyncHandler(async(req,res)=>{
    const {name}=req.body;
    if(!name.trim()===""){
        throw new ApiError({statusCode:400,message:"Category name cannot be empty"});
    }
    const existingCategory=await Category.findOne({name});
    if(existingCategory){
        throw new ApiError(409,"Category already exists!!");
    }
    const category=await Category.create({
        name:name.toLowerCase(),
       });
       const createdCategory=await Category.findById(category._id);
       if(!createdCategory){
        throw new ApiError(500,"Something went wrong category could not be created");
       }
       return res.status(201).json(
        new ApiResponse(200,createdCategory,"Category added sucessfully")
       )
})

const getSearchedItem=asyncHandler(async(req,res)=>{
    try {
        const query = req.query.q;
        const results = await Item.find({
            $or: [
                { name: { $regex: new RegExp(query, 'i') } },
                { SKU: { $regex: new RegExp(query, 'i') } },
            ]
        });
        if(!results){
            throw new ApiError(404,"Nothing here");
        }
        return res.status(201).json(
            new ApiResponse(200,results,"Items searched successfully")
           )
    } catch (error) {
        console.log(error);
        throw new ApiError(500,"Unable to fetch the item")
    }
})
export {getAllItems,createCategory,createItem,getSearchedItem};