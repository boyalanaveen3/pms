"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbController = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require("../models/Register");
require("../models/Login");
class DbController {
    static async create(req, res) {
        try {
            const { model, data } = req.body;
            if (!model || !data) {
                res.status(400).json({ error: "model and data are required" });
                return;
            }
            const mongooseModel = mongoose_1.default.models[model];
            const result = await mongooseModel.create(data);
            res.json({ data: result });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async read(req, res) {
        try {
            const { model, filter } = req.body;
            if (!model || !filter) {
                res.status(400).json({ error: "model and filter are required" });
                return;
            }
            const mongooseModel = mongoose_1.default.models[model];
            const result = await mongooseModel.findOne(filter);
            res.json({ data: result });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async readAll(req, res) {
        try {
            const { model, filter = {} } = req.body;
            if (!model) {
                res.status(400).json({ error: "model is required" });
                return;
            }
            const mongooseModel = mongoose_1.default.models[model];
            const result = await mongooseModel.find(filter);
            res.json({ data: result });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async delete(req, res) {
        try {
            const { model, filter } = req.body;
            if (!model || !filter) {
                res.status(400).json({ error: "model and filter are required" });
                return;
            }
            const mongooseModel = mongoose_1.default.models[model];
            const result = await mongooseModel.deleteOne(filter);
            res.json({ data: result });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async update(req, res) {
        try {
            const { model, filter, update } = req.body;
            if (!model || !filter || !update) {
                res.status(400).json({ error: "model, filter and update are required" });
                return;
            }
            const mongooseModel = mongoose_1.default.models[model];
            const result = await mongooseModel.updateOne(filter, update);
            res.json({ data: result });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
    static async updateAll(req, res) {
        try {
            const { model, filter, update } = req.body;
            if (!model || !filter || !update) {
                res.status(400).json({ error: "model, filter and update are required" });
                return;
            }
            const mongooseModel = mongoose_1.default.models[model];
            const result = await mongooseModel.updateMany(filter, update);
            res.json({ data: result });
        }
        catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
exports.DbController = DbController;
//# sourceMappingURL=crud.js.map