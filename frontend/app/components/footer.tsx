"use client";
import Image from "next/image";
import { BadgeHelp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Updated import
import { getLocaleStr } from "../utils/LocaleManager";

export default function Footer() {
  const pathname = usePathname();
  const isNavodilaPage = pathname === "/navodila" || pathname.startsWith("/pripravljanje");

  return (
    <footer className="px-8 ">
      <div className="flex justify-between items-center border-opacity-50 border-t-2 border-black py-2">
        <div className="flex flex-col items-center justify-center">
          <div className="h-[70px] aspect-square relative">
            <Image
              src="/qr-code.png"
              alt="logo"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            />
          </div>
          <span className="text-black text-center font-semibold text-sm">
            {getLocaleStr("Podajte svoje mnenje")}
          </span>
        </div>
        {!isNavodilaPage && (
          <Link
            href="/navodila"
            className="flex items-center flex-col justify-center"
          >
            <BadgeHelp size={56} color="black" strokeWidth={1} />
            <span className="text-black text-center font-semibold text-sm">
              {getLocaleStr("Navodila za uporabo")}
            </span>
          </Link>
        )}
      </div>
    </footer>
  );
}
