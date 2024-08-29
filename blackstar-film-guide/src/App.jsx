import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/main.scss";
import Header from "./components/Header";
import TabsComponent from "./components/tabsComponent/TabsComponent";
import Footer from "./components/footer/Footer";
// import AppRouter from "./components/AppRouter";
import { useState } from "react";
import AppRouter from "./components/appRouter/AppRouter";

function App() {
  return <AppRouter />;
}

export default App;
