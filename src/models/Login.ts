import { ILogin } from "@/interfaces/Iuser";
import mongoose, { Schema, Model } from "mongoose";


const LoginSchema: Schema<ILogin> = new Schema({
  EMAIL_ID: { type: String, required: true },
  PH_NO: { type: String, required: true },
  PASSWORD:{type: String, required: true}
});

const LoginModel: Model<ILogin> = mongoose.model<ILogin>("Login", LoginSchema);

export default LoginModel;