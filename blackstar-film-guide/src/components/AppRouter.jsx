import React from "react";
import { Routes, Route } from "react-router-dom";
import FilmGuide from "../pages/filmGuide/FilmGuide";
import TabsComponent from "./tabsComponent/TabsComponent";

function AppRouter() {
  return (
    <Routes>
      <Route path="/festival/film-guide/" element={<TabsComponent />} />
    </Routes>
  );
}

export default AppRouter;
