"use client";

import { superAdminSidebarList } from "@/enums/super-admin/sidebar-data";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const SuperAdminSideBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const pathName = usePathname();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div
        className={`bg-white  w-[250px] h-screen fixed left-0 top-[69px] border-r transition-transform duration-300 ${
          isSidebarOpen ? "transform-none" : "transform -translate-x-full "
        } lg:transform-none lg:translate-x-0`}
        style={{ zIndex: 20 }}
      >
        <div className=" lg:hidden relative w-full">
          <div
            className="lg   z-50 absolute top-2 -right-4 "
            onClick={toggleSidebar}
          >
            <FaRegArrowAltCircleRight />
          </div>
        </div>

        <ul className=" space-y-2 pt-5">
          {superAdminSidebarList?.map((e, i) => {
            const isActive = pathName === e.link;
            return (
              <li
                key={i}
                className=" text-base hover:bg-[#f9fafb]  px-5 py-1.5"
              >
                {" "}
                <Link
                  href={e.link}
                  className={`flex items-center gap-[16px] ${
                    isActive ? "text-[#3DA229]" : "text-[#303030]"
                  }`}
                >
                  <div className="w-[24px]">
                    {e.icon}
                  </div>{" "}
                  {e.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed w-full h-full bg-gray-800   bg-opacity-25 left-0 top-0   "
          style={{ zIndex: 10 }}
        ></div>
      )}
    </>
  );
};

export default SuperAdminSideBar;
