"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiHome } from "react-icons/fi";

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <section className="sidebar shrink-0">
      <nav className="flex flex-col gap-3 h-full">
        <Link href="/" className="mb-10 p-3">
          <h1 className="text-black font-bold text-xl">Banking</h1>
        </Link>

        {sidebarLinks.map((item, index) => {
          const isActive = pathName === item.route;
          return (
            <Link
              href={item.route}
              className={`${
                isActive ? "bg-green-400" : ""
              } flex items-center gap-3 py-3 px-6 rounded-lg`}
            >
              <FiHome
                className={`text-xl ${
                  isActive ? "text-white" : "text-zinc-500"
                }`}
              />
              <div className={`${isActive ? "text-white" : "text-zinc-400"}`}>
                {item.label}
              </div>
            </Link>
          );
        })}

        <div className="relative w-full h-[150px] bg-slate-950 mt-auto rounded-lg flex flex-col">
          <Image
            src="/spaceship.png"
            height={100}
            width={100}
            alt=""
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12"
          />
        </div>
      </nav>
    </section>
  );
};

export default Sidebar;
