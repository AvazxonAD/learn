import { useEffect, useState } from "react"
import { Link, Outlet, useLocation, useParams } from "react-router-dom"

const ProfilePage = () => {
    return (
        <>
            <h2>User Profile</h2>
            <ul>
                <li>
                    <Link to={'settings'} > Profile settings</Link >
                </li>

                <li>
                    <Link to={'info'} > Profile info</Link >
                </li>
            </ul>

            <Outlet />
        </>
    )
}

export default ProfilePage