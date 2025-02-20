import React from 'react'
import { Outlet, ScrollRestoration } from "react-router";
import Footer from "../Footer";
import NavbarSection from '../Navbar';

function Root() {
    return (
        <>
            <NavbarSection />
            <main>
            <ScrollRestoration />

                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Root