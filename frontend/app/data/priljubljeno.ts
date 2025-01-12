import { getLocaleStr } from "../utils/LocaleManager";

interface Priljubljeno {
    name: () => string;
    img: string;
    urlName: string;
    category: "caj" | "kava" | "ostalo";
}

export const priljubljeno: Priljubljeno[] = [
    {
        name: () => getLocaleStr("Espresso"),
        urlName: "espresso",
        img: "/kave/espresso.png",
        category: "kava"
    },
    {
        name: () => getLocaleStr("Sadni čaj"),
        urlName: "sadni",
        img: "/caji/forrest.png",
        category: "caj"
    },
    {
        name: () => getLocaleStr("Americano"),
        urlName: "americano",
        img: "/kave/americano.png",
        category: "kava"
    },
    {
        name: () => getLocaleStr("Kapučino"),
        urlName: "cappuccino",
        img: "/kave/cappuccino.png",
        category: "kava"
    }
]
