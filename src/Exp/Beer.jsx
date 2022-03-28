import beer from "../img/beer.jpg";
import { Icon } from "@iconify/react";

function App() {
  return (
    <div className="App flex font-['Noto Sans'] w-screen h-screen bg-gradient-to-br from-slate-700 justify-center">
      <div className="flex items-center">
        <div className="border-1 border-slate-300">
          <img src={beer} className="w-96 border-0 rounded-t-lg" />
          <div className="bg-white border-0 rounded-b-lg px-4 relative ">
            <div className="py-3">
              <div className="font-bold text-md">Beer</div>
              <div className="flex flex-row space-x-1 text-sm text-slate-600">
                <div>by</div>
                <div className="font-semibold">jiahuiiii</div>
                <div>in</div>
                <div className="font-semibold">MRGA</div>
              </div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="font-bold">$100</div>
            </div>
            <div className="flex flex-row space-x-2 pb-3 items-center">
              <div className="text-md">★★★★★</div>
              <div className="text-xs">(87)</div>
              <div className="border-0 rounded-lg p-3 w-min bg-slate-100 absolute bottom-4 right-4">
                <Icon icon="mdi:cart-minus" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 text-sm">Made with 💖 by MRGA. All right reserved.</div>
    </div>
  );
}

export default App;
