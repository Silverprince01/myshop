import React from "react";
import Image from "next/image";
import AppLogo from "@/public/assets/icons/logo.png";
import Shoe from "@/public/assets/icons/shoe.png";
import Facebook from "@/public/assets/icons/fb.png";
import Twitter from "@/public/assets/icons/twitter.png";
import Instagram from "@/public/assets/icons/ig.png";
import Youtube from "@/public/assets/icons/youtube.png";
import Visa from "@/public/assets/icons/visa.png"
import Verve from "@/public/assets/icons/verve.png"
import Dhl from "@/public/assets/icons/dhl.png"
const Footer = () => {
  return (
    <footer>
      <section className="bg-[#CAA1FF] p-2">
        <div className="flex justify-between items-start">
          <Image src={AppLogo} alt="Logo" width={120} height={40} />
          <div className="">
            <p className="mb-4">New to Barb Shoes</p>
            <p className="mb-4">
              Subscribe to our newsletter to get updates on our latest offers{" "}
            </p>
            <div className="flex gap-2 items-center">
              <input
                type="text"
                className="border-2 border-solid border-[black] rounded-md p-2 bg-transparent "
                placeholder="Enter your email address"
              />
              <button className="bg-[#E2F6FF] rounded-md p-2"> Male</button>
              <button className="bg-[#E2F6FF] rounded-md p-2">Female</button>
            </div>
          </div>
          <div className="">
            <div className="flex items-start gap-4">
              <Image src={Shoe} alt="Shoe" width={30} height={30} />
              <div className="mb-4">
                <p className="mb-2">Download BARB</p>
                <p>Get access to exclusive offers</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-lg bg-white">Get on iphone</button>
              <button className="p-2 rounded-lg bg-white">
                Get on Andriod
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#42E8FF] p-4">
        <div className="grid grid-cols-3 ">
          <div className="">
            <h3 className="mb-2 font-semibold">Need Help</h3>
            <ul>
              <li>Chat with Us </li>
              <li>Help Center</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-2 font-semibold">About BARB</h3>
            <ul>
              <li>About Us </li>
              <li>Terms and Condition</li>
              <li>Privacy Notice</li>
              <li>Cookie Notice</li>
              <li>BARB Shoes Global</li>
              <li>Official Stores</li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-2 font-semibold">Make money with Barb</h3>
            <ul>
              <li>Sell on Barb</li>
              <li>Vendor Hub</li>
              <li>Become a Sales Consultant</li>
              <li>Become a Logistice Service Partner</li>
            </ul>
          </div>
          <div className="">
            <h3 className="mb-2 font-semibold">Useful Links</h3>
            <ul>
              <li>Service Center </li>
              <li>How to shop on verve</li>
              <li>Report a product</li>
              <li>Report & Return policy</li>
              <li>Return policy</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-between items-center mt-5">
          <div className="">
            <p>Join Us</p>
            <div className=" mt-2 flex gap-2 items-center">
              <Image src={Facebook} alt="Facebook" width={20} height={20} />
              <Image src={Instagram} alt="Instagram" width={20} height={20} />
              <Image src={Twitter} alt="Twitter" width={20} height={20} />
              <Image src={Youtube} alt="Youtube" width={20} height={20} />
            </div>
          </div>
          <div className="">
          <p>Payment Methods and Delivery Partners</p>
            <div className=" mt-2 flex gap-2 items-center">
              <Image src={Verve} alt="Verve" width={70} height={20} />
              <Image src={Visa} alt="Visa" width={70} height={20} />
              <Image src={Dhl} alt="Dhl" width={70} height={20} />              
            </div>
          </div>
          <div className=""></div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
