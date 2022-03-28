import React from "react";
import BasicTee from "../img/basic-tee.jpg";
import NewArrivals from "../img/new-arrivals.jpg";
import TailwindLogo from "../img/tailwind-logo.png";
import { Icon } from "@iconify/react";
import Logo from "../img/logoipsum.svg";

function FooterNHeader() {
  return (
    <div className="w-screen h-screen">
      <div className="w-screen flex justify-center items-center bg-gradient-to-r from-cyan-500 to-blue-500 p-5 ">
        <div className="text-white font-semibold text-xl">
          Get Free delivery on orders over $100
        </div>
      </div>
      <div className="flex flex-row justify-between border-b-2 px-12">
        <div className="flex flex-row items-center space-x-8">
          <img src={Logo} className="w-12" />
          <div className="pb-1 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="bg-white">
              <div className="text-xl py-8 text-transparent font-bold bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
                Women
              </div>
            </div>
          </div>
          <div className="text-xl py-8 font-semibold text-neutral-700">Men</div>
          <div className="text-xl py-8 font-semibold text-neutral-700">Company</div>
          <div className="text-xl py-8 font-semibold text-neutral-700">Stores</div>
        </div>
        <div className="flex items-center space-x-8">
          <div className="flex flex-row items-center divide-x-2">
            <div className="text-xl px-6 font-semibold text-neutral-700">Sign In</div>
            <div className="text-xl px-6 font-semibold text-neutral-700">Create Account</div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Icon className="w-10 h-10" icon="twemoji:flag-for-flag-canada" />
            <div className="text-xl font-semibold text-neutral-700">CAD</div>
          </div>
          <Icon className="w-10 h-10" icon="ic:baseline-search" />
          <div className="space-x-5 flex flex-row items-center">
            <Icon className="w-10 h-10" icon="ph:handbag" />
            <div className="text-xl font-semibold">0</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-around w-screen">
        <div className="py-20 px-12 flex w-5/12 justify-between">
          <div className=" space-y-5">
            <div className="text-xl font-semibold text-neutral-700">Clothing</div>
            <div className="text-xl text-slate-500">Tops</div>
            <div className="text-xl text-slate-500">Dresses</div>
            <div className="text-xl text-slate-500">Pants</div>
            <div className="text-xl text-slate-500">Denim</div>
            <div className="text-xl text-slate-500">Sweaters</div>
            <div className="text-xl text-slate-500">T-Shirts</div>
            <div className="text-xl text-slate-500">Jackets</div>
            <div className="text-xl text-slate-500">Activewear</div>
            <div className="text-xl text-slate-500">Browse All</div>
          </div>
          <div className=" space-y-5">
            <div className="text-xl font-semibold text-neutral-700">Accessories</div>
            <div className="text-xl text-slate-500">Watches</div>
            <div className="text-xl text-slate-500">Wallets</div>
            <div className="text-xl text-slate-500">Bags</div>
            <div className="text-xl text-slate-500">Sunglasses</div>
            <div className="text-xl text-slate-500">Hats</div>
            <div className="text-xl text-slate-500">Belts</div>
          </div>
          <div className=" space-y-5">
            <div className="text-xl font-semibold text-neutral-700">Brands</div>
            <div className="text-xl text-slate-500">Full Nelson</div>
            <div className="text-xl text-slate-500">My Way</div>
            <div className="text-xl text-slate-500">Re-Arranged</div>
            <div className="text-xl text-slate-500">Counterfeit</div>
            <div className="text-xl text-slate-500">Significant Other</div>
          </div>
        </div>
        <div className="flex w-1/2 pt-20 pr-20 space-x-10">
          <div className="flex w-1/2 flex-col">
            <img className="rounded-xl" src={NewArrivals} />
            <div className="py-3">
              <div className="font-semibold text-xl text-neutral-700">New Arrivals</div>
              <div className="text-slate-500 text-xl">Shop Now</div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col">
            <img className="rounded-xl" src={BasicTee} />
            <div className="py-3">
              <div className="font-semibold text-xl text-neutral-700">Basic Tees</div>
              <div className="text-slate-500 text-xl">Shop Now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterNHeader;
