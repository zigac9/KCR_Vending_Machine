"use client";
import { useState } from "react";
import Image from "next/image";
import Priljubljeno from "./components/priljubljeno";
import Ponudbe from "./components/ponudbe";
import VsaPonudba from "./components/vsaPonudba";
// import ThemeSwitcher from "./components/themeSwitcher";
import { getLocaleStr } from "./utils/LocaleManager";
export default function Home() {
  // State to manage the order of components
  const [order] = useState(["Priljubljeno", "Ponudbe", "VsaPonudba"]);

  // Function to rearrange components
  // const rearrangeOrder = () => {
  //   setOrder((prevOrder) => {
  //     const newOrder = [...prevOrder];
  //     const firstItem = newOrder.shift(); // Remove the first item
  //     if (firstItem) {
  //       newOrder.push(firstItem); // Add it to the end
  //     }
  //     return newOrder;
  //   });
  // };

  // Render components based on the current order
  const renderComponent = (componentName: string) => {
    switch (componentName) {
      case "Priljubljeno":
        return <Priljubljeno />;
      case "Ponudbe":
        return <Ponudbe />;
      case "VsaPonudba":
        return <VsaPonudba />;
      default:
        return null;
    }
  };

  return (
    <main>
      <div className="px-10 py-2">
        <div className="title-text flex font-semibold text-5xl items-center gap-4 mb-8">
          <Image src="/logo.svg" alt="logo" width={148} height={148} />
          <h1>
            <span className="text-black opacity-50">
              {getLocaleStr("Izberi si svoj")}
              <br />
              {getLocaleStr("najljubši")}{" "}
            </span>{" "}
            {getLocaleStr("vroči napitek")}
          </h1>
        </div>
        {/* <div className="flex justify-end items-center space-x-2">
        <button
          className="px-4 py-2 bg-coffe-500 text-white font-semibold bg-gradient-to-tr from-coffe-300 to-coffe-500 rounded-md shadow-sm border border-white"
          onClick={rearrangeOrder}
        >
          Spremeni vrstni red
        </button>
        <ThemeSwitcher />
        </div> */}
        {order.map((componentName) => (
          <div key={componentName} className="mb-4">
            {renderComponent(componentName)}
          </div>
        ))}
      </div>
    </main>
  );
}
