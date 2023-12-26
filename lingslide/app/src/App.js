import React, { createContext, useContext, useState } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ChakraProvider, Button, theme } from "@chakra-ui/react";
import logo from "./logo.svg";
import "./App.css";
import HomePage from "./views/HomePage";
import Blogs from "./views/Blogs";
import GPTDemo from "./views/GPTDemo";
import WithSubnavigation from "./components/Navbar";
import LargeWithAppLinksAndSocial from "./components/Footer";
import WordView from "./views/WordView";
import Dictionary from "./views/Dictionary";
import Positions from "./views/Positions";
import { IntlProvider } from "react-intl";
import Wrapper from "./components/Wrapper";

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
          <Wrapper>
            <Router>
              {/* Navbar */}
              <WithSubnavigation />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/demo" element={<GPTDemo />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/dictionary/:title" element={<WordView />} />
                <Route path="/jobs" element={<Positions />} />
                {/* <Route path="/donate" element={<Dictionary />} />
                <Route path="/login" element={<Dictionary />} />
                <Route path="/tools" element={<Dictionary />} />
                <Route path="/hizmetlerimiz" element={<Dictionary />} /> */}
              </Routes>
              {/* Footer */}
              <LargeWithAppLinksAndSocial />
            </Router>
          </Wrapper>
        </div>
      </ThemeProvider>
    </ChakraProvider>
  );
}

export default App;
