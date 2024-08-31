import  {createUser} from "@/db/models/user";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import {z} from "zod"
 
const UserInput = z.object({
    name: z.string({
        message: "Name is required"
    }),
    username: z.string({
        message: "username  is required"
    }),
    email: z.string({
        message: "Email is required"
    }).email({
        message: "Must be a valid email format"
    }),
    password: z.string({
        message: "Password is required"
    }).min(5,{
        message: "Password should be minimum 5 characters long"
    })
  })


export async function POST(req: NextRequest) {
  try {
    const body = await req.json()    
    const parsedData = UserInput.safeParse(body);
    
    if (parsedData.success) {
        const result = await createUser(parsedData.data);
        // Continue processing result...
      } else {
        // Handle the error (e.g., return a response with the error details)
        return redirect (`http://localhost:3000/register`)
      }
    // console.log(result);
    
    return NextResponse.json(
      {
        message: `Success Register User ${body.username}`,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.log(error);  
    return NextResponse.json(
      {
        message: error
      },
      {
        status: 500
      }
    );
  }
}