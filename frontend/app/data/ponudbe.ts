import { getLocaleStr } from "../utils/LocaleManager";

interface Ponudba {
    name: () => string;
    img: string;
    urlName: string;
    discount: number;
    category: "kava" | "caj" | "ostalo";
}

export const ponudbe: Ponudba[] = [
    {
        name: () => getLocaleStr("Kakav"),
        urlName: "kakav",
        img: "/ostalo/cacao.png",
        discount: 40,
        category: "ostalo"
    },
    {
        name: () => getLocaleStr("Mleko"),
        urlName: "vroce-mleko",
        img: "/ostalo/milk.png",
        discount: 25,
        category: "ostalo"
    },
    {
        name: () => getLocaleStr("Zeleni čaj"),
        urlName: "zeleni",
        img: "/caji/green.png",
        discount: 20,
        category: "caj"
    },
    {
        name: () => getLocaleStr("Kava z mlekom"),
        urlName: "kava-z-mlekom",
        img: "/kave/with-milk.png",
        discount: 30,
        category: "kava"
    }
]
