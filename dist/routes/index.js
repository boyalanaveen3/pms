"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../controllers/crud");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/create', crud_1.DbController.create);
router.post('/read', crud_1.DbController.read);
router.post('/update', crud_1.DbController.update);
router.post('/delete', crud_1.DbController.delete);
exports.default = router;
//# sourceMappingURL=index.js.map