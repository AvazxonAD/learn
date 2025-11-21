import type { ReactNode } from "react"
import type { IUser } from "../shared/interfaces/userInterface"
import { Navigate, Outlet } from "react-router-dom"
interface IProp {
    user: IUser | null,
}

const Protected = ({ user }: IProp) => {
    if (!user) {
        return <Navigate to={'/'} replace />
    }
    return <Outlet />
}

export default Protected