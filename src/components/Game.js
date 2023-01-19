import React, { useState } from "react";
import { IoGameController } from "react-icons/io5";
import { RxCross2, RxCross1 } from "react-icons/rx";
import { MdOutlinePhone } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import wheelHalf from "../images/wheelhalf.png";
import Wheel from "./Wheel";
import copy from "copy-to-clipboard";
export default function Game() {
  const [nav, setNav] = useState(false);
  const [check, setCheck] = useState(false);
  const [spin, setSpin] = useState(false);
  const [last, setLast] = useState(false);
  const [code, setCode] = useState("");

  const handleCheck = () => {
    setCheck(!check);
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const handleSpin = () => {
    setSpin(!spin);
  };

  const handleLast = () => {
    setLast(!last);
  };

  const handleSpinOver = () => {
    setInterval(() => {
      handleLast();
    }, 7000);
  };

  const handleAlert = () => {
    alert("Code Copied");
    copy(`XAXPDF${code.slice(0, 2)}`);
  };

  const segments = [
    "10% Off",
    "25% Off",
    "15% Off",
    "30% Off",
    "20% Off",
    "35% Off",
  ];
  const segColors = [
    "#FF0000",
    "#FFCC99",
    "#FF0000",
    "#FFCC99",
    "#FF0000",
    "#FFCC99",
  ];
  const onFinished = (winner) => {
    setCode(winner);
  };

  return (
    <>
      <div className="fixed left-5 top-1/3 cursor-pointer" onClick={handleNav}>
        <IoGameController className="text-7xl p-2 text-white bg-pink-600 rounded-full" />
      </div>
      <div
        className={
          nav
            ? "fixed top-0 left-0 right-0 bottom-0 max-w-2xl bg-green-300 m-0 p-0 ease-out duration-500 shadow-lg shadow-black bg-center bg-no-repeat sm:bg-[url('./images/bg-image2.png')] bg-[url('./images/bg-image1.png')]"
            : "fixed top-0 left-[-200%] right-0 bottom-0 max-w-2xl bg-green-300 m-0 p-0 ease-in duration-500 shadow-lg shadow-black custom-img"
        }
      >
        <div>
          <div className="sm:static absolute top-0 right-0 sm:flex flex-row justify-end mr-10 mt-5">
            <RxCross2 onClick={handleNav} className="text-3xl cursor-pointer" />
          </div>
          <div className={last ? "hidden" : ""}>
            <div className={spin ? "hidden" : ""}>
              <div className="grid sm:grid-cols-3 grid-cols-1 items-center my-40">
                <div className="sm:static sm:left-0 sm:rotate-0 rotate-90 absolute top-5 inset-x-0 sm:m-0 mx-10">
                  <img
                    src={wheelHalf}
                    className="sm:w-10/12 sm:h-10/12"
                    alt="wheel"
                    height={180}
                    width={180}
                  />
                </div>
                <div className="col-span-2 text-black sm:m-0 my-10">
                  <div className="flex flex-col space-y-5 mx-10">
                    <h1 className="text-4xl font-bold mb-3">
                      Spin The wheel and win Jackpot offers!
                    </h1>
                    <div className="grid grid-cols-11 gap-2 items-center px-2 py-1 border-b-2 rounded-t-md border-black bg-white">
                      <AiOutlineMail className="text-2xl" />
                      <div className="grid grid-cols-1 col-span-10">
                        <p className="text-xs">Email</p>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="text-black focus:outline-none"
                          placeholder="prakharsaxena5125@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="px-2 py-1 grid grid-cols-11 gap-2 items-center border-b-2 rounded-t-md border-black bg-white">
                      <MdOutlinePhone className="text-2xl" />
                      <div className="grid grid-cols-1 col-span-10">
                        <p className="text-xs">Phone number</p>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          className="text-black focus:outline-none"
                          placeholder="+91999999999"
                        />
                      </div>
                    </div>
                    <div className="px-2 py-1 flex flex-row space-x-2 items-center border-2 rounded-md border-black">
                      <label className="flex flex-row relative">
                        <input
                          onClick={handleCheck}
                          className="appearance-none h-6 w-6 rounded-sm border p-0 m-0 border-black bg-white checked:bg-black checked:border-white hover:bg-black hover:border-white cursor-pointer"
                          type="checkbox"
                          value=""
                          id="check-box-1"
                        />
                        <BsCheckLg
                          className={
                            check
                              ? "text-white cursor-pointer absolute text-base left-1 top-1"
                              : "hidden"
                          }
                        />
                      </label>
                      <div>
                        <p className="text-xs">
                          I agree to receiving recurring automated message at
                          the number I have provided.
                          <br />
                          Consent is not a condition to purchase.
                        </p>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="bg-green-800 w-full text-white text-2xl font-bold rounded-full py-2"
                      onClick={handleSpin}
                    >
                      Try your luck
                    </button>
                    <p className="text-xs font-thin">
                      *You can spin the wheel only once! *If you win, you can
                      claim your coupon for 10 minutes only!
                    </p>
                    <div className="flex flex-row justify-end items-center">
                      <h3
                        onClick={handleNav}
                        className="font-bold hover:bg-white/30 flex flex-row px-1 cursor-pointer"
                      >
                        No, I don't feel lucky
                        <RxCross1 className="text-2xl ml-2" />
                      </h3>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div className={spin ? "" : "hidden"}>
              <div className="sm:static absolute left-[-10%]">
                <div
                  className="cursor-pointer w-1/2 h-1/2"
                  onClick={handleSpinOver}
                >
                  <Wheel
                    segments={segments}
                    segColors={segColors}
                    onFinished={(winner) => onFinished(winner)}
                    primaryColor="yellow"
                    contrastColor="black"
                    buttonText="Spin"
                    isOnlyOnce={true}
                    size={200}
                    upDuration={100}
                    downDuration={1000}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={last ? "" : "hidden"}>
            <div className="grid sm:grid-cols-3 grid-cols-1 items-center my-40">
              <div className="sm:static sm:left-0 sm:rotate-0 rotate-90 absolute top-5 inset-x-0 sm:m-0 mx-10">
                <img
                  src={wheelHalf}
                  className="sm:w-10/12 sm:h-10/12"
                  alt="wheel"
                  height={180}
                  width={180}
                />
              </div>
              <div className="col-span-2 text-black sm:m-0 my-10">
                <div className="flex flex-col space-y-5 mx-10 items-center text-center">
                  <h3 className="text-2xl font-bold">Congrats! You Won:</h3>
                  <h1 className="text-4xl font-bold mb-3">
                    20% Off Coupon on Best Sellers
                  </h1>
                  <div className="flex flex-row text-white">
                    <h1 className="bg-green-900/20 overflow-hidden text-3xl rounded-l-xl font-extrabold p-5">
                      {`XAXPDF${code.slice(0, 2)}`}
                    </h1>
                    <button
                      type="submit"
                      className="bg-green-800 text-xl overflow-hidden rounded-r-xl font-bold p-5"
                      onClick={handleAlert}
                    >
                      COPY
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="bg-green-800 w-full text-white text-2xl font-bold rounded-full py-2"
                    onClick={handleNav}
                  >
                    Close Panel & Copy
                  </button>
                  <p className="text-xs font-thin text-green-800 italic">
                    *You can claim your coupon for 10 minutes only!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
