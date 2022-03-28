import React from "react";
import Tray1 from "../img/Tray1.png";
import Tray2 from "../img/Tray2.png";
import Tray3 from "../img/Tray3.png";
import Tray4 from "../img/Tray4.png";

function WoodCardTray() {
  return (
    <div className="p-20 w-screen h-screen font-['Noto Sans'] flex flex-row justify-between">
      <div className="flex flex-col w-1/2">
        <div className="text-6xl font-bold">Technical Specifications</div>
        <div className="py-5 text-2xl text-slate-500">
          The walnut wood card tray is precision milled to perfectly fit a stack
          of Focus cards. The powder coated steel divider separates active card
          from new ones, or can be used to archive important task lists.
        </div>
        <div className="grid grid-cols-2 divide-y-2 divide-slate-300 gap-6 pt-16">
          <div className="pt-6 border-t-2 border-slate-300">
            <div className="font-semibold py-2 text-2xl">Origin</div>
            <div className="text-2xl text-slate-400">Designed by Good Goods, Inc.</div>
          </div>
          <div className="pt-6 pb-8">
            <div className="font-semibold py-2 text-2xl">Material</div>
            <div className="text-2xl text-slate-400">
              Solid walnut base with rare earth magnets and powder coated steel
              card cover
            </div>
          </div>
          <div className="pt-6">
            <div className="font-semibold py-2 text-2xl">Dimensions</div>
            <div className="text-2xl text-slate-400">6.25" x 3.55" x 1.15"</div>
          </div>
          <div className="pt-6">
            <div className="font-semibold py-2 text-2xl">Finish</div>
            <div className="text-2xl text-slate-400">
              Hand sanded and finished with natural oil
            </div>
          </div>
          <div className="pt-6">
            <div className="font-semibold py-2 text-2xl">Includes</div>
            <div className="text-2xl text-slate-400">Wood card tray and 3 refill packs</div>
          </div>
          <div className="pt-6">
            <div className="font-semibold py-2 text-2xl">Considerations</div>
            <div className="text-2xl text-slate-400">
              Made from natural materials. Grain and color vary with each item.
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 pl-20 space-y-7">
        <div className="flex flex-row justify-between w-full ">
          <img className="w-96 h-96 object-contain" src={Tray1} />
          <img className="w-96 h-96 object-contain" src={Tray2} />
        </div>
        <div className="flex flex-row justify-between w-full items-center">
          <img className="w-96 h-96 object-cover" src={Tray3} />
          <img className="w-96 h-96 object-cover" src={Tray4} />
        </div>
      </div>
    </div>
  );
}

export default WoodCardTray;
