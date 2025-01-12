"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";
import Link from "next/link";
import { kave } from "@/app/data/kave";
import { caji } from "@/app/data/caji";
import { ostalo } from "@/app/data/ostalo";
import { getLocaleStr } from "@/app/utils/LocaleManager";

export default function PreparingDrink() {
  const params = useParams();
  const searchParams = useSearchParams();
  const { drink, type } = params;

  const sugar = searchParams.get("sugar");
  const addons = searchParams.get("addons")?.split(",") || [];

  const [progress, setProgress] = useState(0);
  const [job, setJob] = useState(getLocaleStr("Začenjam pripravo..."));
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

  const selectedDrinkName = selectedDrink?.name() ?? getLocaleStr("Napaka");
  let baseSteps: { job: string; duration: number }[] = [];

  if (drink === "kava") {
    baseSteps = [
      { job: getLocaleStr("Mletje kave..."), duration: 3000 },
      { job: getLocaleStr("Priprava kave..."), duration: 3000 },
    ];
    if (type !== "espresso") {
      baseSteps.push({ job: getLocaleStr("Dodajam mleko..."), duration: 3000 });
    }
  } else if (drink === "caj") {
    baseSteps = [
      { job: getLocaleStr("Segrevanje vode..."), duration: 2000 },
      { job: getLocaleStr("Dodajam čaj..."), duration: 1000 },
    ];
  } else if (drink === "ostalo") {
    baseSteps.push({ job: getLocaleStr("Dodajam mleko..."), duration: 3000 });
    if (type !== "vroce-mleko") {
      baseSteps.push({
        job: getLocaleStr("Dodajam čokolado..."),
        duration: 2000,
      });
    }
  }
  useEffect(() => {
    // Add conditional steps
    if (sugar !== "0") {
      baseSteps.push({
        job: getLocaleStr("Dodajam sladkor..."),
        duration: 2000,
      });
    }
    if (addons.length > 0 && addons[0] !== "") {
      baseSteps.push({
        job: getLocaleStr("Dodajam dodatke..."),
        duration: 3000,
      });
    }

    baseSteps.push({ job: getLocaleStr("Mešam..."), duration: 2000 });

    // Calculate total duration and time offsets
    const totalDuration = baseSteps.reduce(
      (acc, step) => acc + step.duration,
      0
    );
    const cumulativeTimes = baseSteps.reduce<number[]>((times, step, index) => {
      const previousTime = index > 0 ? times[index - 1] : 0;
      times.push(previousTime + step.duration);
      return times;
    }, []);

    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const progressValue = Math.min(elapsedTime / totalDuration, 1);

      // Find the current job based on elapsed time
      const currentJobIndex = cumulativeTimes.findIndex(
        (time) => elapsedTime < time
      );
      if (currentJobIndex !== -1) {
        setJob(baseSteps[currentJobIndex].job);
      }

      setProgress(progressValue);

      if (progressValue === 1) {
        setJob(getLocaleStr("Odprite pokrov in vzemite svoj napitek."));
        clearInterval(interval); // Stop updating when complete
      }
    }, 16); // Update ~60 times per second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <main className="px-10 py-2">
      <div className="title-text flex font-semibold text-6xl items-center gap-4 mb-20 mt-20 justify-center">
        {" "}
        <h1 className="text-white text-center">
          {" "}
          <span className="text-black opacity-50">
            {getLocaleStr("Pripravljam")}
          </span>{" "}
          {selectedDrinkName.toLowerCase()}
        </h1>
      </div>
      {/* Load gif here */}
      <div className="flex justify-center">
        <Image
          src="/preparing/coffe.gif"
          alt="loading"
          width={500}
          height={350}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          unoptimized
        />
      </div>
      <div className="w-full max-w-md mx-auto mt-10">
        <p className="text-center mt-3 text-white font-semibold text-4xl mb-3">
          {Math.round(progress * 100)}%
        </p>
        <div className="w-full h-5 bg-black rounded overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-75"
            style={{ width: `${progress * 100}%` }}
          ></div>
        </div>
        <p className="text-center mt-4 text-white font-semibold text-3xl mb-3">
          {job}
        </p>
      </div>
      <div className="flex justify-center mt-20 text-xl">
        <Link href="/">
          <button
            className={`btn-back bg-coffe-400 text-white rounded-md py-4 px-6 font-semibold ${
              progress < 1 ? "opacity-50" : ""
            }`}
            disabled={progress < 1}
          >
            {getLocaleStr("Odpri pokrov")}
          </button>
        </Link>
      </div>
    </main>
  );
}
