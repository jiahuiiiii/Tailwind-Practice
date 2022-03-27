import { useState } from "react";
import Pants from "./img/pants.png";
import { Icon } from "@iconify/react";

function Pants() {
  const [currentSelectedColor, setCurrentSelectedColor] = useState(0);
  const [currentSelectedSize, setCurrentSelectedSize] = useState(0);

  return (
    <div className="flex font-['Noto Sans'] justify-center items-center bg-amber-200 w-screen h-screen">
      <div className="bg-white flex flex-row relative w-8/12">
        <img className="object-cover p-10 w-1/2" src={Pants} />
        <div className="pt-10">
          <div className="font-bold text-3xl">Silfeel Jogger Pants</div>
          <div className="font-light text-3xl py-3">$192</div>
          <div className="flex flex-row space-x-2 items-center">
            <div className="text-2xl">★★★★☆</div>
            <div className="text-md">117 reviews</div>
          </div>

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
          <div className="grid grid-cols-4 gap-4">
            {["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"].map(
              (color, index) => (
                <button
                  type="button"
                  onClick={() => setCurrentSelectedSize(index)}
                  className={`px-8 py-3 rounded-lg text-center ${
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
        <Icon className="absolute top-8 right-8" icon="uil:multiply" />
      </div>
    </div>
  );
}

export default Pants;
