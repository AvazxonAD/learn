import { Link, Outlet } from "react-router-dom"
import type { RootState } from "../redux/store";
import { connect, type ConnectedProps } from "react-redux";
import type { IUser } from "../shared/interfaces/userInterface";

const RootLayout = ({ user }: ConnectedProps<typeof connector>) => {
    console.log(user)
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/blog/5">5 - User</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/user">{user?.name}</Link>
            </nav>
            <Outlet />
        </>
    )
}

const mapStateToProps = (state: RootState) => ({
    user: state.currentUser,
});

const connector = connect(mapStateToProps, null);


export default connector(RootLayout);