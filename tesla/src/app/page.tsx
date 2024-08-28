import NavigationBar from "@/components/Navbar";
import "@/styles.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen w-full bg-slate-black bg-[url(https://images2.alphacoders.com/105/1052786.jpg)] bg-cover overflow-auto relative">
        <NavigationBar />
        <div className="w-full h-[30vh]">
          <div className="w-full h-1/3 flex items-end justify-center">
            <span className="text-5xl text-slate-700 font-bold ">Model 3</span>
          </div>
          <div className="w-full h-[17%]  flex items-center justify-center">
            <span className="text-2xl text-slate-700 font-bold pt-2">
              1.99% APR Financing Ending August 31{" "}
            </span>
          </div>
          <div className="w-full h-[1px] flex justify-center items-center">
            <div className="w-1/3 h-full bg-black"></div>
          </div>
          <div className="w-full h-[10%] flex items-center justify-center">
            <span className="text-1xl text-slate-700 font-semibold ">
              From $34,999
            </span>
          </div>
        </div>
        <div className="w-full h-[15vh] bottom-0 absolute flex justify-center items-center gap-5">
          <Link
            href="cars/model3"
            className="w-[16%] h-[30%] bg-blue-500 flex justify-center items-center rounded-md text-white hover:scale-110 transition-transform"
          >
            Order Now
          </Link>
          <button className="w-[16%] h-[30%] bg-slate-100 rounded-md text-black hover:scale-110 transition-transform">
            Demo Drive
          </button>
        </div>
      </div>
      <div className="h-screen w-full bg-slate-black bg-[url(https://wallpapercat.com/w/full/c/1/c/84765-3840x2160-desktop-4k-tesla-model-y-wallpaper-image.jpg)] bg-cover overflow-auto relative">
        <div className="w-full h-[40vh]">
          <div className="w-full h-1/3 flex items-end justify-center">
            <span className="text-5xl text-slate-100 font-bold ">Model Y</span>
          </div>
          <div className="w-full h-[17%]  flex items-center justify-center">
            <span className="text-2xl text-slate-200 font-bold pt-2">
              1.99% APR Financing Ending August 31{" "}
            </span>
          </div>
          <div className="w-full h-[1px] flex justify-center items-center">
            <div className="w-1/3 h-full bg-slate-200"></div>
          </div>
          <div className="w-full h-[10%] flex items-center justify-center">
            <span className="text-1xl text-slate-100 font-semibold ">
              From $31,490
            </span>
          </div>
        </div>
        <div className="w-full h-[15vh] bottom-0 absolute flex justify-center items-center gap-5">
          <button className="w-[16%] h-[30%] bg-blue-500 rounded-md text-white hover:scale-110 transition-transform">
            Order Now
          </button>
          <button className="w-[16%] h-[30%] bg-slate-100 rounded-md text-black hover:scale-110 transition-transform">
            Demo Drive
          </button>
        </div>
      </div>
      <div className="h-screen w-full bg-slate-black bg-[url(https://images.alphacoders.com/121/1210653.jpg)] bg-cover overflow-auto relative">
        <div className="w-full h-[40vh]">
          <div className="w-full h-1/3 flex items-end justify-center">
            <span className="text-5xl text-slate-700 font-bold ">Model X</span>
          </div>
          <div className="w-full h-[13%] flex items-end justify-center">
            <span className="text-2xl text-slate-700 font-bold pt-2">
              From $65,990{" "}
            </span>
          </div>
          <div className="w-full h-[7%] flex items-center justify-center">
            <span className="text-1xl text-slate-700 font-semibold ">
              After Federal Tax Credit $7,500
            </span>
          </div>
          <div className="w-full h-[1px] flex justify-center items-center">
            <div className="w-[17%] h-full bg-slate-700"></div>
          </div>
          <div className="w-full h-[7%] flex items-center justify-center">
            <span className="text-1xl text-slate-700 font-semibold ">
              and Est. Gas Savings $6,500
            </span>
          </div>
          <div className="w-full h-[1px] flex justify-center items-center">
            <div className="w-[17%] h-full bg-slate-700"></div>
          </div>
        </div>
        <div className="w-full h-[15vh] bottom-0 absolute flex justify-center items-center gap-5">
          <button className="w-[16%] h-[30%] bg-blue-500 rounded-md text-white hover:scale-110 transition-transform">
            Order Now
          </button>
          <button className="w-[16%] h-[30%] bg-slate-100 rounded-md text-black hover:scale-110 transition-transform">
            Demo Drive
          </button>
        </div>
      </div>
      <div className="h-screen w-full bg-slate-black bg-[url(https://pbs.twimg.com/media/GAN4O1BXcAA3IUC?format=jpg&name=4096x4096)] bg-cover overflow-auto relative">
        <div className="w-full h-[40vh] flex justify-center">
          <div className="w-full h-2/3 flex items-end justify-center">
            <img
              className="w-1/2 h-1/2 object-contain"
              src="https://svgmix.com/uploads/ba6103-tesla-cybertruck.svg"
            />
          </div>
        </div>
        <div className="w-full h-[15vh] bottom-0 absolute flex justify-center items-center gap-5">
          <Link
            href="cars/cybertruck"
            className="w-[16%] h-[33%] bg-black flex justify-center items-center  bg-opacity-60 backdrop-blur-md rounded-sm border border-white text-white border-t-4 hover:scale-110 transition-transform"
          >
            Order Now
          </Link>
          <button className="w-[16%] h-[33%] bg-black bg-opacity-60 backdrop-blur-md rounded-sm border border-white text-white border-b-4 hover:scale-110 transition-transform">
            Demo Drive
          </button>
        </div>
      </div>
      <div className="h-screen w-full bg-slate-black bg-[url(https://wallpaperaccess.com/full/2056374.jpg)] bg-cover overflow-auto relative">
        <div className="w-full h-[40vh]">
          <div className="w-full h-1/3 flex items-end justify-center">
            <span className="text-5xl text-slate-700 font-bold ">
              Solar Panels
            </span>
          </div>
          <div className="w-full h-[8%] flex items-center justify-center mt-2">
            <span className="text-2xl text-slate-700 font-semibold ">
              Schedule a virtual consultation
            </span>
          </div>
          <div className="w-full h-[1px] flex justify-center items-center">
            <div className="w-[24%] h-full bg-slate-700"></div>
          </div>
        </div>
        <div className="w-full h-[15vh] bottom-0 absolute flex justify-center items-center gap-5">
          <button className="w-[16%] h-[30%] bg-blue-500 rounded-md text-white hover:scale-110 transition-transform">
            Order Now
          </button>
          <button className="w-[16%] h-[30%] bg-slate-100 rounded-md text-black hover:scale-110 transition-transform">
            Learn More
          </button>
        </div>
      </div>
      <div className="h-[94vh] w-full bg-slate-black bg-[url(https://images.squarespace-cdn.com/content/v1/626df45e313c077c4ff2703d/6988c999-6953-4d04-a21f-4c9f26907850/tesla-wall-connector.jpeg)] bg-cover overflow-auto relative">
        <div className="w-full h-[10vh] flex items-end justify-center">
          <div className="w-full h-1/3 flex items-center justify-center">
            <span className="text-5xl text-white font-bold ">Accesories</span>
          </div>
        </div>
        <div className="w-full h-[15vh] bottom-0 absolute flex justify-center items-center gap-5">
          <button className="w-[16%] h-[30%] bg-blue-500 rounded-md text-white hover:scale-110 transition-transform">
            Shop Now
          </button>
        </div>
      </div>
      <div className="h-[60vh] w-full bg-black flex justify-center items-center">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-full py-5 px-5 sm:py-10 sm:px-10">
          <p className="text-[10px] sm:text-[12px] w-full px-5 sm:px-10 h-1/4 flex justify-center items-center">
            1 Price before estimated savings is $44,130, including Destination
            and Order Fees, but excluding taxes and other fees. Subject to
            change. Vehicle shown has upgrades that will increase the price.
            Estimated savings includes $5,000 in gas savings estimated over five
            years, the $7,500 Federal Tax Credit and state incentives, available
            to eligible buyers and subject to MSRP caps. Model 3 Rear-Wheel
            Drive and leases not eligible for the Federal Tax Credit. Terms
            apply.
          </p>
          <p className="text-[10px] sm:text-[12px] w-full px-5 sm:px-10 h-1/4 flex justify-center items-center">
            2 Price before estimated savings is $46,630, including Destination
            and Order Fees, but excluding taxes and other fees. Subject to
            change. Vehicle shown has upgrades that will increase the price.
            Estimated savings includes $6,000 in gas savings estimated over five
            years, the $7,500 Federal Tax Credit and state incentives, available
            to eligible buyers and subject to MSRP caps. Not all vehicles,
            customers or finance options will be eligible. Terms apply.
          </p>
          <p className="text-[10px] sm:text-[12px] w-full px-5 sm:px-10 h-1/4 flex justify-center items-center">
            3 Price before estimated savings is $81,630, including Destination
            and Order Fees, but excluding taxes and other fees. Subject to
            change. Vehicle shown has upgrades that will increase the price.
            Estimated savings includes $6,500 in gas savings estimated over five
            years, the $7,500 Federal Tax Credit and state incentives, available
            to eligible buyers and subject to MSRP caps. Not all vehicles,
            customers or finance options will be eligible. Terms apply.
          </p>
          <p className="text-[10px] sm:text-[12px] w-full px-5 sm:px-10 h-1/4 flex justify-center items-center">
            4 Price before estimated savings is $76,630, including Destination
            and Order Fees, but excluding taxes and other fees. Subject to
            change. Vehicle shown has upgrades that will increase the price.
            Estimated savings includes $6,500 in gas savings estimated over five
            years and state incentives, available to eligible buyers and subject
            to MSRP caps. Not all vehicles, customers or finance options will be
            eligible. Terms apply.
          </p>
        </div>
      </div>
      <div className="w-full h-[5vh] flex justify-center items-center text-white text-[12.5px] pr-8 gap-5">
        <span>Tesla 2024</span>
        <span>Privacy & Legal</span>
        <span>Vehicle Recalls</span>
        <span>Contact</span>
        <span>News</span>
        <span>Get Updates</span>
        <span>Locations</span>
      </div>
    </>
  );
}
