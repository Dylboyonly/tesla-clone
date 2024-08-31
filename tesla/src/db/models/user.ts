import { Db , ObjectId} from "mongodb"
import {getMongoClientInstance} from "../config"
import { z } from "zod"
import {compare } from "../utils/bcrypt"
import { signToken, verifyToken } from "../utils/jwt"
import { hash } from "../utils/bcrypt"
import { redirect } from "next/navigation"

export type ModelUser = {
  _id: ObjectId;
  name: string;
  username: string;
  email: string;
  password: string;
}

export type UserRegister = Omit<ModelUser ,"_id">

type UserLogin = {
    email: string;
    password: string;
  };
  
  export type UserPayload = {
    id: ObjectId;
    email: string;
    username: string;
  };

  

  const LoginSchema = z.object({
    username: z.string({ message: "Username cannot be empty" }),
    password: z.string({ message: "Password cannot be empty" }),
  });

const DATABASE_NAME = process.env.MONGODB_DB_NAME || "test";
const COLLECTION_USER = "users";

  export const getDb = async () => {
    const client = await getMongoClientInstance();
    const db: Db = client.db(DATABASE_NAME);
  
    return db;
  };


  export const Login = async(user: UserLogin) =>{
    const InputResult =  LoginSchema.safeParse(user)

    if(!InputResult.success) {
        const errPath = InputResult.error.issues[0].path[0]
        const errMesage = InputResult.error.issues[0].message
        const errFinalMessage = `${errPath}-${errMesage}`
  
        throw errFinalMessage
      }

      const DB = await getDb();
      const findUsername = await DB.collection(COLLECTION_USER).findOne({
        email: user.email,
      });
  
      if (!findUsername) throw new Error("Invalid Username or Password");
  
      const checkPassword = compare(
        user.password,
        findUsername.password
      );
  
      if (!checkPassword) throw new Error("Invalid Username or Password");
  
      const payload: UserPayload = {
        id: findUsername._id,
        email: findUsername.email,
        username: findUsername.username,
      };
      const access_token = signToken(payload);
  
      return { username: findUsername.username, access_token };
  }


  export const createUser = async (user: UserRegister) => {
    
        const db = await getDb();
        const checkMail = await db.collection(COLLECTION_USER).findOne({
          email: user.email,
        });
    
        const checkUsername = await db.collection(COLLECTION_USER).findOne({
          username: user.username,
        });
    
        if (checkMail) throw new Error("Email already Exists");
        if (checkUsername) throw new Error("Username already Exists");
    
        const modifiedUser: UserRegister = {
          ...user,
          password: hash(user.password),
        };
      
        const result = await db.collection(COLLECTION_USER).insertOne(modifiedUser);
      
        return result;
  };


  export const getUserByUsername = async (username: string): Promise<ModelUser> =>{
    const db = await getDb()
    const user = (await db.collection(COLLECTION_USER).findOne(
      { username }
    )) 
    return user as ModelUser
  }

  export const getUserByEmail = async (email: string) => {
    const db = await getDb();
    const user = (await db
      .collection(COLLECTION_USER)
      .findOne({ email: email })) as ModelUser;
  
    return user;
  };