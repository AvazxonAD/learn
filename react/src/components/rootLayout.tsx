import { Link, Outlet } from "react-router-dom"

const RootLayout = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog/5">5 - User</Link>
                <Link to="/profile">Profile</Link>
            </nav>
            <Outlet />
        </>
    )
}


export default RootLayout