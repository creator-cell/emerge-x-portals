"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { notification, settings } from "@/assets/icons";
import { IoCloseOutline, IoSearch } from "react-icons/io5";
import { logo } from "@/assets/logo";

const NavbarSuperAdmin = () => {
  const [searchBar, setSearchBar] = useState<boolean>(false);
  return (
    <nav
      className=" w-full flex items-center justify-between px-4 border-b h-[69px] bg-white sticky top-0 "
      style={{ zIndex: 20 }}
    >
      <div className={` flex  items-center gap-[20px]  `}>
        {searchBar ? null : (
          <div className="w-[80px] lg:w-[117px]">
            <Image src={logo} alt="emere-logo" width={200} height={100} />
          </div>
        )}

        <div className=" hidden md:flex items-center rounded-2xl overflow-hidden bg-[#f9fafb] gap-4  px-[15px] border border-[#E5E7EB] ">
          <span className="text-[24px]">
            <IoSearch />
          </span>
          <input
            type="text"
            name=""
            id=""
            className=" border-none outline-none h-[45px] bg-[#f9fafb] py-[13px] w-[80%]"
          />
        </div>
      </div>

      {searchBar ? null : (
        <button
          onClick={() => setSearchBar(true)}
          className="block md:hidden text-[24px] "
        >
          {" "}
          <IoSearch />
        </button>
      )}

      {searchBar && (
        <div className=" fixed w-[85%] top-3 left-1/2 transform -translate-x-1/2  flex items-center rounded-2xl overflow-hidden bg-[#f9fafb] gap-4  px-[15px] border border-[#E5E7EB] ">
          <span className="text-[24px]">
            <IoSearch />
          </span>
          <input
            type="text"
            name=""
            id=""
            className=" border-none outline-none h-[45px] bg-[#f9fafb] py-[13px] w-[80%]"
          />
          <button onClick={() => setSearchBar(false)} className="text-[24px] ">
            <IoCloseOutline />
          </button>
        </div>
      )}

      {searchBar ? null : (
        <div className="flex gap-4 ">
          <div className="bg-white rounded-full p-2">
            <Image src={settings} alt="settings" width={22} height={22} />
          </div>
          <div className="bg-white rounded-full p-2">
            <Image
              src={notification}
              alt="notification"
              width={22}
              height={22}
            />
          </div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      )}
    </nav>
  );
};

export default NavbarSuperAdmin;
