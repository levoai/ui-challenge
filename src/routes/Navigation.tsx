import { Outlet } from "react-router-dom";
import React from "react";

export default function Navigation() {
    return (
        <main className='main-container'>
            <div >
                <Outlet />
            </div>
        </main>
    );
}