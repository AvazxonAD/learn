import Layout from "./components/layout";
import './index.css'
import Carousel from './components/carousel'
import Pricing from "./components/pricing";
import { ProductContext } from "./components/contexts/product";
import { useState } from "react";
import ErrorBoundary from "./components/errorBoundary";


function App() {

  const [productName, setProductName] = useState("")
  const [inputValue, setInputValue] = useState("")

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setProductName(inputValue)
  }

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
    <ErrorBoundary>
      <ProductContext.Provider value={{ productName, setProductName }}>
        <Layout>
          <Carousel />
          <Pricing />
        </Layout>
      </ProductContext.Provider>
    </ErrorBoundary>
  </>;
}

export default App;
