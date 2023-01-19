import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { FiUser, FiHeart } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import IbaLogo from "../images/iba_logo.webp"
import NewLaunches from "../images/New_Launches.webp"
import BridalIcon from "../images/Bridal_Icon.webp"
import Offers from "../images/offers.webp"
import Lipsticks from "../images/Lipsticks.webp"
import MakeupSet from "../images/makeup_set.webp"
import Skin from "../images/skin.webp"
import MainImage from "../images/main.jpg"
import Image1 from "../images/image1.jpg"
import Image2 from "../images/image2.jpg"
import Image3 from "../images/image3.jpg"
import Image4 from "../images/image4.jpg"
import Game from "./Game";

export default function Main() {
  return (
    <>
      <div className="relative">
        <Game/>
        <h1 className="bg-pink-600 text-white text-center py-2">
          Click to see cool offers!
        </h1>
        
        {/*  */}
        <div className="my-5 mx-10 space-x-10 grid sm:justify-items-center sm:grid-cols-3 grid-cols-5 items-center">
          <div className="sm:hidden text-3xl font-extrabold text-pink-600 justify-items-start">
            <HiBars3 />
          </div>
          <div className="sm:flex flex-row items-center space-x-1 hidden">
            <AiOutlineSearch className="text-pink-600/90 text-xl" />
            <input
              type="text"
              className="placeholder-pink-600/90"
              placeholder="Search..."
            />
          </div>
          <img
            src={IbaLogo}
            className="m-0"
            height={75}
            width={75}
            alt="Iba Logo"
          />
          <div className="sm:hidden"></div>
          <div className="flex flex-row space-x-2 sm:col-span-1 col-span-2">
            <FiUser className="text-pink-600/90 sm:text-3xl text-2xl" />
            <FiHeart className="text-pink-600/90 sm:text-3xl text-2xl" />
            <BiShoppingBag className="text-pink-600/90 sm:text-3xl text-2xl" />
            <TbTruckDelivery className="text-pink-600/90 sm:text-3xl text-2xl" />
          </div>
        </div>
        {/*  */}
        <div className="sm:h-1.5 h-1 bg-pink-600 md:hidden"></div>
        <ul className="py-4 hidden md:flex flex-row bg-pink-600 text-white md:space-x-3 lg:space-x-5 xl:space-x-10 justify-center">
          <li className="flex flex-row items-center">
            <h2>Discover Iba</h2>
            <IoIosArrowDown />
          </li>
          <li className="flex flex-row items-center">
            <h2>Skin</h2>
            <IoIosArrowDown />
          </li>
          <li className="flex flex-row items-center">
            <h2>Hair</h2>
            <IoIosArrowDown />
          </li>
          <li className="flex flex-row items-center">
            <h2>Makeup</h2>
            <IoIosArrowDown />
          </li>
          <li>Perfumes</li>
          <li>Must Haves</li>
          <li className="flex flex-row items-center">
            <h2>Combos & Offers</h2>
            <IoIosArrowDown />
          </li>
          <li className="flex flex-row items-center">
            <h2>Body</h2>
            <IoIosArrowDown />
          </li>
        </ul>
        <ul className="flex flex-row justify-center px-5 py-5 space-x-3 sm:space-x-5 md:space-x-6 lg:space-x-7 xl:space-x-8 bg-orange-100/40">
          <li className="flex flex-col items-center">
            <img
              src={BridalIcon}
              alt="Bridal Icon"
              height={50}
              width={50}
              className="w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 border-2 sm:border-4 rounded-full border-yellow-500 border-x-orange-500"
            />
            <h3 className="text-xs text-pink-600 text-center md:text-sm lg:text-base xl:text-lg font-semibold">
              Bridal Store
            </h3>
          </li>
          <li className="flex flex-col items-center">
            <img
              src={NewLaunches}
              alt="New Launches"
              height={50}
              width={50}
              className="w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 border-2 sm:border-4 rounded-full border-yellow-500 border-x-orange-500"
            />
            <h3 className="text-xs text-pink-600 text-center md:text-sm lg:text-base xl:text-lg font-semibold">
              New Launches
            </h3>
          </li>
          <li className="flex flex-col items-center">
            <img
              src={Offers}
              alt="Bridal Icon"
              height={50}
              width={50}
              className="w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 border-2 sm:border-4 rounded-full border-yellow-500 border-x-orange-500"
            />
            <h3 className="text-xs text-pink-600 text-center md:text-sm lg:text-base xl:text-lg font-semibold">
              Offers
            </h3>
          </li>
          <li className="flex flex-col items-center">
            <img
              src={Lipsticks}
              alt="Lipsticks"
              height={50}
              width={50}
              className="w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 border-2 sm:border-4 rounded-full border-yellow-500 border-x-orange-500"
            />
            <h3 className="text-xs text-pink-600 text-center md:text-sm lg:text-base xl:text-lg font-semibold">
              Lipsticks
            </h3>
          </li>
          <li className="flex flex-col items-center">
            <img
              src={MakeupSet}
              alt="Makeup Sets"
              height={50}
              width={50}
              className="w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 border-2 sm:border-4 rounded-full border-yellow-500 border-x-orange-500"
            />
            <h3 className="text-xs text-pink-600 text-center md:text-sm lg:text-base xl:text-lg font-semibold">
              Makeup Sets
            </h3>
          </li>
          <li className="flex flex-col items-center">
            <img
              src={Skin}
              alt="skin"
              height={50}
              width={50}
              className="w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 border-2 sm:border-4 rounded-full border-yellow-500 border-x-orange-500"
            />
            <h3 className="text-xs text-pink-600 text-center md:text-sm lg:text-base xl:text-lg font-semibold">
              Skin
            </h3>
          </li>
        </ul>
        <div className="object-contain">
          <img src={MainImage} alt="main" width={1600} height={500} />
        </div>
        <h1 className="bg-white text-pink-600 text-3xl font-bold text-center pt-5">
          Click to see cool offers!
        </h1>
        <div className="bg-pink-500 h-0.5 mx-52 my-2"></div>
        <div className="bg-pink-500 h-0.5 mx-72 md:my-2"></div>
        <div className="bg-pink-500 h-0.5 mx-96 md:mt-2 mb-5"></div>
        <div className="">
          <div className="grid grid-col gap-5 mx-5 sm:mx-6 md:mx-7 lg:mx-8 xl:9 lg:grid-cols-2">
            <img src={Image1} alt="image1" width={1600} height={500} />
            <img src={Image2} alt="image2" width={1600} height={500} />
            <img src={Image3} alt="image3" width={1600} height={500} />
            <img src={Image4} alt="image4" width={1600} height={500} />
          </div>
        </div>
      </div>
    </>
  );
}
