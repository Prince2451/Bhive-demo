import { Box, Title } from "@mantine/core";

import React from "react";
import HeroHeader from "../../components/Homepage/HeroHeader";
const HomePage: React.FC = () => {
  return (
    <Box px="md">
      <HeroHeader />
      <Title order={2}>Why Choose us?</Title>
    </Box>
  );
};

export default HomePage;
