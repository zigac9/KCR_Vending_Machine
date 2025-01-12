import { Beverage } from "./Beverage";
import { getLocaleStr } from "../utils/LocaleManager";

export const kave: Beverage[] = [
    {
        id: 1,
        name: () => getLocaleStr("Espresso"),
        urlName: "espresso",
        img: "/kave/espresso.png",
        amount: 1,
        price: 0.80,
        available_brands: ["barcaffe", "illy"]
    },
    {
        id: 2,
        name: () => getLocaleStr("Cappuccino"),
        urlName: "cappuccino",
        img: "/kave/cappuccino.png",
        amount: 1,
        price: 0.90,
        available_brands: ["lavazza", "illy"]
    },
    {
        id: 3,
        name: () => getLocaleStr("Latte"),
        urlName: "latte",
        img: "/kave/latte.png",
        amount: 1,
        price: 1.00,
        available_brands: ["barcaffe", "lavazza"]
    },
    {
        id: 4,
        name: () => getLocaleStr("Americano"),
        urlName: "americano",
        img: "/kave/americano.png",
        amount: 1,
        price: 0.70,
        available_brands: ["illy", "lavazza"]
    },
    {
        id: 5,
        name: () => getLocaleStr("Mocha"),
        urlName: "mocha",
        img: "/kave/mocha.png",
        amount: 1,
        price: 1.10,
        available_brands: ["barcaffe", "illy"]
    },
    {
        id: 6,
        name: () => getLocaleStr("Ristretto"),
        urlName: "ristretto",
        img: "/kave/ristretto.png",
        amount: 1,
        price: 0.85,
        available_brands: ["lavazza", "illy"]
    },
    {
        id: 7,
        name: () => getLocaleStr("Macchiato"),
        urlName: "macchiato",
        img: "/kave/macchiato.png",
        amount: 1,
        price: 0.50,
        available_brands: ["barcaffe", "lavazza"]
    },
    {
        id: 8,
        name: () => getLocaleStr("Bela kava"),
        urlName: "bela-kava",
        img: "/kave/white.png",
        amount: 0,
        price: 0.45,
        available_brands: ["illy"]
    },
    {
        id: 9 ,
        name: () => getLocaleStr("Kava z mlekom"),
        urlName: "kava-z-mlekom",
        img: "/kave/with-milk.png",
        discount: 30,
        price: 0.90,
        available_brands: ["illy", "lavazza"],
        amount: 1
    }
];