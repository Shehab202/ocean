import React from "react";
import { Check } from "lucide-react";
import { priceCardType } from "../types/cardType";
const CartOfPrice = ({
  items,
  activeTab,
  title,
  price,
  description,
}: priceCardType) => {
  return (
    <div
      className="bg-slate-900 py-6 overflow-hidden 
       border text-gray-400 border-cyan-200 rounded-xl 
    flex flex-col  p-5 relative capitalize"
    >
      <figure
        className="absolute top-0 right-10 w-2/12 h-28 bg-white rounded-full 
        shadow-xl hover:shadow-cyan-500 hover:shadow-2xl shadow-cyan-500/50 blur-2xl opacity-40"
      />
      <p className=" text-white text-lg font-bold mb-3">{title}</p>
      <p className="mb-3">{description} </p>
      <div className="flex gap-1  items-center text-white">
        {activeTab === "monthly" ? (
          <p className="font-bold text-2xl">{price.monthly}</p>
        ) : (
          <p className="font-bold text-2xl">{price.annually}</p>
        )}
      </div>
      <div className="bg-sky-300 rounded-xl my-3 font-bold text-white text-center py-2 cursor-pointer hover:scale-105 transition-all ease-in duration-150">
        buy plan
      </div>
      <div>
        <div className="flex flex-col gap-3  ">
          {items &&
            items.map((item, index) => (
              <div className="flex  gap-2" key={index}>
                <Check className="text-sky-400" />
                {item}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default CartOfPrice;
