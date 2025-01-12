"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { caji } from "@/app/data/caji";
import { kave } from "@/app/data/kave";
import { ostalo } from "@/app/data/ostalo";
import Link from "next/link";
import { getLocaleStr } from "@/app/utils/LocaleManager";

const EspressoScreen: React.FC = () => {
  const [size, setSize] = useState("small");
  const [brand, setBrand] = useState("illy");
  const [sugar, setSugar] = useState(0);
  const [addons, setAddons] = useState<string[]>([]);
  const [total, setTotal] = useState(8);

  const params = useParams();

  const { drink, type } = params;
  const [discount, setDiscount] = useState(0);

  const selectedDrink = (() => {
    switch (drink) {
      case "caj":
        return caji.find((item) => item.urlName.toLowerCase() === type);
      case "kava":
        return kave.find((item) => item.urlName.toLowerCase() === type);
      case "ostalo":
        return ostalo.find((item) => item.urlName.toLowerCase() === type);
      default:
        return undefined;
    }
  })();

  // console.log("drink", selectedDrink);

  const basePrice = selectedDrink?.price ?? 0;

  useEffect(() => {
    let price = basePrice;
    let d = 0;
    if (selectedDrink?.discount) {
      d = (price * selectedDrink.discount) / 100;
      setDiscount(d);
      price -= d;
    }
    if (size === "large") {
      price *= 2;
    }

    price += addons.length * 0.05;

    setTotal(price);
  }, [selectedDrink, size, addons]);

  return (
    <div className="p-6">
      {/* Title */}
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-brown-800 mt-6">
          {selectedDrink?.name() ?? getLocaleStr("Napaka")}
        </h1>
        <div className="mt-6">
          <h2 className="text-lg font-semibold">{getLocaleStr("Velikost")}</h2>
          <div className="flex mt-4 space-x-4">
            <button
              className={`w-32 h-32 pb-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
                size === "small"
                  ? "border-4 border-brown-800 bg-brown-100"
                  : "border border-gray-300"
              }`}
              onClick={() => setSize("small")}
            >
              <Image
                src={selectedDrink?.img ?? ""}
                alt="Small Coffee"
                width={selectedDrink?.urlName === "espresso" ? 40 : 60}
                height={selectedDrink?.urlName === "espresso" ? 40 : 60}
                className="mx-auto object-cover"
              />
              <span className="block mt-2 text-center">
                {getLocaleStr("Mala")}
              </span>
            </button>
            <button
              className={`w-32 h-32 pb-2 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
                size === "large"
                  ? "border-4 border-brown-800 bg-brown-100"
                  : "border border-gray-300"
              }`}
              onClick={() => setSize("large")}
            >
              <Image
                src={selectedDrink?.img ?? ""}
                alt="Large Coffee"
                width={selectedDrink?.urlName === "espresso" ? 60 : 80}
                height={selectedDrink?.urlName === "espresso" ? 60 : 80}
                className="mx-auto object-cover"
              />
              <span className="text-center">{getLocaleStr("Velika")}</span>
            </button>
          </div>
        </div>

        {/* Brand Selection */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">{getLocaleStr("Znamka")}</h2>
          <div className="flex mt-4 space-x-4">
            {selectedDrink?.available_brands.map((brandName) => (
              <button
                key={brandName}
                className={`w-32 h-32 p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
                  brand === brandName
                    ? "border-4 border-brown-800 bg-brown-100"
                    : "border border-gray-300"
                }`}
                onClick={() => setBrand(brandName)}
              >
                <div className="relative w-full h-full">
                  <Image
                    className="object-contain"
                    src={`/znamke/${brandName}.png`}
                    alt={`${brandName} logo`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                {/* <span className="block mt-2 text-center">{brandName}</span> */}
              </button>
            ))}
          </div>
        </div>

        {/* Sugar Level */}
        {/* Sugar Level */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold">{getLocaleStr("Sladkor")}</h2>
          <div className="flex mt-4 items-center space-x-4">
            <button
              className={`p-4 bg-gray-200 text-neutral-500 rounded-full text-2xl ${
                sugar === 0 ? "opacity-50" : ""
              }`}
              onClick={() => setSugar(Math.max(0, sugar - 1))}
              disabled={sugar === 0}
            >
              -
            </button>
            <span className="text-2xl">{sugar}</span>
            <button
              className={`p-4 bg-gray-200 text-neutral-500 rounded-full text-2xl ${
                sugar === 5 ? "opacity-50" : ""
              }`}
              onClick={() => setSugar(Math.min(5, sugar + 1))}
              disabled={sugar === 5}
            >
              +
            </button>
          </div>
          <div className="mt-4">
            <input
              type="range"
              min="0"
              max="5"
              value={sugar}
              onChange={(e) => setSugar(Number(e.target.value))}
              className="w-full h-5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
        {/* Addons Selection */}
        <div className="mt-6">
          <h2 className="text-lg font-semibold ">Dodatki</h2>
          <div className="flex mt-4 space-x-4">
            {["cocoa", "marshmello"].map((addonName) => (
              <button
                key={addonName}
                className={`w-32 h-32 p-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 ${
                  addons.includes(addonName)
                    ? "border-4 border-brown-800 bg-brown-100"
                    : "border border-gray-300"
                }`}
                onClick={() => {
                  if (addons.includes(addonName)) {
                    setAddons(addons.filter((item) => item !== addonName));
                  } else {
                    setAddons([...addons, addonName]);
                  }
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={`/${addonName}.png`}
                    alt={`${addonName} logo`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                {/* <span className="block mt-2 text-center">{addonName}</span> */}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 flex justify-between items-center px-8">
        <div className="text-2xl text-stone-800 font-bold">
          {getLocaleStr("ZNESEK")}:{" "}
          <span className="text-brown-700">{total.toFixed(2)} €</span>
          {discount !== 0 && ( // Show discount if available (discount !== 0)
            <span className="text-lg text-white block">
              {getLocaleStr("Popust")}: -{discount.toFixed(2)} €
            </span>
          )}
        </div>
        <div className="flex space-x-4">
          <Link href="/">
            <button className="p-4 bg-red-500 text-white rounded font-bold text-lg">
              {getLocaleStr("ZAVRNI")}
            </button>
          </Link>
          <Link
            href={`/pripravljanje/${drink}/${type}?size=${size}&brand=${brand}&sugar=${sugar}&addons=${addons.join(
              ","
            )}`}
          >
            <button className="p-4 bg-green-500 text-white rounded font-bold text-lg">
              {getLocaleStr("POTRDI")}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EspressoScreen;
