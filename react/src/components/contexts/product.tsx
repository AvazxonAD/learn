import { createContext } from "react";

interface IProductContext {
    productName: string,
    setProductName: (productName: string) => void
}

export const ProductContext = createContext<IProductContext>({
    productName: "",
    setProductName: (): void => { }
})