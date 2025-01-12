export interface Beverage{
    id: number;
    name: () => string;
    urlName: string;
    img: string;
    amount: number;
    available_brands: string[];
    price: number;
    discount?: number;
}