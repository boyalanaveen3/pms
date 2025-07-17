
import mongoose, { Schema, Document } from "mongoose";
import { IPRODUCT } from "../interfaces/Iproduct";

 //export interface IProductModel extends IPRODUCT, Document {}

const ProductSchema: Schema<IPRODUCT> = new Schema(
    {
        NAME: { type: String, required: true },
        P_ID:{type:String,required:true},
        DESCRIPTION: { type: String },
        PRICE: { type: Number, required: true },
        CATEGORY: {
            type: String,
            enum: ["VEG", "NON-VEG", "DRINKS", "DESSERTS"],
            required: true,
        },
        IS_AVAILABLE: { type: Boolean, default: true },
        IMAGE_URL: { type: String },
        R_ID:{type:Number,required:true}
    },
    { timestamps: true }
);

const Product=mongoose.model<IPRODUCT>("Products", ProductSchema);
export default Product
