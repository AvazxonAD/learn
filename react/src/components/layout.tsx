import type { ReactNode } from "react"
import Footer from "./footer/footer"
import Navbar from "./navbar"

interface Iprops {
    children: ReactNode
}

const Layout = ({ children }: Iprops) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout