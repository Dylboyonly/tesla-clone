import {NextRequest , NextResponse} from "next/server"
import {getAllProducts} from "@/db/models/product"


export const GET = async ( request : NextRequest)=>{
    const products = await getAllProducts()
    // console.log(products , "ini product di shop")
    return NextResponse.json(products)
}