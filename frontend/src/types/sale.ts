import { Seller } from "./seller"

export type Sale = {
    id: number;
    visited: number;
    deals: number;
    date: string;
    seller: Seller;
    amount: number;
}

export type SalePage = {
    content?: Sale[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    first: true;
    number: number;
    numberOfElements?: number;
    size?: number;
    empty?: boolean;
}

export type SaleSum = {
    sellerName: string;
    sum: number;
}

export type SaleSuccess = {
    sellerName: string;
    visited: number;
    deals: number;
}