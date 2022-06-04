import React from "react";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import AboutPage from "./pages/about/AboutPage";
import TopBar from "./components/topBar/TopBar";
import SideNav from "./components/sideNav/SideNav";
import "./app.scss";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./services/scrolltotop";
 

const App = () => {
  return (
    
    <div className="app">
      {/*TODO:fix scroll to the top !!  */}
     {/*<ScrollToTop/>*/}
      <TopBar />

    
      <SideNav />

      <div className="sections">
      
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
