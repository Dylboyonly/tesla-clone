import { Db , ObjectId} from "mongodb"
import { z } from "zod";
import { getMongoClientInstance } from "../config";

export type WishListItem = {
  _id: ObjectId | string;
  userId: ObjectId | string;
  productId: ObjectId | string;
  createdAt: Date;
  updatedAt?: Date;
};

export type CreateWishListItemInput = Omit<WishListItem, "_id">;
const DATABASE_NAME = process.env.MONGODB_DB_NAME || "test";
const COLLECTION_WISHLIST = "wishlist";

  export const getDb = async () => {
    const client = await getMongoClientInstance();
    const db: Db = client.db(DATABASE_NAME);
  
    return db;
  };

const WishlistSchema = z.object({
  userId: z.string({ message: "User ID is Required" }),
  productId: z.string({ message: "Product ID is Required" }),
});

class WishlistModel {
  static async addWishList(newWish: CreateWishListItemInput) {
    WishlistSchema.parse(newWish);
    const DB = await getDb();
    const wish: CreateWishListItemInput = {
      ...newWish,
      userId: new ObjectId(newWish.userId),
      productId: new ObjectId(newWish.productId),
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await DB.collection(COLLECTION_WISHLIST).insertOne(wish);
    return result;
  }

  static async deleteWishlistItem(wishlistItemId: string) {
    try {
      const DB = await getDb(); // Assuming getDB() function returns the MongoDB database instance
      const result = await DB.collection(COLLECTION_WISHLIST).deleteOne({
        productId: new ObjectId(wishlistItemId), // Convert wishlistItemId to ObjectId
      });
      console.log(result)
      // console.log(wishlistItemId, result)s
      return result;
    } catch (error) {
      console.error('Error deleting wishlist item:', error);
      throw error; // Propagate the error to the caller
    }
  }

  static async getWishList(userId: string): Promise<any[]> {
    const DB = await getDb();
    const agg = [
      {
        '$match': {
          'userId': new ObjectId(userId)
        }
      }, {
        '$lookup': {
          'from': 'products', 
          'localField': 'productId', 
          'foreignField': '_id', 
          'as': 'produc'
        }
      }, {
        '$unwind': {
          'path': '$produc', 
          'preserveNullAndEmptyArrays': true
        }
      }
    ]
    const result = await DB.collection(COLLECTION_WISHLIST).aggregate(agg).toArray();

    return result;
  }
}

export default WishlistModel;
