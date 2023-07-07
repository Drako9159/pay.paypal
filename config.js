import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT;
export const HOST = "http://localhost:" + PORT;
export const PAYPAL_API_SECRET = process.env.PAYPAL_APY_SECRET
export const PAYPAL_API_CLIENT = process.env.PAYPAL_API_CLIENT