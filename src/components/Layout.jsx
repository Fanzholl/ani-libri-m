import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
      return (
            <>
            <header>
                  <NavLink to="/">Home Page</NavLink>

            </header>
            <main>
                  <Outlet />
            </main>
            </>
      );
}

export default Layout;