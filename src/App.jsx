import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Router } from "./components/Router";
import { Footer } from "./components/Footer";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900  dark:text-gray-200 min-h-screen ">
        <Navbar />
        <Router />
        <Footer />
      </div>
    </div>
  );
}
