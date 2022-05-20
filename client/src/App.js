import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import AboutPage from "./pages/about/AboutPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

import "./app.css"

const App = () => {
  return (
    <div className="appContainer">
  <BrowserRouter>
   
 <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="/contactme" element={<ContactPage />} />
   <Route path="/about" element={<AboutPage />} />
   <Route path="/projects" element={<ProjectsPage />} />
   <Route path="*" element={<ErrorPage />} />
 </Routes>
</BrowserRouter>
</div>);
};

export default App;
