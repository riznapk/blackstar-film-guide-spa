import React from "react";
import { Routes, Route } from "react-router-dom";
import FilmGuide from "../pages/filmGuide/FilmGuide";
import { BrowserRouter as Router } from "react-router-dom";
import TabsComponent from "./tabsComponent/TabsComponent";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/festival/film-guide/" element={<TabsComponent />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
