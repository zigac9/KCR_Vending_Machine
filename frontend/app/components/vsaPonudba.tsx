import Link from "next/link"
import Image from "next/image"
import { getLocaleStr } from "../utils/LocaleManager"

export default function VsaPonudba() {
    return (
        <div className="vsa-ponudba mb-4">
          <h2 className="text-2xl text-white font-bold mb-4">{getLocaleStr("VSA PONUDBA")}</h2>
          <div className="grid grid-cols-3 gap-12">
            <Link href="/kava">
              <div className="kava">
                <div className="flex flex-col items-center bg-coffe-100 border-2 rounded-md border-coffe-500 cursor-pointer">
                  <div className="relative w-[100px] h-[100px] my-4">
                    <Image
                      src="/kave/logo.png"
                      alt="kava"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="text-center text-black opacity-90 mb-4 font-semibold text-xl">
                    {getLocaleStr("KAVA")}
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/caj">
              <div className="caj">
                <div className="flex flex-col items-center bg-coffe-100 border-2 rounded-md border-coffe-500 cursor-pointer">
                  <div className="relative w-[100px] h-[100px] my-4">
                    <Image
                      src="/caji/logo.png"
                      alt="čaj"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="text-center text-black opacity-90 mb-4 font-semibold text-xl">
                    {getLocaleStr("ČAJ")}
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/ostalo">
              <div className="ostalo">
                <div className="flex flex-col items-center bg-coffe-100 border-2 rounded-md border-coffe-500 cursor-pointer">
                  <div className="relative w-[100px] h-[100px] my-4">
                    <Image
                      src="/ostalo/logo.png"
                      alt="ostalo"
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="text-center text-black opacity-90 mb-4 font-semibold text-xl">
                    {getLocaleStr("OSTALO")}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
    );
}