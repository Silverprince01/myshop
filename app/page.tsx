import Image from "next/image";
import Link from "next/link";
import Shoe1 from "@/public/assets/images/shoe1.png";
import Shoe2 from "@/public/assets/images/shoe2.png";
import Shoe3 from "@/public/assets/images/Shoe3.png";
import Shoe4 from "@/public/assets/images/Shoe4.png";
import Shoe5 from "@/public/assets/images/Shoe5.png";
import Shoe6 from "@/public/assets/images/Shoe6.png";
import Shoe7 from "@/public/assets/images/Shoe7.png";
import FlashSales from "@/public/assets/images/flashSales.png";
import DarkLogo from "@/public/assets/icons/darkLogo.png";
import Call from "@/public/assets/icons/call.png";
import House from "@/public/assets/icons/house.png";
import Global from "@/public/assets/icons/global.png";

export default function Home() {
  const shoeArray = [
    {
      id: 1,
      price: "#20,000",
      title: "Sneakers",
      img: Shoe1,
    },
    {
      id: 2,
      price: "#20,000",
      title: "Nike",
      img: Shoe2,
    },
    {
      id: 3,
      price: "#20,000",
      title: "Fila",
      img: Shoe3,
    },
    {
      id: 4,
      price: "#20,000",
      title: "Sneakers",
      img: Shoe4,
    },
    {
      id: 5,
      price: "#20,000",
      title: "TimberLand",
      img: Shoe5,
    },
    {
      id: 6,
      price: "#20,000",
      title: "Louis Vuitton",
      img: Shoe6,
    },
    {
      id: 7,
      price: "#20,000",
      title: "Sneakers",
      img: Shoe7,
    },
    {
      id: 8,
      price: "#20,000",
      title: "Puma",
      img: Shoe1,
    },
    {
      id: 9,
      price: "#20,000",
      title: "Sneakers",
      img: Shoe2,
    },
    {
      id: 10,
      price: "#20,000",
      title: "Sneakers",
      img: Shoe3,
    },
    {
      id: 11,
      price: "#20,000",
      title: "Sneakers",
      img: Shoe4,
    },
    {
      id: 12,
      price: "#20,000",
      title: "Sneakers",
      img: Shoe5,
    },
  ];
  const womenShoeArray = [
    {
      id: 1,
      price: "#20,000",
      title: "Sneakers",
      img: Shoe1,
    },
    {
      id: 2,
      price: "#20,000",
      title: "Nike",
      img: Shoe2,
    },
    {
      id: 3,
      price: "#20,000",
      title: "Fila",
      img: Shoe3,
    },
    {
      id: 4,
      price: "#20,000",
      title: "Sneakers",
      img: Shoe4,
    },
  ];
  const menShoeArray = [
    {
      id: 1,
      price: "#20,000",
      title: "Sneakers",
      img: Shoe1,
    },
    {
      id: 2,
      price: "#20,000",
      title: "Nike",
      img: Shoe2,
    },
    {
      id: 3,
      price: "#20,000",
      title: "Fila",
      img: Shoe3,
    },
    {
      id: 4,
      price: "#20,000",
      title: "Sneakers",
      img: Shoe4,
    },
  ];

  return (
    <main className="py-10">
      <div className="flex justify-between  w-full">
        <div className="flex flex-col">
          <Image src={Shoe1} alt="Shoe" />
          <Image src={Shoe2} alt="Shoe" />
        </div>
        <div className="bg-[#42E8FFCC] p-4 flex justify-center items-center flex-col w-[65%] relative">
          <h1 className="text-6xl text-center ">
            Let your feet do the talking....
          </h1>

          <div className="flex items-center gap-1 absolute bottom-0">
            <Image src={DarkLogo} width={220} height={50} alt="Dark Logo" />
          </div>
        </div>
        <div className="flex justify-between flex-col ">
          <div className="bg-[#CAA1FF] rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Image src={Call} alt="Call" width={20} height={20} />
              <p>+234123456789</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Image src={House} alt="House" width={20} height={20} />
              <p>Become a Vendor</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Image src={Global} alt="Global" width={20} height={20} />
              <p>Global Best Seller</p>
            </div>
          </div>
          <div className="">
            <Image src={FlashSales} alt="Flash Sales" />
          </div>
        </div>
      </div>

      <div className="bg-[#42E8FF] my-6 w-full">
        <div className=" grid grid-cols-4 p-4">
          {shoeArray.map((shoes: any) => {
            const { id, title, price, img } = shoes;
            return (
              <div className=" p-2" key={id}>
                <Image src={img} alt="Shoes" width={150} height={150} />
                <div className="">
                  <p className="text-base font-semibold">{title}</p>
                  <p className="text-sm">{price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-[#CAA1FF] my-6 w-full p-4">
        <div className="flex justify-between items-center">
          <h3>Female</h3>
          <p>See all</p>
        </div>
        <div className=" grid grid-cols-4 gap-5 ">
          {womenShoeArray.map((shoes: any) => {
            const { id, title, price, img } = shoes;
            return (
              <div className=" p-2" key={id}>
                <Image src={img} alt="Shoes" width={150} height={150} />
                <div className="">
                  <p className="text-base font-semibold">{title}</p>
                  <p className="text-sm">{price}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-[#E2F6FF] my-6 w-full p-4">
      <div className="flex justify-between items-center">
          <h3>Male</h3>
          <p>See all</p>
        </div>
        <div className=" grid grid-cols-4 ">
          {menShoeArray.map((shoes: any) => {
            const { id, title, price, img } = shoes;
            return (
              <Link href={"/single"} className=" p-2" key={id} >
                <Image src={img} alt="Shoes" width={150} height={150} />
                <div className="">
                  <p className="text-base font-semibold">{title}</p>
                  <p className="text-sm">{price}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
