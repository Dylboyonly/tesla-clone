"use server"
import { getUserByEmail } from "@/db/models/user";
import { compare, hash } from "@/db/utils/bcrypt"
import { redirect } from "next/navigation"; 
import { cookies } from "next/headers";
import { z } from "zod"
import { signToken } from "@/db/utils/jwt";


 export async function LoginFunction(form: FormData){
    const loginSchema = z.object({
        email: z.string().email(),
        password: z.string()
    });

    const email = form.get("email")
    const password = form.get("password")
    console.log(email)
    console.log(password)

    const parsedData = loginSchema.safeParse({
        email,
        password
    })

    if(!parsedData.success) {
        const errPath = parsedData.error.issues[0].path[0]
        const errMesage = parsedData.error.issues[0].message;
        const errFinalMessage = `${errPath}-${errMesage}`

        return redirect(`http://localhost:3000/login?error=${errFinalMessage}`)
    }

    const user = await getUserByEmail(parsedData.data.email)

    if(!user || !compare(parsedData.data.password, user.password)){
        return redirect (`http://localhost:3000/login?error=Invalid%20credentials`)
    }

    console.log(user._id)
    // redirect("/")
    const payload = {
        id: user._id,
        email: user.email,
        username: user.username
    }

    const token = signToken(payload)
    // console.log(token)

    cookies().set("token", token, {
        httpOnly: true,
        secure: false,
        expires: new Date(Date.now() + 1000 * 60 * 60),
        sameSite: "strict"
    })
    
    return redirect(`/`)
}