import About from "./about";
import Category from "./category";

export default function Home() {
  return (
    <>
      <div className="text-3xl border bg-[#211C24] h-[100vh] w-full ">
        <div className="m-auto max-w-[1200px]  flex flex-row justify-between items-center h-full">
          <div className="flex flex-col h-auto space-y-10 items-start ">
            <p className="text-[25px] text-[#909090] font-semibold">
              Pro.Beyond.{" "}
            </p>
            <p className="text-[96px] text-white">IPhone 14 pro</p>
            <p className="text-[#909090] text-[18px]">
              Created to change everything for the better. For everyone
            </p>
            <button className="px-14 border rounded-lg py-2 text-[16px] text-white ">
              Shop Now
            </button>
          </div>

          <div className=" flex flex-col justify-end  h-full">
            <img src="/iphone.png" width="500px" alt="" />
          </div>
        </div>
      </div>

      <About />

      <Category />
    </>
  );
}
