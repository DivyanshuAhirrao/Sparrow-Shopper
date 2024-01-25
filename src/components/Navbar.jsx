import React, { useContext, useEffect } from "react";
import ziara from "../media/logo.png";
import { IoCartOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GlobalDataApi } from "../context/GlobalData";

const Navbar = () => {
  let { inputVal, setInputVal } = useContext(GlobalDataApi);

  return (
    <nav className="flex justify-between items-center w-[100%] h-[75px]">
      <aside className="px-4 w-[25%] h-[100%] bg-gray-100 text-[150%] text-[#c7ecd0] flex items-center">
       
        <img
          src={ziara}
          alt="logo"
          className="relative left-2 lg:h-[75%] hover:pl-4 transition-all duration-[1s]" 
        />
      </aside>
      <aside className="bg-gray-100 w-[50%] h-[100%] flex justify-center items-center">
        <form className="h-[100%] w-[90%] flex justify-center items-center">
          <input
            type="search"
            placeholder="search here"
            id="search-box"
            value={inputVal}
            onChange={(e) => {
              setInputVal(e.target.value);
            }}
            className="w-[100%] h-[40px] rounded-[20px] text-center border-2 border-gray-600"
          />
        </form>
      </aside>
      <aside className="px-4 bg-gray-100 w-[25%] h-[100%] text-[#a1ace3] text-[20px] flex justify-around items-center">
        <IoCartOutline className="border-b-2 border-gray-300 pb-2 text-[39px] text-[#0d3918] hover:border-green-700 hover:text-[45px] transition-all duration-300 hover:text-[#24843c]" />
        {/* <FaRegHeart className="border-b-2 pb-2 text-[39px] hover:border-green-700 hover:text-[#f15f5f] hover:text-[45px] transition-all duration-300" /> */}
        {/* <FaRegUserCircle className="border-b-2 pb-2 text-[33px] hover:border-green-700 hover:text-[45px] hover:text-[#5ff183] transition-all duration-300" /> */}
      </aside>
    </nav>
  );
};

export default Navbar;
