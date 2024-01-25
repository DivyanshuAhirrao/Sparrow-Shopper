import React from "react";

const Cards = ({ users }) => {
  return (
    <>
       
    
      {users.map((e) => {
        return (
          <div className="h-[25rem] w-[16rem] border-b-2 border-green-700" key={e.id}>
            <img
              src={e.images[0]}
              alt={e.category.name}
              className="h-[18rem] w-[16rem]"
            />
            <div className="w-[100%]  h-[7rem]  hover:bg-blue-200 transition-all duration-300 hover:cursor-pointer">
              {/* <h3 className="pl-3"> {e.id}</h3> */}
              <p className="pl-3 uppercase font-bold pt-2"> {e.title} </p>{" "}
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
    </>
  );
};

export default Cards;
