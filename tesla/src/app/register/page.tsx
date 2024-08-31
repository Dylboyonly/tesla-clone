import Link from "next/link";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  const handleFormAction = async (formData: FormData) => {
    "use server";

    const res = await fetch(`http://localhost:3000/api/register`, {
      method: "POST",
      body: JSON.stringify({
        name: formData.get("name"),
        username: formData.get("username"),
        email: formData.get("email"),
        password: formData.get("password"),
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const responseJson = await res.json();
    console.log(responseJson);

    if (!res.ok) {
      let message = responseJson.error ?? "Something went wrong";
      return redirect(`/register?error=${message}`);
    }
    return redirect("/login");
  };
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full h-[10%]">
        <header className="navbar w-full mt-0 ml-0 px-2 py-3 flex justify-between items-center bg-transparent h-[70px]">
          <Link
            href="/"
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
          </Link>
          <div className="flex justify-end pr-2  w-1/3 gap-2 bg-transparent ">
            <img
              className="w-[25px] h-[25px] pb-[1px] ml-1"
              src="https://icons.veryicon.com/png/256/business/business-finance-series/globe-1-3.png"
            />
            <span className="text-black text-[13px] font-medium">en-Us</span>
          </div>
        </header>
      </div>
      <div className="w-full h-[90%] flex justify-center">
        <div className="w-[23%] h-full">
          <span className="text-slate-500 text-[15px]">Step 1 of 1</span>
          <div className="w-full h-[9%] flex items-center justify-start">
            <span className="text-3xl text-black font-semibold">
              Create Account
            </span>
          </div>
          <form className=" w-full h-[85%]" action={handleFormAction}>
            <div className="h-[13%] w-full">
              <label className="text-[13px] text-slate-600 font-semibold flex items-center gap-1">
                Name
                <img
                  className="w-3 h-3"
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/circle-8258189-6849508.png?f=webp&w=512"
                />
              </label>
              <input
                type="text"
                placeholder="Jane"
                className="py-2 px-2 rounded-sm w-full bg-neutral-100 text-[14px] text-black mt-2"
                name="name"
              />
            </div>
            <div className="h-[13%] w-full">
              <label className="text-[13px] text-slate-600 font-semibold text-[14px] text-black flex items-center gap-1">
                Username
                <img
                  className="w-3 h-3"
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/circle-8258189-6849508.png?f=webp&w=512"
                />
              </label>
              <input
                type="text"
                placeholder="Smith"
                className="py-2 px-2 rounded-sm w-full bg-neutral-100 text-[14px] text-black mt-2"
                name="username"
              />
            </div>
            <div className="h-[13%] w-full ">
              <label className="text-[13px] text-slate-600 font-semibold  text-[14px] text-black flex items-center gap-1">
                Email
                <img
                  className="w-3 h-3"
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/circle-8258189-6849508.png?f=webp&w=512"
                />
              </label>
              <input
                type="email"
                placeholder="tesla@mail.com.."
                className="py-2 px-2 rounded-sm w-full bg-neutral-100 text-[14px] text-black mt-2"
                name="email"
              />
            </div>
            <div className="h-[13%] w-full ">
              <label className="text-[13px] text-slate-600 font-semibold flex items-center gap-1">
                Password
                <img
                  className="w-3 h-3"
                  src="https://cdn.iconscout.com/icon/premium/png-512-thumb/circle-8258189-6849508.png?f=webp&w=512"
                />
              </label>
              <input
                type="text"
                placeholder="***"
                className="py-2 px-2 rounded-sm w-full bg-neutral-100 text-[14px] text-black mt-2"
                name="password"
              />
            </div>
            <span className="text-[12px] text-slate-600">
              By clicking "Register," you agree to Tesla's terms and conditions,
              as well as their privacy policy. Additionally, you consent to
              receiving emails from Tesla about updates, promotions, and the
              latest products, ensuring you're always informed about the newest
              developments and offerings
            </span>
            <button className="w-full rounded-sm py-3 px-2 text-white font-medium bg-blue-400 mt-20 hover:scale-110 transition-transform">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
