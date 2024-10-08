import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { TbMessage2 } from "react-icons/tb";
import Image from "next/image";
import { SlBell } from "react-icons/sl";

const Navbar = () => {
  return (
    <div className="flex p-3 bg-zinc-100 justify-between">
      <div className="relative flex items-center bg-zinc-200 rounded-md">
        <div className="flex-[1] flex justify-center items-center w-[40px] h-[40px] p-3">
          <FaMagnifyingGlass className="text-neutral-500" />
        </div>

        <div className="flex-[10]">
          <input
            type="text"
            className="bg-transparent placeholder-neutral-500 placeholder:text-sm outline-none text-neutral-900 pr-3"
            placeholder="Search here"
          />
        </div>
      </div>

      <div className="flex gap-4">
        <div className="border border-slate-300 rounded-md text-xl p-2 w-[40px] h-[40px] flex justify-center items-center">
          <TbMessage2 className="text-neutral-500" />
        </div>

        <div className="border border-slate-300 rounded-md text-xl p-2 w-[40px] h-[40px] flex justify-center items-center">
          <SlBell className="text-neutral-500" />
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Image
            src="/model1.jpg"
            width={50}
            height={50}
            alt=""
            className="object-cover rounded-full w-[40px] h-[40px]"
          />

          <div>
            <div className="font-bold text-black">Niko Flamini</div>
            <div className="text-sm text-zinc-400">example@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
