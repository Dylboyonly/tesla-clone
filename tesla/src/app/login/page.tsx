import Link from "next/link";
import { LoginFunction } from "./action";

export default function LoginPage() {
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full h-[10%]">
        <header className="navbar w-full mt-0 ml-0 px-2 py-3 flex justify-between items-center bg-transparent h-[70px]">
          <div
            className="text-4xl text-slate-100 pl-[2rem] pb-2 w-1/3 bg-transparent "
            id="fonts2"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-[110px] h-[50px]"
              viewBox="0 0 278.7 36.3"
              fill="currentColor"
              color="black"
            >
              <path d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1" />
            </svg>
          </div>
          <div className="flex justify-end pr-2  w-1/3 gap-2 bg-transparent ">
            <img
              className="w-[25px] h-[25px] pb-[1px] ml-1"
              src="https://icons.veryicon.com/png/256/business/business-finance-series/globe-1-3.png"
            />
            <span className="text-black text-[13px] font-medium">en-Us</span>
          </div>
        </header>
      </div>
      <div className="w-full h-[75%] flex justify-center">
        <div className="w-[23%] h-[80%]">
          <div className="w-full h-[15%]">
            <span className="text-3xl text-black font-medium">Sign In</span>
          </div>
          <form className="w-full h-[60%]" action={LoginFunction}>
            <div className="w-full h-1/3 relative">
              <label className="text-[13px] text-slate-600 font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="tesla_user..."
                className="w-full py-3 bg-neutral-200 rounded-sm px-4 text-[15px] text-black focus:border-neutral-500 mt-1"
                name="email"
              />
            </div>
            <div className="w-full h-1/3">
              <label className="text-[13px] text-slate-600 font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="***"
                className="w-full py-3 bg-neutral-200 rounded-sm px-4 text-[15px] text-black mt-1"
                name="password"
              />
            </div>
            <div className="w-full h-1/3 flex items-center">
              <button className="w-full h-[45%] bg-blue-400 rounded-sm text-white font-medium hover:scale-110 transition-transform">
                Sign In
              </button>
            </div>
          </form>
          <div className="w-full flex justify-center h-[10%] items-end text-black cursor-pointer">
            <span>
              <u>Trouble signing in ?</u>
            </span>
          </div>
          <div className="divider mt-10 text-black">Or</div>
          <div className="w-full h-[15%]">
            <Link href="/register">
              <button className="w-full py-3 bg-neutral-200 text-black text-[15px] font-medium rounded-sm hover:scale-110 transition-transform">
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full h-[15%] flex justify-center items-end gap-5 text-black font-medium text-[12px] pb-4">
        <span>Tesla 2024</span>
        <span>Privacy & legal</span>
        <span>Contact</span>
      </div>
    </div>
  );
}
