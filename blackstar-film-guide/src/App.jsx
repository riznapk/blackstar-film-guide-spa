import { createTheme, ThemeProvider } from "@mui/material/styles";

import "./styles/main.scss";
import FilmGuide from "./pages/FilmGuide/FilmGuide";

function App() {
  // const theme = createTheme({
  //   typography: {
  //     fontFamily: "CustomFont, Arial, sans-serif",
  //   },
  // });
  return (
    // <ThemeProvider theme={theme}>
    <FilmGuide />
    // </ThemeProvider>
  );
}

export default App;
