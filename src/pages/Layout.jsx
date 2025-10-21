import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

function Layout(){
    return(
        <>
            <header>
                <NavBar />
            </header>
            <Outlet />
        </>
    )
}

export default Layout
