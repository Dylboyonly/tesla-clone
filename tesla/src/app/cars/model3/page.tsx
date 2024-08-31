"use client";
import Link from "next/link";
import React, { useState } from "react";

const bgClasses: string[] = [
  "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Choose-Standard-Desktop-LHD.png",
  "https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Choose-Performance-Desktop-LHD.png",
];

const TapBackground: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleTap = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % bgClasses.length);
  };

  return (
    <div
      onClick={handleTap}
      //   //   onDrag={handleTap}
      //   onScroll={handleTap}
      //   on
      className="h-screen w-full transition-all duration-700 relative"
      style={{
        backgroundImage: `url(${bgClasses[currentIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-[10%]">
        <header className="navbar w-full mt-0 ml-0 px-2 py-3 flex justify-between items-center bg-trasnparent h-[10px]">
          <Link
            href="/"
            className="text-4xl text-slate-100 pl-[2rem] pb-2 w-1/3 bg-transparent "
            id="fonts2"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[120px] h-[50px]"
              viewBox="0 0 278.7 36.3"
              fill="white"
              color="white"
            >
              <path d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1" />
            </svg>
          </Link>
          <nav className="pt-2 pb-2 cursor-pointer gap-[30px] w-1/3 bg-transparent h-[100%] items-center justify-center text-black font-medium ">
            <div className="text-[14px] text-white">Vehicles</div>
            <div className="text-[14px] text-white">Energy</div>
            <div className="text-[14px] text-white">Charging</div>
            <div className="text-[14px] text-white">Discover</div>
            <Link href="/shop">
              <div className="text-[14px] text-white">Shop</div>
            </Link>
          </nav>
          <div className="flex justify-end pr-10 w-1/3 gap-4 bg-transparent ">
            <svg
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx={12}
                cy="11.9999"
                r={9}
                stroke="WHITE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <rect
                x={12}
                y={16}
                width="0.01"
                height="0.01"
                stroke="WHITE"
                strokeWidth="2.25"
                strokeLinejoin="round"
              />
              <path
                d="M10.5858 7.58572C10.9754 7.1961 11.4858 7.00083 11.9965 6.99994C12.5095 6.99904 13.0228 7.1943 13.4142 7.58572C13.8047 7.97625 14 8.48809 14 8.99994C14 9.51178 13.8047 10.0236 13.4142 10.4141C13.0228 10.8056 12.5095 11.0008 11.9965 10.9999L12 11.9999"
                stroke="WHITE"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={26}
              height={26}
              viewBox="0 0 100 100"
            >
              <path
                d="M 49.947266 0 A 50 50 0 0 0 0 50 A 50 50 0 0 0 50 100 A 50 50 0 0 0 100 50 A 50 50 0 0 0 50 0 A 50 50 0 0 0 49.947266 0 z M 52.5 5.6816406 C 57.767578 6.577844 62.802435 10.918236 66.767578 18.119141 C 68.045709 20.440292 69.188109 23.045533 70.175781 25.869141 L 52.5 25.869141 L 52.5 5.6816406 z M 47.5 5.8789062 L 47.5 25.869141 L 30.75 25.869141 C 31.737672 23.045533 32.880072 20.440292 34.158203 18.119141 C 37.890361 11.341349 42.5705 7.1024017 47.5 5.8789062 z M 35.980469 7.2324219 C 33.656462 9.5842768 31.569505 12.452374 29.777344 15.707031 C 28.097637 18.757465 26.651832 22.17387 25.464844 25.869141 L 12.009766 25.869141 C 17.545184 17.163368 25.985415 10.499624 35.980469 7.2324219 z M 65.390625 7.6953125 C 74.788044 11.107725 82.70909 17.563275 87.990234 25.869141 L 75.455078 25.869141 C 74.27054 22.173713 72.827771 18.756792 71.148438 15.707031 C 69.471795 12.662163 67.535486 9.9584025 65.390625 7.6953125 z M 9.2558594 30.869141 L 24.064453 30.869141 C 22.818773 36.03111 22.055644 41.62805 21.861328 47.5 L 5.0722656 47.5 C 5.3956707 41.575313 6.8641975 35.962202 9.2558594 30.869141 z M 29.230469 30.869141 L 47.5 30.869141 L 47.5 47.5 L 26.867188 47.5 C 27.07911 41.565457 27.910149 35.945958 29.230469 30.869141 z M 52.5 30.869141 L 71.695312 30.869141 C 73.015632 35.945958 73.846672 41.565457 74.058594 47.5 L 52.5 47.5 L 52.5 30.869141 z M 76.855469 30.869141 L 90.744141 30.869141 C 93.135803 35.962202 94.604329 41.575313 94.927734 47.5 L 79.052734 47.5 C 78.858992 41.628492 78.09777 36.031966 76.855469 30.869141 z M 5.0722656 52.5 L 21.833984 52.5 C 21.962781 58.356194 22.654426 63.953511 23.828125 69.130859 L 9.2558594 69.130859 C 6.8641975 64.037798 5.3956707 58.424687 5.0722656 52.5 z M 26.833984 52.5 L 47.5 52.5 L 47.5 69.130859 L 28.980469 69.130859 C 27.735338 64.030209 26.974419 58.415464 26.833984 52.5 z M 52.5 52.5 L 74.091797 52.5 C 73.951362 58.415464 73.190444 64.030209 71.945312 69.130859 L 52.5 69.130859 L 52.5 52.5 z M 79.076172 52.5 L 94.927734 52.5 C 94.604329 58.424687 93.135803 64.037798 90.744141 69.130859 L 77.089844 69.130859 C 78.260736 63.952928 78.947413 58.355459 79.076172 52.5 z M 12.009766 74.130859 L 25.146484 74.130859 C 26.388048 78.214539 27.946438 81.969904 29.777344 85.294922 C 31.214957 87.905702 32.844862 90.263718 34.630859 92.3125 C 25.224063 88.902117 17.294926 82.443041 12.009766 74.130859 z M 30.404297 74.130859 L 47.5 74.130859 L 47.5 94.927734 C 47.192144 94.910934 46.888194 94.880362 46.582031 94.857422 C 41.991579 93.35814 37.657754 89.23818 34.158203 82.882812 C 32.729742 80.288653 31.465568 77.345521 30.404297 74.130859 z M 52.5 74.130859 L 70.521484 74.130859 C 69.460213 77.345521 68.19604 80.288653 66.767578 82.882812 C 63.33995 89.107564 59.11242 93.191264 54.626953 94.765625 C 53.922902 94.837305 53.213353 94.888795 52.5 94.927734 L 52.5 74.130859 z M 75.775391 74.130859 L 87.990234 74.130859 C 82.968688 82.028446 75.557371 88.245533 66.761719 91.771484 C 68.365599 89.851391 69.836506 87.677457 71.148438 85.294922 C 72.979247 81.970075 74.536142 78.215463 75.775391 74.130859 z"
                color="#000"
                overflow="visible"
                fill="white"
                strokeWidth="3.64359"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeDashoffset="188.976"
              />
            </svg>
            <Link href="/profile">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                viewBox="0 0 500 500"
                className=""
                fill="white"
              >
                <path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM385.32,375.25a4,4,0,0,1-6.14-.32,124.27,124.27,0,0,0-32.35-29.59C321.37,329,289.11,320,256,320s-65.37,9-90.83,25.34a124.24,124.24,0,0,0-32.35,29.58,4,4,0,0,1-6.14.32A175.32,175.32,0,0,1,80,259C78.37,161.69,158.22,80.24,255.57,80S432,158.81,432,256A175.32,175.32,0,0,1,385.32,375.25Z" />
                <path d="M256,144c-19.72,0-37.55,7.39-50.22,20.82s-19,32-17.57,51.93C191.11,256,221.52,288,256,288s64.83-32,67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39,151.44,275.59,144,256,144Z" />
              </svg>
            </Link>
          </div>
        </header>
      </div>
      <div className="w-full h-[50vh] absolute bottom-20 px-40">
        <span className="text-5xl font- translate-x-2 transition-transform ease-in duration-200">
          Model 3
        </span>
        <p className="text-[20px] font-medium">Standard and long range</p>
        <div className="grid gird-col-1 gap-3">
          <button className="px-2 py-2 w-[20vw] bg-blue-500 mt-10  hover:scale-110 transition-transform rounded-sm">
            {" "}
            order now
          </button>
          <button className="px-2 py-2 w-[20vw] bg-neutral-900 mt-2 hover:scale-110 transition-transform rounded-sm">
            {" "}
            learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default TapBackground;
