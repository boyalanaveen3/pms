import { Request, Response } from "express";
import mongoose, { Model, Document } from "mongoose";
// import "../models/Register";
// import "../models/Login"
// import "../models/Product"
import "../models/index"

interface ICrudRequestBody {
  model: string;
  data?: any;
  filter?: any;
  update?: any;
}

export class DbController {
 public static async create(req: Request, res: Response): Promise<void> {/* void means: this function doesn't give anything back.Promise means: it's an async function, so it returns something later. */
    try {
      const { model, data }: ICrudRequestBody = req.body;
      if (!model || !data) {
        res.status(400).json({ error: "model and data are required" });
        return;/* it sends an error to the user.Then it uses return to stop the function */
      }

      const mongooseModel = mongoose.models[model] as Model<Document>;
      const result = await mongooseModel.create(data);
      res.json({ data: result });

    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public static async read(req: Request, res: Response): Promise<void> {
    try {
      const { model, filter }: ICrudRequestBody = req.body;
      if (!model || !filter) {
        res.status(400).json({ error: "model and filter are required" });
        return;
      }

      const mongooseModel = mongoose.models[model] as Model<Document>;
      const result = await mongooseModel.findOne(filter);
      res.json({ data: result });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public static async readAll(req: Request, res: Response): Promise<void> {
    try {
      const { model, filter = {} }: ICrudRequestBody = req.body;
      if (!model) {
        res.status(400).json({ error: "model is required" });
        return;
      }

      const mongooseModel = mongoose.models[model] as Model<Document>;
      const result = await mongooseModel.find(filter);
      res.json({ data: result });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public static async delete(req: Request, res: Response): Promise<void> {
    try {
      const { model, filter }: ICrudRequestBody = req.body;
      if (!model || !filter) {
        res.status(400).json({ error: "model and filter are required" });
        return;
      }

      const mongooseModel = mongoose.models[model] as Model<Document>;
      const result = await mongooseModel.deleteOne(filter);
      res.json({ data: result });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public static async update(req: Request, res: Response): Promise<void> {
    try {
      const { model, filter, update }: ICrudRequestBody = req.body;
      if (!model || !filter || !update) {
        res.status(400).json({ error: "model, filter and update are required" });
        return;
      }

      const mongooseModel = mongoose.models[model] as Model<Document>;
      const result = await mongooseModel.updateOne(filter, update);
      res.json({ data: result });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }

  public static async updateAll(req: Request, res: Response): Promise<void> {
    try {
      const { model, filter, update }: ICrudRequestBody = req.body;
      if (!model || !filter || !update) {
        res.status(400).json({ error: "model, filter and update are required" });
        return;
      }

      const mongooseModel = mongoose.models[model] as Model<Document>;
      const result = await mongooseModel.updateMany(filter, update);
      res.json({ data: result });
    } catch (error) {
      res.status(500).json({ error: (error as Error).message });
    }
  }
}
