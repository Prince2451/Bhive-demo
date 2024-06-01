import { Box, rem } from "@mantine/core";

import React from "react";
import HeroHeader from "../../components/Homepage/HeroHeader";
import Amenities from "../../components/Homepage/Amenities";
import SpaceOverview from "../../components/Homepage/SpaceOverview";
const HomePage: React.FC = () => {
  return (
    <Box px="md">
      <HeroHeader />
      <Box mt={rem(36)}>
        <Amenities />
      </Box>
      <Box mt={rem(120)}>
        <SpaceOverview />
      </Box>
    </Box>
  );
};

export default HomePage;
