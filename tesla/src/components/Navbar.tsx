import Link from "next/link";

export default function NavigationBar() {
  return (
    <>
      <header className="navbar w-full mt-0 ml-0 px-2 py-3 flex justify-between items-center bg-transparent h-[70px] bg-transparent ">
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
            fill="currentColor"
            color="black"
          >
            <path d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1" />
          </svg>
        </Link>
        <nav className="pt-2 pb-2 cursor-pointer gap-[30px] w-1/3 bg-transparent h-[100%] items-center justify-center text-black font-medium ">
          <div className="text-[14px]">Vehicles</div>
          <div className="text-[14px]">Energy</div>
          <div className="text-[14px]">Charging</div>
          <div className="text-[14px]">Discover</div>
          <Link href="/shop">
            <div className="text-[14px]">Shop</div>
          </Link>
        </nav>
        <div className="flex justify-end pr-10 w-1/3 gap-4 bg-transparent ">
          <img
            className="w-[23px] h-[23px]"
            src="https://icons.veryicon.com/png/o/business/pinjamango2018/question-mark-9.png"
          />
          <img
            className="w-[25px] h-[25px] pb-[1px] ml-1"
            src="https://icons.veryicon.com/png/256/business/business-finance-series/globe-1-3.png"
          />
          <Link href="/profile">
            <img
              className="w-[27px] h-[27px] pb-[1px]"
              src="https://icons.veryicon.com/png/o/miscellaneous/1688dpl-middle-platform-icon-library-mobile/profile-o.png"
            />
          </Link>
        </div>
      </header>
    </>
  );
}
