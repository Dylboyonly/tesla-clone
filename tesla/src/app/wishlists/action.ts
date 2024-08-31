"use server"
import { revalidatePath } from "next/cache"
// import { redirect } from "next/dist/server/api-utils"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export async function getWishlistByUserId() {
    try {
        const res = await fetch("http://localhost:3000/api/wishlist", {
            cache: "no-store",
            method: "GET",
            headers: {
                Cookie: cookies().toString()
            }
        })
    
        const data = await res.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function deleteWishlistByProductId(productId: string) {
    try {
        const res = await fetch("http://localhost:3000/api/wishlist", {
            cache: "no-store",
            method: "DELETE",
            headers: {
                Cookie: cookies().toString(),
                productId
            }
        })
        revalidatePath("/wishlists")
        // return data
    } catch (error) {
        console.log(error)
    }    
}