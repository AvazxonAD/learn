import { useContext, useEffect, useState } from "react"
import { ProductContext } from "../contexts/product"

const Product = () => {
    const context = useContext(ProductContext)

    const [inputValue, setInputValue] = useState("")

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        context.setProductName(inputValue)
    }

    useEffect(() => {
        if (inputValue === "boom") {
            throw new Error("Boom error from effect!");
        }
    }, [inputValue]);


    return <>
        <form onSubmit={submit}>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button style={{
                height: "100px",
                width: "100px"
            }}>
                Change
            </button>
        </form>

        <h1>{context.productName} 50000</h1>
    </>
}

export default Product