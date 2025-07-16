
export interface IUser extends Document {
  FIRST_NAME: string;
  LAST_NAME: string;
  EMAIL_ID: string;
  PH_NO: string;
  U_ID: string;
  PASSWORD:string;
}
export interface ILogin extends Document {
  EMAIL_ID: string;
  PH_NO: string;
  PASSWORD: string;
}


