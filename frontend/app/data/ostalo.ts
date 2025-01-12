import { Beverage } from "./Beverage";
import { getLocaleStr } from "../utils/LocaleManager";

export const ostalo: Beverage[] = [
    {
        id: 1,
        name: () => getLocaleStr("Temna vroča čokolada"),
        urlName: "temna-vroca-cokolada",
        img: "/ostalo/black.png",
        amount: 1,
        price: 1.0,
        available_brands: ["milka", "gorenka"]
    },
    {
        id: 2,
        name: () => getLocaleStr("Bela vroča čokolada"),
        urlName: "bela-vroca-cokolada",
        img: "/ostalo/white.png",
        amount: 1,
        price: 1.1,
        available_brands: ["nestle", "milka"]
    },
    {
        id: 3,
        name: () => getLocaleStr("Vroče mleko"),
        urlName: "vroce-mleko",
        img: "/ostalo/milk.png",
        amount: 1,
        discount: 30,
        price: 0.9,
        available_brands: ["gorenka", "barcaffe"]
    },
    {
        id: 4,
        name: () => getLocaleStr("Kakav"),
        urlName: "kakav",
        img: "/ostalo/cacao.png",
        amount: 1,
        discount: 40,
        price: 0.85,
        available_brands: ["nescaffe", "nestle"]
    }
];