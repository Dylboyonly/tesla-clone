import WishlistModel, { CreateWishListItemInput } from "@/db/models/wishlist"
import { ObjectId } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

export interface WishlistItm {
  id: string;
  userId: string;
  productId: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface Games {
  id: string
  name: string
  slug: string
  description: string
  excerpt: string
  price: number
  tags: string[]
  thumbnail:string
}

export interface ApiResponse<T> {
  statusCode: number
  message?: string
  data?: T
  error?: string
}

export interface PostReqBody {
  productId: string
}

export async function GET(req: NextRequest) {
  const userId = req.headers.get("x-user-id") as string
  // console.log(userId, "User id di API wishlist");
  
  try {
    const dataWishlist: WishlistItm[] =  await WishlistModel.getWishList(userId)
    // console.log(dataWishlist, "data wishlist di API wishlist");
    
    return NextResponse.json<ApiResponse<WishlistItm[]>>({
      statusCode: 200,
      message: "Success Fetch WishList",
      data: dataWishlist
    })
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    return NextResponse.json<ApiResponse<never>>(
      {
        statusCode: 500,
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
  
}
export async function POST(req: NextRequest) { 
  try {
    const body = await req.json();
    const userId = req.headers.get("x-user-id") as string;

    if (!userId || !body) {
      return NextResponse.json<ApiResponse<never>>(
        {
          statusCode: 400,
          error: "User ID and Product ID are required",
        },
        { status: 400 }
      );
    }

    const newWishlist = {
      userId,
      productId: body,
      createdAt: new Date()

    }

    console.log(await WishlistModel.addWishList(newWishlist));



    return NextResponse.json(
      {
        message: `Success add to wishlist`,
        // data,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(req: NextRequest) { 
  try {
    // const body = await req.json(); // Assuming wishlistId is passed in the request body
    // console.log(body)
    const productId = req.headers.get("productid")
    if(!productId){
        return NextResponse.json(
            {
              message: `PRODUCT ID REQUIRED`,
            },
            {
              status: 400,
            }
          );
    }
    
    await WishlistModel.deleteWishlistItem(productId);

    return NextResponse.json(
      {
        message: `Success delete wishlist item`,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}
