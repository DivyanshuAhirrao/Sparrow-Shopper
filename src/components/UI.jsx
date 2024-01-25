import React, { useContext, useEffect, useState } from "react";
import img from "../media/img.png";
import coupon from "../media/coupon.png";
import { GlobalDataApi } from "../context/GlobalData";
import { IoMdSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { TbFilterBolt } from "react-icons/tb";

const UI = () => {

  let[count , setCount] = useState(0);

  let brand = [
    "Louis Philippe",
    "Van Heusen",
    "Arrow",
    "Park Avenue",
    "Peter England",
    "Allen Solly",
    "Louis Stitch",
    "Jainish",
  ];
  let colors = [
    "red",
    "green",
    "blue",
    "black",
    "white",
    "purple",
    "gray",
    "yellow",
  ];
  let price = [
    "Rs. 100-500",
    "Rs. 500-1000",
    "Rs. 1000-2500",
    "Rs. 2500-4000",
    "Rs. 4000-6500",
  ];
  let discount = ["10% and above", "25% and above", "40% and above"];
  let [users, setState] = useState([]);
  let { inputVal, setInputVal } = useContext(GlobalDataApi);

  let myUsers = async () => {
    let responce = await fetch("https://api.escuelajs.co/api/v1/products");
    let data = await responce.json();
    console.log(data);
    setState(data);
  };

  useEffect(() => {
    myUsers();
  }, []);

  return (
    <>
      <main>
        <figure className="w-[100%] flex gap-[0.2%] justify-arround">
          <img src={img} alt="sample" className="w-[79.8%] " />
          <img src={coupon} alt="sample" className="w-[20%] " />
        </figure>

        <article className="flex">
          <aside className="lg:w-[18%] sm:w-[33%] bg-[#cccccc4e] border-r-2 border-green-500 flex flex-col">
            <div className="flex justify-between ">
              <h1 className="pl-3 sm:text-[10px] md:text-[20px] lg:text-[40px] xl:text-[30px] text-center font-bold text-green-800">
                Filters
              </h1>
              <TbFilterBolt className="pr-4 pt-2 sm:text-[15px]  xl:text-[39px] text-[#3c323251]" />
            </div>
            <hr className="border-b-[1px] border-gray-300 pt-1" />

            <div className="flex justify-between flex-col">
              <h1 className="pb-2 pt-4 w-[100%] pl-2 sm:text-[15px] xl:text-[20px] font-bold text-slate-600">
                Brand
              </h1>
              {brand.map((brand) => {
                return (
                  <div className="flex gap-2 text-gray-600 pl-2">
                    <input type="checkbox" className="scale-[1.2]" />
                    <span>{brand}</span>
                  </div>
                );
              })}
            </div>
            <hr className="border-b-[1px] border-gray-300 relative top-1" />

            <div className="flex justify-between flex-col">
              <h1 className="pb-2 pt-4 w-[100%] pl-2 sm:text-[15px] xl:text-[20px] font-bold text-slate-600">
                Price
              </h1>
              {price.map((brand) => {
                return (
                  <div className="flex gap-2 text-gray-600 pl-2">
                    <input type="checkbox" className="scale-[1.2]" />
                    <span>{brand}</span>
                  </div>
                );
              })}
            </div>
            <hr className="border-b-[1px] border-gray-300 relative top-1" />

            <div className="flex justify-between flex-col">
              <h1 className="pb-2 pt-4 w-[100%] pl-2 sm:text-[15px] xl:text-[20px] font-bold text-slate-600">
                Color
              </h1>
              {colors.map((brand) => {
                return (
                  <div className="flex gap-2 text-gray-600 pl-2">
                    <input type="checkbox" className="scale-[1.2]"/>
                    <span>{brand}</span>
                  </div>
                );
              })}
            </div>
            <hr className="border-b-[1px] border-gray-300 relative top-1" />

            <div className="flex justify-between flex-col">
              <h1 className="pb-2 pt-4 w-[100%] pl-2 sm:text-[15px] xl:text-[20px] font-bold text-slate-600">
                Discount
              </h1>
              {discount.map((brand) => {
                return (
                  <div className="flex gap-2 text-gray-600 pl-2">
                    <input type="checkbox" className="scale-[1.2]"/>
                    <span>{brand}</span>
                  </div>
                );
              })}
            </div>
            <hr className="border-b-[1px] border-gray-300 relative top-1" />
          </aside>
          <aside className=" lg:w-[82%] sm:w-[67%]">
            <section className="w-[100%] bg-[#cccccc1d] p-10 flex flex-wrap justify-center items-center gap-10">
              {users
                .filter((val) => {
                  if (inputVal === "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(inputVal.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((e) => {
                  return (
                    <div
                      className="h-[25rem] w-[16rem] border-b-2 border-green-700 overflow-hidden"
                      key={e.id}
                    >
                      <div className="h-[18rem] w-[16rem] overflow-hidden">
                        <FaRegHeart className="absolute pl-2 pt-2 text-[33px] text-[#2e2a2a67] hover:text-red-500 z-10 hover:text-[36px] transition-all duration-300"/>
                        <img
                          src={e.images[0]}
                          alt={e.category.name}
                          className="h-[18rem] w-[16rem] hover:cursor-pointer hover:scale-[1.1] transition-all duration-300"
                        />
                      </div>
                      <div className="w-[100%]  h-[7rem]  hover:bg-[#cccccc54] transition-all duration-300 hover:cursor-pointer">
                        {/* <h3 className="pl-3"> {e.id}</h3> */}
                        <p className="pl-3 uppercase font-bold pt-2">
                          {e.title}
                        </p>
                        <hr />
                        <p className="pl-3">
                          Price :{" "}
                          <span className="font-bold hover:text-[17px] transition-all duration-300">
                            Rs.{e.price * 80 - e.price * 0.2 * 80}
                          </span>{" "}
                          <strike className="text-gray-400 pl-3 text-[12px]">
                            Rs.{e.price * 80}{" "}
                          </strike>{" "}
                          <span className="text-red-500"> (20% OFF) </span>
                        </p>
                      </div>
                    </div>
                  );
                })}
            </section>
          </aside>
        </article>
      </main>
    </>
  );
};

export default UI;
