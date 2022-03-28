import { useState } from "react";
import Pants from "../img/pants.png";
import Pants2_ from "../img/pants2.png";
import Pants3 from "../img/pants3.png";
import Pants4 from "../img/pants4.png";
import { Icon } from '@iconify/react';


function Pants2() {
  const [currentSelectedColor, setCurrentSelectedColor] = useState(0);
  const [currentSelectedSize, setCurrentSelectedSize] = useState(0);

  return (
    <div className="flex flex-col items-center font-['Noto Sans'] justify-center m-10 w-screen">
      <div className="flex flex-row items-center space-x-3">
        <div className="font-semibold">Women</div>
        <Icon icon="mdi:chevron-right" />
        <div className="font-semibold">Bottoms</div>
        <Icon icon="mdi:chevron-right" />
        <div className="font-semibold">Casual Pants</div>
        <Icon icon="mdi:chevron-right" />
        <div className="text-slate-700">Silfeel Jogger Pants</div>
      </div>
      <div className="flex flex-row space-x-10 pt-10">
        <img src={Pants2_} className="w-72 object-cover" />
        <div className="space-y-10">
          <img src={Pants4} className="w-60" />
          <img src={Pants3} className="w-60" />
        </div>
        <img src={Pants} className="w-72 object-cover" />
      </div>
      <div className="flex flex-row divide-x-2 pt-10">
        <div className="pr-4">
          <div className="font-bold text-3xl">Silfeel Jogger Pants</div>
          <div className="py-5">Jogger pants with a sophisticated feel. Versatile design for any look.</div>
          <div className="font-bold text-xl py-3">Highlights</div>
          <div>
            <div>- Smooth twill fabric with an elegant drape.</div>
            <div>
              {" "}
              - Laid-back jogger pants with a smooth, comfortable feel.{" "}
            </div>
            <div>- Wrinkle-resistant for easy care.</div>
            <div>
              - Easy waist design with a neat look at the front and elastic at
              the back.
            </div>
            <div>- Sleek, 1-tuck jogger pants in a tapered cut.</div>
            <div>- Ideal for refined and casual styles.</div>
          </div>
          <div className="font-bold text-xl py-3">Materials</div>
          <div>
            <div className="font-bold">FABRIC DETAILS</div>
            <div>100% Polyester </div>
            <div className="font-bold">WASHING INSTRUCTIONS</div>
            <div>Machine wash cold, Dry Clean</div>
          </div>
        </div>
        <div className="pl-4">
          <div className="font-light text-3xl py-3">$192</div>
          <div className="flex flex-row space-x-2 items-center">
            <div className="text-2xl">★★★★☆</div>
            <div className="text-md">117 reviews</div>
          </div>
          <div className="font-semibold text-lg mt-5">Color</div>
          <div className="py-3 flex flex-row space-x-6 p-1">
            {[
              ["bg-black", "outline-black"],
              ["bg-stone-500", "outline-stone-500"],
              ["bg-slate-700", "outline-slate-700"],
            ].map(([bg, outline], index) => (
              <button
                type="button"
                onClick={() => setCurrentSelectedColor(index)}
                className={`w-8 h-8 ${bg} ${
                  currentSelectedColor === index
                    ? `border-0 outline outline-2 outline-offset-2 ${outline}`
                    : ""
                }`}
              ></button>
            ))}
          </div>
          <div className="my-3 flex flex-row w-full justify-between ">
            <div className="font-semibold text-lg">Size</div>
            <div className="font-semibold text-lg">Size guide</div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"].map(
              (color, index) => (
                <button
                  type="button"
                  onClick={() => setCurrentSelectedSize(index)}
                  className={`px-5 py-3 rounded-lg text-center ${
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

export default Pants2;
