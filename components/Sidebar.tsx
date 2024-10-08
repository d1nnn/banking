"use client";
import { sidebarLinks } from "@/constants";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FiHome } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

type SubItemsProp = {
  item: any;
  pathName: string;
  isExpanded: boolean;
};
function SubItems({
  item,
  pathName,
  isExpanded,
}: SubItemsProp): React.ReactNode {
  return (
    <div className={`overflow-hidden h-full`}>
      <div
        className={`subitems origin-top-left ${
          isExpanded ? "max-h-[500px] -translate-y-1" : "max-h-0 -translate-y-2"
        } flex flex-col border-2 border-transparent border-l-zinc-400 w-[70%] mx-auto rounded-bl-xl`}
      >
        {item.children.map((it: any, index: number) => {
          return (
            <div
              key={index}
              className="relative text-black px-6 w-full h-[20px] border-b-2 border-b-zinc-400 rounded-md"
            >
              <Link
                href={item.route + it.route}
                className={`absolute bottom-0 word-keep bg-white translate-y-1/2 w-full left-3 px-2 ${
                  pathName.includes(it.route)
                    ? "text-green-400"
                    : "text-zinc-400"
                }`}
              >
                {it.label}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

type SidebarItemProps = {
  item: any;
  pathName: string;
  index: number;
};

function SidebarItem({
  item,
  pathName,
  index,
}: SidebarItemProps): React.ReactNode {
  const isActive = pathName === item.route;
  const isSubRouteActive = pathName.includes(item.route);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return item.children ? (
    <div className={`overflow-hidden mb-2 group`}>
      <div
        className={`relative cursor-pointer`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div
          key={index}
          className={`transition-colors duration-200 flex items-center gap-3 ${
            isSubRouteActive ? "bg-green-400" : " group-hover:bg-green-200"
          }  py-3 px-6 rounded-lg`}
        >
          <item.icon
            className={`text-xl ${
              isSubRouteActive ? "text-white" : "text-zinc-500"
            }`}
          />
          <div
            className={`${isSubRouteActive ? "text-white" : "text-zinc-400"}`}
          >
            {item.label}
          </div>
          <div className="ml-auto">
            <IoIosArrowDown
              className={`${isExpanded ? "rotate-180" : ""} ${
                isSubRouteActive ? "text-white" : "text-zinc-400"
              } transition duration-300`}
            />
          </div>
        </div>
      </div>
      {item.children ? (
        <SubItems isExpanded={isExpanded} pathName={pathName} item={item} />
      ) : null}
    </div>
  ) : (
    <Link href={item.route} className="mb-3 group">
      <div
        key={index}
        className={`transition-colors duration-200 flex items-center gap-3 ${
          isActive ? "bg-green-400" : "group-hover:bg-green-200"
        }  py-3 px-6 rounded-lg`}
      >
        <item.icon
          className={`text-xl ${isActive ? "text-white" : "text-zinc-500"}`}
        />
        <div className={`${isActive ? "text-white" : "text-zinc-400"}`}>
          {item.label}
        </div>
      </div>
    </Link>
  );
}

const Sidebar = () => {
  const pathName = usePathname();
  return (
    <section className="sidebar shrink-0">
      <nav className="flex flex-col h-full">
        <Link href="/" className="mb-10 p-2">
          <h1 className="text-black font-bold text-3xl">Banking</h1>
        </Link>

        {sidebarLinks.map((item, index) => {
          console.log(pathName, item.route);
          return <SidebarItem index={index} item={item} pathName={pathName} />;
        })}

        <div className="relative w-full h-[150px] bg-slate-950 mt-auto rounded-lg flex flex-col items-center justify-end p-5">
          <Image
            src="/spaceship.png"
            height={100}
            width={100}
            alt=""
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-12"
          />
          <div className="text-slate-100">New update available</div>
          <div className="text-slate-100">Click to update</div>
          <button className="bg-green-400 rounded-lg px-6 py-3 text-zinc-100">
            Update!
          </button>
        </div>
      </nav>
    </section>
  );
};

export default Sidebar;
