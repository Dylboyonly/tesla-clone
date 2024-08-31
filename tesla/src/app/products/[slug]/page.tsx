import { ObjectId } from "mongodb";
import "@/styles.css";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProductSlug } from "./action";
import AddWishlist from "@/components/AddWishlist";
import { Metadata } from "next";
const BASE_URL = "http://localhost:3000";
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const response = await fetch(`${BASE_URL}/api/products/${params.slug}`, {
    cache: "no-store",
    method: "GET",
    headers: {
      slug: params.slug,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data: Product = await response.json();
  return {
    title: data.name,
    description: data.description,
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function DetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductSlug(params.slug);
  if (!product) {
    return "Product not found";
  }
  return (
    <>
      <div className="w-full h-[6vh] fixed z-10">
        <header className="navbar w-full mt-0 ml-0 px-2 sm:px-4 py-3 flex justify-between items-center bg-black bg-opacity-80 backdrop-blur-md h-[20px]">
          <div className="pl-4 sm:pl-[2rem] pb-2 w-[50%] sm:w-[25%] flex items-center gap-2 sm:gap-5">
            <Link href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[60px] h-[30px] sm:w-[90px] sm:h-[50px]"
                viewBox="0 0 278.7 36.3"
                fill="currentColor"
                color="white"
              >
                <path d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1" />
              </svg>
            </Link>
            |
            <span className="text-white font-medium text-[10px] sm:text-[12.5px]">
              SHOP
            </span>
          </div>
          <nav className="hidden sm:flex pt-2 pb-2 cursor-pointer gap-[10px] sm:gap-[20px] w-[50%] sm:w-1/3 h-[100%] items-center justify-between text-white font-medium bg-transparent">
            <Link href="/products">
              <div className="text-[10px] sm:text-[12px]" id="input2">
                CHARGING
              </div>
            </Link>
            <Link href="/products">
              <div className="text-[10px] sm:text-[12px]" id="input2">
                VEHICLE ACCESSORIES
              </div>
            </Link>
            <Link href="/products">
              <div className="text-[10px] sm:text-[12px]" id="input2">
                APPAREL
              </div>
            </Link>
            <Link href="/products">
              <div className="text-[10px] sm:text-[12px]" id="input2">
                LIFESTYLE
              </div>
            </Link>
          </nav>
          <div className="flex justify-end items-center pr-4 sm:pr-7 w-[50%] sm:w-[25%] gap-3 sm:gap-5">
            <svg
              fill="currentColor"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              color="white"
              className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px]"
            >
              <path d="m228.24 219.76-51.38-51.38a86.15 86.15 0 1 0-8.48 8.48l51.38 51.38a6 6 0 0 0 8.48-8.48ZM38 112a74 74 0 1 1 74 74 74.09 74.09 0 0 1-74-74Z" />
            </svg>
            <Link href="/wishlists">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px] sm:w-[24px] sm:h-[24px] text-white"
                viewBox="0 0 512 512"
                color="white"
              >
                <circle
                  cx={176}
                  cy={416}
                  r={16}
                  style={{
                    fill: "white",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 32,
                  }}
                />
                <circle
                  cx={400}
                  cy={416}
                  r={16}
                  style={{
                    fill: "white",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 32,
                  }}
                />
                <polyline
                  points="48 80 112 80 160 352 416 352"
                  style={{
                    fill: "none",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 32,
                  }}
                />
                <path
                  d="M160,288H409.44a8,8,0,0,0,7.85-6.43l28.8-144a8,8,0,0,0-7.85-9.57H128"
                  style={{
                    fill: "none",
                    stroke: "white",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 32,
                  }}
                />
              </svg>
            </Link>
            <span className="text-white text-[10px] sm:text-[12px]">MENU</span>
          </div>
        </header>
      </div>

      <div className="w-full h-screen bg-black px-4 sm:px-10 md:px-20 py-10 overflow-auto">
        <div
          key={product?._id.toString()}
          className="w-full flex flex-col md:flex-row justify-center mt-8 md:mt-16"
        >
          <figure className="w-full md:w-[60%] h-auto">
            <img
              src={product?.thumbnail}
              alt={product?.name}
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="w-full md:w-[40%] h-auto px-4 sm:px-10 py-2">
            <div className="w-full h-auto">
              <span className="text-[20px] sm:text-[28px] text-white">
                {product?.name}
              </span>
              <p className="text-[18px] sm:text-[20px] text-neutral-400">
                ${product?.price}
              </p>
              <p className="text-[13px] sm:text-[15px] mt-3 tracking-widest text-neutral-500">
                QUANTITY
              </p>
              <div className="flex gap-3 mt-3 items-center">
                <span className="text-neutral-500">-</span>
                <button className="px-6 py-2 sm:px-10 sm:py-3 border border-[1px] border-slate-400 text-neutral-400">
                  1
                </button>
                <span className="text-neutral-500">+</span>
              </div>
            </div>
            <div className="w-full sm:w-[75%] h-[6rem] bg-black border border-[0.1px] border-neutral-800 mt-6">
              <div className="flex justify-center items-center">
                <svg
                  role="img"
                  focusable="false"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14 14"
                  className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px]"
                  fill="white"
                >
                  <path d="M 3.1926815,5.17091 C 3.0520681,5.33777 2.8270866,5.46901 2.6021051,5.45026 2.5739821,5.22528 2.6845981,4.9853 2.8139627,4.83906 2.9545761,4.66845 3.2001809,4.54658 3.4007894,4.53721 3.4232874,4.76969 3.3314204,5.0003 3.1926815,5.17091 M 3.3970397,5.49338 C 3.0708165,5.47458 2.7914645,5.67899 2.6377272,5.67899 2.4802401,5.67899 2.2440095,5.50276 1.9852808,5.50838 1.6496834,5.51438 1.338459,5.70336 1.1678481,6.00521 0.81537705,6.61079 1.0759811,7.50509 1.4172026,7.99818 1.5840638,8.24191 1.7827975,8.51001 2.0452759,8.50063 2.2946304,8.49163 2.3921224,8.3394 2.6920977,8.3394 2.9939479,8.3394 3.0820656,8.50063 3.344544,8.49688 3.6163967,8.49088 3.7870076,8.25315 3.9538689,8.00942 4.1432283,7.73195 4.2219719,7.46384 4.2257216,7.44885 4.2201016,7.44285 3.7007647,7.24449 3.6951402,6.64454 3.6895202,6.14208 4.1057314,5.90397 4.1244799,5.88897 3.8901242,5.54025 3.5245292,5.50276 3.3970397,5.49338 m 1.8823452,-0.67869 0,3.65407 0.5680783,0 0,-1.24865 0.7855604,0 c 0.7180659,0 1.2205246,-0.49308 1.2205246,-1.20552 0,-0.71244 -0.4949593,-1.1999 -1.2017762,-1.1999 l -1.3723871,0 z m 0.5680783,0.47808 0.6543212,0 c 0.4930844,0 0.7743113,0.26248 0.7743113,0.72369 0,0.46122 -0.2812269,0.72744 -0.7761862,0.72744 l -0.6524463,0 0,-1.45113 z m 3.0409999,3.20411 c 0.3562207,0 0.6861936,-0.17998 0.8361812,-0.46683 l 0.011249,0 0,0.43871 0.5249567,0 0,-1.8186 c 0,-0.52683 -0.4218402,-0.86805 -1.0705368,-0.86805 -0.6018255,0 -1.0480388,0.34497 -1.0649125,0.81743 l 0.511833,0 C 8.6803547,6.37456 8.888463,6.22645 9.1734396,6.22645 9.520286,6.22645 9.71527,6.38768 9.71527,6.68578 l 0,0.20249 -0.7086917,0.0431 C 8.3485074,6.97077 7.9922867,7.24072 7.9922867,7.70943 7.9941567,8.18189 8.3616313,8.49686 8.888463,8.49686 Z M 9.0422004,8.0638 c -0.3018501,0 -0.4949592,-0.14624 -0.4949592,-0.36747 0,-0.23061 0.1856097,-0.36372 0.5399555,-0.38435 l 0.6299482,-0.0394 0,0.20623 c 0,0.34123 -0.2906011,0.58496 -0.6749445,0.58496 z m 1.9217166,1.39863 c 0.55308,0 0.813683,-0.21186 1.04054,-0.85118 L 13,5.81773 l -0.577453,0 -0.667445,2.15795 -0.01125,0 -0.667445,-2.15795 -0.592451,0 0.959921,2.66041 -0.0525,0.16123 c -0.08624,0.27373 -0.226856,0.3806 -0.478085,0.3806 -0.045,0 -0.13124,-0.006 -0.166862,-0.009 l 0,0.43872 c 0.03375,0.007 0.174361,0.0131 0.217482,0.0131 z" />
                </svg>
              </div>
              <AddWishlist productId={product?._id} />
            </div>
            <div className="w-full h-auto py-10">
              <span className="text-neutral-400 font-medium tracking-widest">
                DESCRIPTION
              </span>
              <p className="mt-3 text-neutral-500 text-[13px]">
                {product?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
