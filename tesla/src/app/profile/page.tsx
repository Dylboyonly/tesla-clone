import NavigationBar from "@/components/Navbar";
import Link from "next/link";

export default function profilePage() {
  return (
    <>
      <div className="h-screen w-full bg-white">
        <div className="h-[12%] w-full ">
          <NavigationBar />
        </div>
        <div className="w-full h-[78%] bg-white flex justify-center items-center">
          <div className=" w-[20%] h-full ">
            <div className="w-full h-[60%] mt-[25%]">
              <ul className="w-full h-full flex flex-col justify-between px-10 py-2 text-black">
                <li className="w-full flex items-center gap-5 hover:translate-x-2 transition-transform ease-in duration-200">
                  <img
                    className="h-6 w-6"
                    src="https://icons.veryicon.com/png/o/miscellaneous/fs-icon/home-227.png"
                  />
                  <span>My products</span>
                </li>
                <li className="w-full flex gap-5 items-center hover:translate-x-2 transition-transform ease-in duration-200">
                  <img
                    className="h-7 w-7"
                    src="https://icons.veryicon.com/png/o/miscellaneous/large-collection-of-common-basic-icons/person-52.png"
                  />
                  <span>Profile Settings</span>
                </li>
                <li className="w-full flex gap-5 items-center hover:translate-x-2 transition-transform ease-in duration-200">
                  <img
                    className="h-6 w-6"
                    src="https://icons.veryicon.com/png/o/internet--web/lobomeeting_web_designsystem/card-5.png"
                  />
                  <span>Payment Method</span>
                </li>
                <li className="w-full flex gap-5 items-center hover:translate-x-2 transition-transform ease-in duration-200">
                  <img
                    className="h-6 w-6"
                    src="https://icons.veryicon.com/png/256/commerce-shopping/poly-budget-icon-library/cart-25.png"
                  />
                  <span>My Wishlist</span>
                </li>
                <li className="w-full flex gap-5 items-center hover:translate-x-2 transition-transform ease-in duration-200">
                  <img
                    className="h-6 w-6"
                    src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-27/shirt-84.png"
                  />
                  <span>Order History</span>
                </li>
                <Link
                  href="/login"
                  className="w-full flex gap-5 items-center hover:translate-x-2 transition-transform ease-in duration-200"
                >
                  <img
                    className="h-6 w-6"
                    src="https://icons.veryicon.com/png/o/construction-tools/water-conservancy-project-icon/sign-out-2.png"
                  />
                  <span>Sign Out</span>
                </Link>
              </ul>
            </div>
          </div>
          <div className=" w-[80%] h-full pl-11">
            <div className="w-full h-[9%] pt-4 pl-2">
              <span className="text-3xl text-black font-medium">
                My Products
              </span>
            </div>
            <div className="w-full h-[89%] flex gap-6 px-2 py-2">
              <div className="w-[30%] h-[37%] border border-black border-[0.4px]">
                <figure className="w-full h-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src="https://images.adsttc.com/media/images/551c/c98d/e58e/ce84/5e00/00e3/large_jpg/portada_DSC_2470.jpg?1427949949"
                  />
                </figure>
                <div className="w-full h-1/2 px-6 pt-4 relative">
                  <p className="text-[13px] font-medium text-black">
                    Order Tesla Solar
                  </p>
                  <p className="text-[13px] text-black">
                    Produce energy to power your tesla life
                  </p>
                  <a href="">
                    {" "}
                    <u className="text-[13px] absolute bottom-4 text-black">
                      View Solar
                    </u>
                  </a>
                </div>
              </div>
              <div className="w-[30%] h-[37%] border border-black border-[0.4px]">
                <figure className="w-full h-1/2">
                  <img
                    className="w-full h-full object-cover"
                    src="https://static1.topspeedimages.com/wordpress/wp-content/uploads/2023/03/2023-tesla-s-lineup.jpg"
                  />
                </figure>
                <div className="w-full h-1/2 px-6 pt-4 relative">
                  <p className="text-[13px] font-medium text-black">
                    Reserve a car{" "}
                  </p>
                  <p className="text-[13px] text-black">Browse our model</p>
                  <a href="">
                    {" "}
                    <u className="text-[13px] absolute bottom-4 text-black">
                      Order
                    </u>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[10%] flex justify-center items-center text-black text-[12.5px] gap-5 text-black">
          <span>Tesla 2024</span>
          <span>Privacy & Legal</span>
        </div>
      </div>
    </>
  );
}
