import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-blue-300 flex items-center justify-center justify-items-center">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
