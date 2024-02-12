import { Router } from "express";
import { getAllItems,createCategory,createItem, getSearchedItem } from "../controllers/item.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router=Router();

router.get('/',verifyJWT,getAllItems);
router.post('/create-item',verifyJWT,createItem);
router.post('/create-category',verifyJWT,createCategory);
router.get('/search-item',verifyJWT,getSearchedItem);


export default router;