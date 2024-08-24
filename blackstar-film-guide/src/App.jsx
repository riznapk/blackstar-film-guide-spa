import { createTheme, ThemeProvider } from "@mui/material/styles";

import FilmGuide from "./filmGuide/FilmGuide";
import "./styles/main.scss";

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
