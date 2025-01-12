import Link from "next/link";
import Image from "next/image";
import { ponudbe } from "../data/ponudbe";
import { getLocaleStr } from "../utils/LocaleManager";

export default function Ponudbe() {
    return (
    <div className="akcijske-ponudbe mb-14">
        <h2 className="text-2xl text-white font-bold mb-4">
          {getLocaleStr("AKCIJSKE PONUDBE")}
        </h2>
        <div className="grid grid-cols-4 gap-10">
          {ponudbe.map((item) => (
            <div key={item.name()}>
              <Link href={`/order/${item.category}/${item.urlName}`}>
                <div className="relative flex flex-col items-center bg-coffe-200 border-2 border-coffe-50 rounded-md cursor-pointer">
                  {item.discount && (
                    <div className="absolute z-10 top-0 right-0 bg-coffe-500 text-white font-semibold text-xs px-2 py-1 rounded-bl-md">
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
          ))}
        </div>
      </div>);
}