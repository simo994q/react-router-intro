import { Outlet } from "react-router-dom";

import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";

export function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>

    )
}