import Link from "next/link";
import { getWishlistByUserId } from "./action";
import DeleteWishlist from "@/components/DeleteWishlist";
import { ObjectId } from "mongodb";
type DataType = {
  _id: string;
  createdAt: string;
  produc: string[];
  productId: string;
  updatedAt: string;
  userId: string;
};

type ProductType = {
  _id: string;
  userId: string;
  productId: string;
  createdAt: string;
  updatedAt: string;
  produc: {
    _id: ObjectId | string;
    name: string;
    slug: string;
    description: string;
    category: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
  };
};

export default async function MyWishlist() {
  const { data } = await getWishlistByUserId();
  const result: ProductType[] = data;

  if (!result) {
    return (
      <>
        <div className="w-full h-[6vh]">
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
              <div className="text-[10px] sm:text-[12px]" id="input2">
                VEHICLE ACCESSORIES
              </div>
              <div className="text-[10px] sm:text-[12px]" id="input2">
                APPAREL
              </div>
              <div className="text-[10px] sm:text-[12px]" id="input2">
                LIFESTYLE
              </div>
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
              <span className="text-white text-[10px] sm:text-[12px]">
                MENU
              </span>
            </div>
          </header>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="w-full h-screen bg-black overflow-auto">
        <div className="w-full h-[6vh]">
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
              <div className="text-[10px] sm:text-[12px]" id="input2">
                VEHICLE ACCESSORIES
              </div>
              <div className="text-[10px] sm:text-[12px]" id="input2">
                APPAREL
              </div>
              <div className="text-[10px] sm:text-[12px]" id="input2">
                LIFESTYLE
              </div>
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
              <span className="text-white text-[10px] sm:text-[12px]">
                MENU
              </span>
            </div>
          </header>
        </div>
        <div className="flex w-full h-auto">
          <div className="w-[15%] h-screen "></div>
          <div className="w-[85%] h-screen  pt-10">
            <div className="w-full h-[5rem] ">
              <span className="text-3xl">Cart</span>
            </div>
            <div className="w-full grid grid-cols-3 gap-10">
              {result.map((wishlist) => {
                return (
                  <>
                    <div className="h-[38rem] w-[26rem]">
                      <figure className="w-full h-[70%]">
                        <img
                          className="w-full h-full object-cover"
                          src={wishlist.produc.thumbnail}
                        />
                      </figure>
                      <div className="w-full h-[30%]">
                        <span className="text-[15px] text-neutral-200">
                          {wishlist.produc.name}
                        </span>
                        <p className="text-[13px] text-neutral-200 mt-1">
                          ${wishlist.produc.price}
                        </p>
                        <DeleteWishlist productId={wishlist.productId} />
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
