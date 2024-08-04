"use client";
import React from "react";
import Image from "next/image";
import AppLogo from "@/public/assets/icons/logo.png";
import Search from "@/public/assets/icons/search.png";
import Avater from "@/public/assets/icons/avatar.png";
import Help from "@/public/assets/icons/help.png";
import Cart from "@/public/assets/icons/cart.png";
import Notification from "@/public/assets/icons/bell.png";
const Header = () => {
  return (
    <section className="">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center gap-2 w-4/5">
          <Image src={AppLogo} alt="logo" width={120} height={40} />
          <div className="flex items-center gap-2 w-full">
            <input
              type="text"
              placeholder="Search products, brands and other categories"
              className="border-2 border-solid border-[black] rounded-md p-2 w-2/3"
            />
            <button className="py-2 px-4 bg-[#CAA1FF] rounded-md">
              Search
            </button>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
          <div className="flex items-center gap-2">
            <Image src={Avater} width={20} height={20} alt="avater" />
            <p>Avatar</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Help} width={20} height={20} alt="avater" />
            <p>Help</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src={Cart} width={20} height={20} alt="avater" />
            <p>Cart</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2">
        <p></p>
        <div className="flex items-center gap-8">
          <p> <span className="text-[#42E8FFCC]">O</span>Pay</p>
          <p>LOGISTICS</p>
        </div>
        <div className="flex items-center gap-2">
          <p>Nofication</p>
          <Image src={Notification} alt="Notification" width={20} height={20} />
        </div>
      </div>
    </section>
  );
};

export default Header;
