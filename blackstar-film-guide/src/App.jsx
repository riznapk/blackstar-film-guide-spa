import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./styles/main.scss";
import Header from "./components/Header";
import TabsComponent from "./components/tabsComponent/TabsComponent";
import Footer from "./components/footer/Footer";
import AppRouter from "./components/AppRouter";

function App() {
  // const theme = createTheme({
  //   typography: {
  //     fontFamily: "CustomFont, Arial, sans-serif",
  //   },
  // });
  return (
    <div>
      <Header />
      <TabsComponent />
      {/* <AppRouter /> */}
      <Footer />
    </div>
  );
}

export default App;
