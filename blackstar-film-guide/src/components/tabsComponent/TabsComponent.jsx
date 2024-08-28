import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./TabsComponent.css";
import FilmGuide from "../../pages/FilmGuide/FilmGuide";
import { backgroundColors } from "../../utils/utils";

function TabsComponent() {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="tab-container">
      <Tabs
        selectedIndex={activeIndex}
        onSelect={(index) => setActiveIndex(index)}
      >
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
        <TabPanel>
          <div></div>
        </TabPanel>
        <TabPanel>
          <div>
            <FilmGuide />
          </div>
        </TabPanel>
        <TabPanel>
          <div>Content for the Third Tab</div>
        </TabPanel>
        <TabPanel>
          <div>Content for the Fourth Tab</div>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default TabsComponent;
