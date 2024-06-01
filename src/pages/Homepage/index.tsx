import { Box } from "@mantine/core";
import React from "react";
import Amenities from "../../components/Homepage/Amenities";
import AppDownload from "../../components/Homepage/AppDownload";
import HeroHeader from "../../components/Homepage/HeroHeader";
import SpaceOverview from "../../components/Homepage/SpaceOverview";
import classes from "./Homepage.module.css";

const HomePage: React.FC = () => {
  return (
    <Box px="md">
      <HeroHeader />
      <Box className={classes.amenities}>
        <Amenities />
      </Box>
      <Box className={classes.spaceOverview}>
        <SpaceOverview />
      </Box>
      <Box className={classes.appDownload}>
        <AppDownload />
      </Box>
    </Box>
  );
};

export default HomePage;
