import { Outlet } from "react-router-dom";


export function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>

    )
}