import React, { createContext, useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider, Button, theme } from "@chakra-ui/react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./views/HomePage";
import Blogs from "./views/Blogs";
import WithSubnavigation from "./components/Navbar";
import LargeWithAppLinksAndSocial from "./components/Footer";

export const ThemeContext = createContext();
// ahh
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");
  const [isStudent, setSelected] = useState(null);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, isStudent, setSelected }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function App() {
  return (
    <ChakraProvider>
      <ThemeProvider>
        <div id={theme}>
          <Router>
            {/* Navbar */}
            <WithSubnavigation />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blogs" element={<Blogs />} />
            </Routes>
            {/* Footer */}
            <LargeWithAppLinksAndSocial />
          </Router>
        </div>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
