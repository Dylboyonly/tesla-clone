import * as jwt from "jsonwebtoken"
import * as jose from "jose"
import { UserPayload } from "../models/user";

const secretKey = process.env.SECRET_KEY

if (!secretKey) {
    throw new Error("SECRET_KEY is not defined");
  }

  export const signToken = (payload: UserPayload) => {
    return jwt.sign(payload, secretKey)
}

export const verifyToken = (token: string) => jwt.verify(token, secretKey)

export const readPayloadJose = async <T>(token: string) => {
  const joseSecretKey = new TextEncoder().encode(secretKey);
  const payloadJose = await jose.jwtVerify<T>(token, joseSecretKey);

  return payloadJose.payload;
};