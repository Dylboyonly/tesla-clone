import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import { readPayloadJose } from "@/db/utils/jwt";


export const middleware = async (request: NextRequest) => {

  if (
    !request.url.includes("/api") &&
    !request.url.includes("_next/static") &&
    !request.url.includes("_next/image") &&
    !request.url.includes("favicon.ico")
  ) {
    console.log(request.method, request.url);
  }

  if (request.url.includes("http://localhost:3000/api/wishlist")) {
    console.log("API", request.method, request.url , "hehebiniii payloadnyaaaaaaaaaa wwkkwkw");


    const cookiesStore = cookies();
    const token = cookiesStore.get("token");
    // console.log(token?.value)
  
    // console.log("token dari cookieStore", token);


    if (!token) {
      return NextResponse.json({
        statusCode: 401,
        error: "Unauthorized",
      });
    }

    const tokenData = await readPayloadJose(token.value) as {
      id: string;
      email: string;
      username: string;
    };

    console.log(tokenData)

    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-user-id", tokenData.id);
    requestHeaders.set("x-user-email", tokenData.email);
  
    return NextResponse.next({
      headers: requestHeaders,
    });
  }

  // Jangan lupa untuk meng-"sliding" supaya request bisa dilanjutkan ke handler berikutnya dengan menggunakan "next()"
  return NextResponse.next();
};