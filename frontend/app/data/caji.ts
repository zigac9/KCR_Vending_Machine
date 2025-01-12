import { Beverage } from "./Beverage";
import { getLocaleStr } from "../utils/LocaleManager";

export const caji: Beverage[] = [
    {
        id: 1,
        name: () => getLocaleStr("Črni čaj"),
        urlName: "crni",
        img: "/caji/black.png",
        amount: 1,
        available_brands: ["1001_cvet", "Teekanne"],
        price: 0.75
    },
    {
        id: 2,
        name: () => getLocaleStr("Zeleni čaj"),
        urlName: "zeleni",
        img: "/caji/green.png",
        amount: 1,
        discount: 20,
        available_brands: ["Teekanne", "Loyd"],
        price: 0.85
    },
    {
        id: 3,
        name: () => getLocaleStr("Oolong čaj"),
        urlName: "oolang",
        img: "/caji/oolong.png",
        amount: 1,
        available_brands: ["1001_cvet"],
        price: 0.90
    },
    {
        id: 4,
        name: () => getLocaleStr("Malinov čaj"),
        urlName: "malinov",
        img: "/caji/raspberry.png",
        amount: 1,
        available_brands: ["Teekanne", "Loyd"],
        price: 0.95
    },
    {
        id: 5,
        name: () => getLocaleStr("Pu-erh"),
        urlName: "puerh",
        img: "/caji/puerh.png",
        amount: 1,
        available_brands: ["1001_cvet", "Loyd"],
        price: 0.95
    },
    {
        id: 7,
        name: () => getLocaleStr("Macha"),
        urlName: "macha",
        img: "/caji/macha.png",
        amount: 1,
        available_brands: ["Teekanne"],
        price: 0.80
    },
    {
        id: 8,
        name: () => getLocaleStr("Želiščni čaj"),
        urlName: "zeliscni",
        img: "/caji/herbal.png",
        amount: 0,
        available_brands: ["1001_cvet", "Loyd"],
        price: 0.70
    },
    {
        id: 9,
        name: () => getLocaleStr("Sadni čaj"),
        urlName: "sadni",
        img: "/caji/forrest.png",
        amount: 1,
        available_brands: ["1001_cvet", "Loyd"],
        price: 0.80
    }
];