"use client";
import Link from "next/link";
import React from "react";
import classes from "./Sidebar.module.css";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="h-full1 p-6 border-r border-gray-300 bg-gray-50">
      <div className="bg-gray-200 p-4  rounded-[.5rem] mb-6 font-extrabold">
        Faysal Ahmed
      </div>
      <div className={` text-gray-500`}>
        <Link href="/">
          <h2
            className={
              pathname === "/"
                ? "bg-blue-50 text-blue-600 font-bold px-4 py-1 rounded-[.5rem]"
                : "px-4 py-2"
            }
          >
            Dashboard
          </h2>
        </Link>
        <Link href="/user">
          <h2
            className={
              pathname === "/user"
                ? "bg-blue-50 text-blue-600 font-bold px-4 py-1 rounded-[.5rem]"
                : "px-4 py-2"
            }
          >
            User
          </h2>
        </Link>
        <Link href="/feed">
          <h2
            className={
              pathname === "/feed"
                ? "bg-blue-50 text-blue-600 font-bold px-4 py-1 rounded-[.5rem]"
                : "px-4 py-2"
            }
          >
            Feed
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
