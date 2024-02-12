import React, { useState } from "react";
import { Tabs, Tab, Box, useTheme, useMediaQuery } from "@mui/material";
import PersonalDetails from "../forms/PersonalDetails";
import Experience from "../forms/Experience";
import Education from "../forms/Education";
import Skills from "../forms/Skills";

const VerticalTabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const theme = useTheme();
  const lightGray = theme.palette.neutral.light;

  const isMobileScreen = useMediaQuery("(max-width:600px)");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box
      display="flex"
      flexDirection={isMobileScreen ? "column" : "row"}
      justifyContent="space-between"
      gap={isMobileScreen ? "1rem" : "4rem"}
    >
      <Box
        width={isMobileScreen ? "100%" : "20%"}
        minWidth="250px"
        maxHeight="200px"
        backgroundColor={theme.palette.background.alt}
      >
        <Tabs
          width="100%"
          orientation={isMobileScreen ? "horizontal" : "vertical"}
          variant="scrollable"
          value={activeTab}
          onChange={handleTabChange}
          sx={{
            borderRadius: "5px",
          }}
        >
          <Tab
            sx={{
              borderBottom: `1px solid ${lightGray}`,
            }}
            label="Personal Info"
          />
          <Tab
            sx={{
              borderBottom: `1px solid ${lightGray}`,
            }}
            label="Work Experience"
          />
          <Tab
            sx={{
              borderBottom: `1px solid ${lightGray}`,
            }}
            label="Education"
          />
          <Tab
            sx={{
              borderBottom: `1px solid ${lightGray}`,
            }}
            label="Skills"
          />
        </Tabs>
      </Box>

      <Box width="100%">
        {/* Rendering Forms based on the active tab */}
        {activeTab === 0 && <PersonalDetails />}
        {activeTab === 1 && <Experience />}
        {activeTab === 2 && <Education />}
        {activeTab === 3 && <Skills />}
      </Box>
    </Box>
  );
};

export default VerticalTabs;
