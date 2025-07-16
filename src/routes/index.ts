import {DbController} from "../controllers/crud"
import express from "express";
const router = express.Router()


router.post('/create', DbController.create);
router.post('/read', DbController.read);
router.post('/update', DbController.update);
router.post('/delete', DbController.delete)
export default router;