import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const App = () => {
  return (
    <div>
  <BrowserRouter>
   
 <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="/contactme" element={<ContactPage />} />
   <Route path="/about" element={<AboutPage />} />
   <Route path="/project" element={<ProjectsPage />} />
   <Route path="*" element={<ErrorPage />} />
 </Routes>
</BrowserRouter>
</div>);
};

export default App;
