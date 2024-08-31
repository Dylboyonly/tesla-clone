import { Db , ObjectId} from "mongodb"
import {getMongoClientInstance} from "../config"

export type ProductModel ={
    _id: ObjectId;
    name : string;
    slug: string;
    description: string;
    category: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    images: string[];
    createdAt: string;
    updatedAt: string;
}

const DATABASE_NAME = process.env.MONGODB_DB_NAME || "test";
const COLLECTION_PRODUCT = "products";

export const getDb = async () => {
    const client = await getMongoClientInstance();
    const db: Db = client.db(DATABASE_NAME);
  
    return db;
  };

  export const getAllProducts = async () => {
    const db = await getDb();
    
    const product = (await db
      .collection(COLLECTION_PRODUCT)
      .find()
      .toArray()) as ProductModel[];
  
    return product;
  };

  export const getSpesificProducts = async (slug: string): Promise<ProductModel> => {
    const db = await getDb();
    const OneProduct = await db.collection(COLLECTION_PRODUCT).findOne({slug}
       
    );
    return OneProduct  as ProductModel;        
  };