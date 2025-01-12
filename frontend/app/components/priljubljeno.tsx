import Link from "next/link";
import Image from "next/image";
import { priljubljeno } from "../data/priljubljeno";
import { getLocaleStr } from "../utils/LocaleManager";

export default function Priljubljeno() {
    return (
        <div className="priljubljeno mb-14">
          <h2 className="text-2xl text-white font-bold mb-4">{getLocaleStr("PRILJUBLJENO")}</h2>
          <div className="grid grid-cols-4 gap-10">
            {priljubljeno.map((item) => (
              <Link
                key={item.name()}
                href={`/order/${item.category}/${item.urlName}`}
              >
                <div className="flex flex-col items-center bg-coffe-200 border-2 border-coffe-50 rounded-md cursor-pointer">
                  <div className="relative w-[100px] h-[100px] object-contain">
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
            ))}
          </div>
        </div>
    );
}