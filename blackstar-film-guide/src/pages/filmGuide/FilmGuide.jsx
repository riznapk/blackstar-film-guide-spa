import Header from "../../components/Header";
import Films from "./Film";

import "./FilmGuide.scss";
import MyTabsComponent from "../../components/tabsComponent/TabsComponent";

function FilmGuide() {
  return (
    <div className="container">
      <Header />
      <MyTabsComponent />
      <Films />
    </div>
  );
}

export default FilmGuide;
