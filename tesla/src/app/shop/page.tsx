import Link from "next/link";
import "@/styles.css";
import ProductApp from "@/components/product";

export default function ShopLandingPage() {
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

      <div
        className="w-full h-screen bg-cover bg-center bg-no-repeat flex justify-center"
        style={{
          backgroundImage: `url("https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/tesla-shop-marketing-imagery/hero-carousel/M_Gradient-2800px_Text.png")`,
        }}
      >
        <button className="w-[19vw] h-[4.5vh] bg-neutral-600 bg-opacity-40 backdrop-blur-sm absolute bottom-20 text-neutral-400 text-[13px] font-medium border border-neutral-600">
          SHOP NOW
        </button>
      </div>
      <div
        className="w-full h-[80vh] bg-contain bg-center transform flip-y;"
        style={{
          backgroundImage: `url("https://e0.pxfuel.com/wallpapers/132/856/desktop-wallpaper-dots-dark-ipad-pro-retina-display-ipad-pro-black.jpg")`,
        }}
      >
        <div className="w-full h-[18%] py-7 flex items-end px-7 relative z-1">
          <span className="text-white text-3xl">BEST SELLERS</span>
        </div>
        <div className="w-full h-[82%]">
          <ProductApp />
        </div>
      </div>
      <div className="w-full h-screen bg-[url(https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/4Z65LglsywtlS42_web.jpg)] bg-cover relative z-1">
        <div className="w-full h-[17rem] absolute bottom-0">
          <div className="w-full h-1/4  flex justify-center items-end">
            <span className="text-3xl text-white">CYBERTRUCK</span>
          </div>
          <div className="w-full h-[20%] flex justify-center items-start">
            <span className="text-[18px] text-white">ACCESSORIES</span>
          </div>
          <div className="w-full h-[30%] flex justify-center items-start">
            <button className="bg-neutral-400 bg-opacity-10 backdrop-blur-md h-[3rem] w-[20vw] text-[12px] font-medium border border-[0.1px] border-white">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-black bg-cover relative z-1 px-10 py-11">
        <div className="w-full h-full px-5 mt-5">
          <img
            className="w-full h-[88%] object-cover"
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MS_web.jpg"
          />
          <div className="w-full h-[6rem] flex justify-between items-center">
            <div className="flex gap-4 justify-center items-center">
              <span className="text-3xl text-white font-400">MODEL S</span>|
              <span className="text-slate-400">ACCESSORIES</span>
            </div>
            <button className="bg-neutral-400 bg-opacity-10 backdrop-blur-md h-[3rem] w-[20vw] text-[12px] text-slate-300 font-medium border border-[0.1px] border-slate-700">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-black bg-cover relative z-1 px-10 py-11">
        <div className="w-full h-full px-5 ">
          <img
            className="w-full h-[88%] object-cover"
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaapp/homepage/M3H_desktop-2800x1300.jpg"
          />
          <div className="w-full h-[6rem] flex justify-between items-center">
            <div className="flex gap-4 justify-center items-center">
              <span className="text-3xl text-white font-400">MODEL 3</span>|
              <span className="text-slate-400">ACCESSORIES</span>
            </div>
            <button className="bg-neutral-400 bg-opacity-10 backdrop-blur-md h-[3rem] w-[20vw] text-[12px] text-slate-300 font-medium border border-[0.1px] border-slate-700">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-black bg-cover relative z-1 px-10 py-11">
        <div className="w-full h-full px-5">
          <img
            className="w-full h-[88%] object-cover"
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MX_web.jpg"
          />
          <div className="w-full h-[6rem] flex justify-between items-center">
            <div className="flex gap-4 justify-center items-center">
              <span className="text-3xl text-white font-400">MODEL X</span>|
              <span className="text-slate-400">ACCESSORIES</span>
            </div>
            <button className="bg-neutral-400 bg-opacity-10 backdrop-blur-md h-[3rem] w-[20vw] text-[12px] text-slate-300 font-medium border border-[0.1px] border-slate-700">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-black bg-cover relative z-1 px-10 py-11">
        <div className="w-full h-full px-5 py-5">
          <img
            className="w-full h-[88%] object-cover"
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/MY_web.jpg"
          />
          <div className="w-full h-[6rem] flex justify-between items-center">
            <div className="flex gap-4 justify-center items-center">
              <span className="text-3xl text-white font-400">MODEL Y</span>|
              <span className="text-slate-400">ACCESSORIES</span>
            </div>
            <button className="bg-neutral-400 bg-opacity-10 backdrop-blur-md h-[3rem] w-[20vw] text-[12px] text-slate-300 font-medium border border-[0.1px] border-slate-700">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-[url(https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/fvW6NvXGLVYM7kco63br_desktop.jpg)] bg-cover bg-center  relative z-1">
        <div className="w-full h-[13rem] absolute bottom-0">
          <div className="w-full h-1/2 flex justify-center items-center">
            <span className="text-3xl text-white">CHARGING</span>
          </div>
          <div className="w-full h-[20%] flex justify-center items-start">
            <button className="bg-neutral-400 bg-opacity-10 backdrop-blur-md h-[3rem] w-[20vw] text-[12px] font-medium border border-[0.1px] border-white">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-black relative z-1 px-10 py-8 flex justify-between gap-10">
        <div className="w-1/3 h-full ">
          <img
            className="w-full h-[77%] object-cover"
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/faf200f05dde1_men_web.jpg"
          />
          <div className="w-full h-[12rem]  px-8 py-6">
            <p className="text-white text-3xl">MEN'S</p>
            <p className="text-white text-1xl">APPAREL</p>
            <button className="bg-neutral-400 bg-opacity-10 backdrop-blur-md px-20 py-3 text-[12px] mt-4 font-medium border border-[0.1px] border-white">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="w-1/3 h-full ">
          <img
            className="w-full h-[77%] object-cover"
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/faf200f05dde1_women_web.jpg"
          />
          <div className="w-full h-[12rem]  px-8 py-6">
            <p className="text-white text-3xl">MEN'S</p>
            <p className="text-white text-1xl">APPAREL</p>
            <button className="bg-neutral-400 bg-opacity-10 backdrop-blur-md px-20 py-3 text-[12px] mt-4 font-medium border border-[0.1px] border-white">
              SHOP NOW
            </button>
          </div>
        </div>
        <div className="w-1/3 h-full ">
          <img
            className="w-full h-[77%] object-cover"
            src="https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/faf200f05dde1_kids_web.jpg"
          />
          <div className="w-full h-[12rem]  px-8 py-6">
            <p className="text-white text-3xl">MEN'S</p>
            <p className="text-white text-1xl">APPAREL</p>
            <button className="bg-neutral-400 bg-opacity-10 backdrop-blur-md px-20 py-3 text-[12px] mt-4 font-medium border border-[0.1px] border-white">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div className="w-full h-screen bg-[url(https://digitalassets-shop.tesla.com/image/upload/f_auto,q_auto/v1/content/dam/tesla/teslaweb/homepage/XQ7KsyDQ9Au8AXv5hHr1_web.jpg)] bg-cover bg-center relative z-1">
        <div className="w-full h-[16rem] absolute bottom-0">
          <div className="w-full h-[30%] flex justify-center items-center">
            <span className="text-3xl text-white">LIFESTYLE</span>
          </div>
          <div className="w-full h-[20%] flex justify-center items-start">
            <button className="bg-neutral-400 bg-opacity-10 backdrop-blur-md h-[3rem] w-[20vw] text-[12px] font-medium border border-[0.1px] border-white">
              SHOP NOW
            </button>
          </div>
          <div className="w-full h-[10%] bg-neutral-900 absolute bottom-0 flex justify-center items-center gap-7">
            <span className="text-[11px] tracking-widest">TESLA @ 2024</span>
            <span className="text-[11px] tracking-widest">
              PRIVACY & LEGAL CONDITIONS
            </span>
            <span className="text-[11px] tracking-widest">LOCATIONS</span>
          </div>
        </div>
      </div>
    </>
  );
}
