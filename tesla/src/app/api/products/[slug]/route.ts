
import {NextRequest , NextResponse} from "next/server"
import { getSpesificProducts } from "@/db/models/product"


export const GET = async (request: NextRequest)=>{
    const slug = request.headers.get("slug")
    console.log(slug)
    if(!slug){
        return null
    }
    const products = await getSpesificProducts(slug)
    // console.log(products , " inii data productnya")
    return NextResponse.json(products)
  
}

