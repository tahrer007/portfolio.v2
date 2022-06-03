import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import AboutPage from "./pages/about/AboutPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

import TopBar from "./components/topBar/TopBar";
import SideNav from "./components/sideNav/SideNav"
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <TopBar/>
{  /*<SideNav/>*/}
      <div className="sections">
        <HomePage />
        <AboutPage />
        <ProjectsPage />
      <ContactPage />
      </div>
    </div>
  );
};

export default App;
