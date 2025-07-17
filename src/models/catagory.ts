
import mongoose, { Schema } from "mongoose";
import { ICATEGORY } from "@/interfaces/Iproduct";

const CategorySchema: Schema<ICATEGORY> = new Schema({


    NAME: {
        type: String,
        enum: ["VEG", "NON-VEG", "DRINKS", "DESSERTS"],
        required: true,
        unique: true,
    },
    LABEL: { type: String, required: true },
    DESCRIPTION: { type: String },
    IMAGE_URL: { type: String },
},
    { timestamps: true }
);

const catagory=mongoose.model<ICATEGORY>("CATEGORYS", CategorySchema);
export default catagory
