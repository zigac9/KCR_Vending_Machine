"use client";
import { kave } from "../data/kave";
import Image from "next/image";
import Link from "next/link";
import { getLocaleStr } from "../utils/LocaleManager";

export default function Kava() {
  return (
    <main className="px-10 py-2">
      <div className="title-text flex font-semibold text-5xl items-center gap-4 mb-8">
        <Image src="/logo.svg" alt="logo" width={148} height={148} />
        <h1 className="text-white">
          {getLocaleStr("Napolni svoj dan")}
          <span className="text-black opacity-50">
            {" "}
            {getLocaleStr("s vsakim požirkom.")}
          </span>
        </h1>
      </div>
      <div className="kave mb-16">
        <h2 className="text-2xl text-white font-bold mb-4">{getLocaleStr("KAVE")}</h2>
        <div className="grid grid-cols-4 gap-x-10 gap-y-4">
          {kave.map((item) =>
            item.amount > 0 ? (
              <div key={item.name()}>
                <Link key={item.name()} href={`order/kava/${item.urlName}`}>
                  <div className="relative flex flex-col items-center bg-coffe-200 border-2 border-coffe-50 rounded-md cursor-pointer">
                    {item.discount && (
                      <div className="absolute z-[1] top-0 right-0 bg-coffe-500 text-white font-semibold text-xs px-2 py-1 rounded-bl-md">
                        {item.discount}% OFF
                      </div>
                    )}
                    <div className="relative w-[100px] h-[100px]">
                      <Image
                        src={item.img}
                        alt={item.name()}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <span className="text-black opacity-50 mb-4 font-semibold">
                      {item.name()}
                    </span>
                  </div>
                </Link>
              </div>
            ) : (
              <div
                key={item.name()}
                className="flex flex-col items-center bg-coffe-200 border-2 border-coffe-50 rounded-md opacity-50 cursor-not-allowed"
              >
                <div className="relative w-[100px] h-[100px]">
                  <Image
                    src={item.img}
                    alt={item.name()}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>
                <span className="text-black opacity-50 mb-4 font-semibold">
                  {item.name()}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </main>
  );
}
