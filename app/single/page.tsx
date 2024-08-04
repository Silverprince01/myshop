import React from "react";
import Image from "next/image";
import Shoe1 from "@/public/assets/images/shoe2.png";
import Shoe2 from "@/public/assets/images/Shoe1s.png";
import Shoe3 from "@/public/assets/images/Shoe1ss.png";
import Cart from "@/public/assets/icons/cart.png";
import AppLogo from "@/public/assets/icons/logo.png";
const Single = () => {
  return (
    <section>
      <p>{`Home > Men’s Shoes > Men's Sneaker`}</p>

      <div className="bg-[#E2F6FF] p-4">
        <div className="flex gap-2">
          <div className="w-[50%]">
            <Image src={Shoe1} width={300} height={300} alt="shoe" />
            <div className="flex justify-center items-center gap-4 w-[50%] mt-2">
              <div className="mb-3">
                <Image src={Shoe1} width={50} height={50} alt="shoe" />
              </div>
              <div className="">
                <Image src={Shoe2} width={50} height={50} alt="shoe" />
              </div>
              <div className="">
                <Image src={Shoe3} width={50} height={50} alt="shoe" />
              </div>
            </div>
          </div>

          <div className="">
            <p className="mb-4">
              Men's Palm Sandals PU Leather Shoes Comfortable Soft Sole Casual
              Black
            </p>
            <hr />
            <div className="my-4">
              <div className="flex items-center gap-3">
                <p className="font-bold text-base">#14,000</p>
                <p className="line-through">#18,200</p>
                <div className="w-[30] h-[30] rounded-sm p2 bg-[gray]">
                  <p>-30%</p>
                </div>
              </div>
              <div className="">
                <p>Some variations with low stock</p>
                <p>+ shipping from ₦ 250 to LEKKI-AJAH (SANGOTEDO)</p>
                <p>(50 verified rating)</p>
              </div>
            </div>
            <hr />
            <div className=" flex items-center gap-4 mt-4">
              <button className="w-[60px] h-[60px] flex justify-center bg-[#CAA1FF] items-center">
                S 40
              </button>
              <button className="w-[60px] h-[60px] flex justify-center bg-[#CAA1FF] items-center">
                S 41
              </button>
              <button className="w-[60px] h-[60px] flex justify-center bg-[#CAA1FF] items-center">
                S 42
              </button>
            </div>

            <div className="bg-[#42E8FF] flex justify-center items-center gap-2 mt-5 h-12 ">
              <p>Add to Cart</p>
              <Image src={Cart} width={20} height={20} alt="Cart" />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full bg-[#CAA1FF] rounded-lg p-3 mb-3">
          <p>Delivery and Returns</p>
        </div>
        <Image src={AppLogo} width={120} height={50} alt="Logo" />
        <p>
          Free delivery on thousands of products in Lagos, Ibadan & Abuja
          Details
        </p>
        <div className="">
          <p className="mb-4">Choose your location</p>
          <select
            name=""
            id=""
            className="appearance-none bg-[#42E8FF] w-[10%] h-[50px] rounded-lg px-2 mb-2"
          >
            <option value="">Lagos</option>
            <option value="">Oyo</option>
            <option value="">Ogun</option>
          </select>
          <br />
          <select
            name=""
            id=""
            className="appearance-none bg-[#CAA1FF] w-[10%] h-[50px] rounded-lg px-2"
          >
            <option value="">Lekki</option>
            <option value="">Aja</option>
            <option value="">Surulere</option>
          </select>
        </div>

        <div className="my-2">
          <h3 className="font-bold">Pick up Station</h3>

          <p>Delivery Fees ₦ 250</p>
          <p>
            Arriving at pickup station between 23 January & 25 January when you
            order within next 14hrs 21mins
          </p>
        </div>
        <div className="my-2">
          <h3 className="font-bold">Door Delivery</h3>

          <p>Delivery Fees ₦ 620</p>
          <p>
            Arriving at pickup station between 23 January & 25 January when you
            order within next 14hrs 21mins
          </p>
        </div>
        <div className="my-2">
          <h3 className="font-bold">Return Policy</h3>
          <p>Free return within 7 days for ALL eligible itemsDetails</p>
        </div>
      </div>
    </section>
  );
};

export default Single;
