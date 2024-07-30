import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
{/*Now we wanna dynamically pass elements/pages -> Home,AboutUs,CotactUs etc between these two i.e Header & Footer.For that we'll useOutlet,it'll use Layout as a base, and wherever Outlet is written that things can be changed dynamically.In this scenario, Header,Footer will be same for all but the middle portion will be changed, nesting ki jaa skti hai, main.jsx mein top level mein layout/root de dya or uske andarnested routes */}
  <Outlet/>
      <Footer />
    </>
  );
}

export default Layout;
