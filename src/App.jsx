import React from "react";
import HomePage from "./pages/home/HomePage";
import ContactPage from "./pages/contact/ContactPage";
import ProjectsPage from "./pages/projects/ProjectsPage";
import AboutPage from "./pages/about/AboutPage";
import TopBar from "./components/topBar/TopBar";
import SideNav from "./components/sideNav/SideNav";
import OnlyPortrait from "./components/onlyPortrate/OnlyPortrait";
import "./app.scss";


const App = () => {
  return (
    <div className="app">
      <OnlyPortrait/>
      <TopBar />
      <SideNav />

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
