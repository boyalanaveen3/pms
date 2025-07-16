import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "@/interfaces/Iuser";

const registerSchema: Schema<IUser> = new Schema({
  FIRST_NAME: { type: String, required: true },
  LAST_NAME: { type: String, required: true },
  EMAIL_ID: { type: String, required: true },
  PH_NO: { type: String, required: true },
  U_ID: { type: String, required: true },
  PASSWORD:{type: String, required: true}
});

const UserModel: Model<IUser> = mongoose.model<IUser>("Users", registerSchema);

export default UserModel;
