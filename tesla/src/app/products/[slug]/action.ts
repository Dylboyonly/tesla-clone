"use server"
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
export type Product = {
    _id: ObjectId;
    name: string;
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
  };
export async function getProductSlug(slug:string) {
    try {
        const res = await fetch(`http://localhost:3000/api/products/${slug}`, {
            method: "GET",
            headers: {
                slug
            }

        })
        const data: Product = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function addToWishlist(productId:ObjectId) {
    try {

        const res = await fetch(`http://localhost:3000/api/wishlist`, {
            method: "POST",
            headers: {
                Cookie: cookies().toString(),
            },
            body: JSON.stringify(productId)
        })
        const data = await res.json()
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}