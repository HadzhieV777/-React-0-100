import React from "react";

import NavBar from "./Header";
import HomeView from "./HomePage";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <HomeView />
      <Footer />
    </div>
  );
}
