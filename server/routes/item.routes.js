import { Router } from "express";
import { getAllItems,createCategory,createItem } from "../controllers/item.controller.js";

const router=Router();

router.get('/',getAllItems);
router.post('/create-item',createItem);
router.post('/create-category',createCategory);


export default router;