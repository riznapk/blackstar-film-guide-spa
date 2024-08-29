import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./TabsComponent.scss";
import FilmGuide from "../../pages/FilmGuide/FilmGuide";
import { backgroundColors } from "../../utils/utils";
import { useMediaQuery } from "react-responsive";
import UnderConstruction from "../underConstruction/underConstruction";
function TabsComponent() {
  const [activeIndex, setActiveIndex] = useState(1);

  //for desktop view only
  const isDesktop = useMediaQuery({ minWidth: 768 });

  // Handle tab change
  const handleTabChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="tab-container">
      <Tabs selectedIndex={activeIndex} onSelect={handleTabChange}>
        {isDesktop && (
          <TabList>
            <Tab>Schedule</Tab>
            <Tab
              style={{
                backgroundColor:
                  activeIndex === 1 ? backgroundColors[1] : "#f0f0f0",
              }}
            >
              Film Guide
            </Tab>
            <Tab>Event Guide</Tab>
            <Tab>My Schedule</Tab>
          </TabList>
        )}
        <TabPanel>
          <div>
            <UnderConstruction />
          </div>
        </TabPanel>
        <TabPanel>
          <div
            style={{
              backgroundColor:
                activeIndex === 1 ? "backgroundColors[1]" : "#ffffff",
            }}
          >
            <FilmGuide />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <UnderConstruction />
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <UnderConstruction />
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabsComponent;
