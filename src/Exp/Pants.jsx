import { useState } from "react";
import Pants_ from "../img/pants.png";
import { Icon } from "@iconify/react";

function Pants() {
  const [currentSelectedColor, setCurrentSelectedColor] = useState(0);
  const [currentSelectedSize, setCurrentSelectedSize] = useState(0);

  return (
    <div className="flex font-['Noto Sans'] justify-center bg-zinc-100 md:py-10 w-full min-h-screen">
      <div className="bg-white flex p-10 flex-col relative lg:flex-row">
        <img className="md:object-cover w-[28rem]" src={Pants_} />
        <div className="pt-4 md:pt-10 lg:ml-10 ">
          <div className="font-bold text-2xl md:text-3xl">
            Silfeel Jogger Pants
          </div>
          <div className="font-light text-2xl md:text-3xl py-3">$192</div>
          <div className="flex flex-row space-x-2 items-center">
            <div className="text-2xl">★★★★☆</div>
            <div className="text-md">117 reviews</div>
          </div>
          <Icon className="absolute top-8 right-8" icon="uil:multiply" />
          <div className="font-semibold text-lg mt-10">Color</div>
          <div className="py-6 flex flex-row space-x-6 p-1">
            {[
              ["bg-black", "outline-black"],
              ["bg-stone-500", "outline-stone-500"],
              ["bg-slate-700", "outline-slate-700"],
            ].map(([bg, outline], index) => (
              <button
                type="button"
                onClick={() => setCurrentSelectedColor(index)}
                className={`w-12 h-12 ${bg} ${
                  currentSelectedColor === index
                    ? `border-0 outline outline-2 outline-offset-2 ${outline}`
                    : ""
                }`}
              ></button>
            ))}
          </div>
          <div className="my-6 flex flex-row w-full justify-between ">
            <div className="font-semibold text-lg">Size</div>
            <div className="font-semibold text-lg">Size guide</div>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(4rem,1fr))] md:grid-cols-4 gap-2 lg:gap-4">
            {["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"].map(
              (color, index) => (
                <button
                  type="button"
                  onClick={() => setCurrentSelectedSize(index)}
                  className={`md:px-4 py-3 rounded-lg text-center ${
                    currentSelectedSize === index
                      ? "border-2 border-zinc-500"
                      : "border-2 border-zinc-200"
                  }`}
                >
                  {color}
                </button>
              )
            )}
          </div>
          <div className="border-2 border-zinc-400 px-8 py-3 rounded-lg text-center my-8 bg-slate-700 text-white">
            Add to bag
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Pants;
