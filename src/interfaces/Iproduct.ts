export interface IPRODUCT extends Document {
  P_ID?: string;
  NAME: string;
  DESCRIPTION?: string;
  PRICE: number;
  CATEGORY: "VEG" | "NON-VEG" | "DRINKS" | "DESSERTS";
  IS_AVAILABLE: boolean;
  IMAGE_URL?: string;
  CREATED_AT?: Date;
  UPDATED_AT?: Date;
  R_ID:Number;
}

export interface ICATEGORY extends Document{
  ID?: string;
  NAME: "VEG" | "NON-VEG" | "DRINKS" | "DESSERTS";
  LABEL: string;
  DESCRIPTION?: string;
  IMAGE_URL?: string;
}
