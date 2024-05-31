import { Box, Flex, Image, Text, Title, rem } from "@mantine/core";
import React from "react";
import cowoBg from "../../../assets/images/cowo_bg.svg";
import coworker from "../../../assets/images/coworker.svg";
import heroBg from "../../../assets/images/hero_bg.svg";
import heroHex from "../../../assets/images/hero_hex.svg";
import classes from "./HeroHeader.module.css";

const HeroHeader: React.FC = () => {
  return (
    <Flex h={rem(500)} justify="center">
      <Box className={classes.heroBg} pos="relative">
        <Image
          src={heroBg}
          pos="absolute"
          bottom={0}
          right={0}
          width="150%"
          h="100%"
        />
        <Image
          src={heroHex}
          pos="absolute"
          top="-12%"
          left="30%"
          h={rem(180)}
          w={rem(150)}
        />
        <Flex className={classes.heroText} align="center" h="100%" w="100%">
          <Title order={1}>
            Host your meeting with <br />
            world-class amenities. <br />
            Starting at{" "}
            <Text span c="yellow" inherit inline>
              ₹199/-!
            </Text>
          </Title>
        </Flex>
      </Box>

      <Box pos="relative" h="100%" w={rem(550)} className={classes.coworker}>
        <Image
          src={cowoBg}
          pos="absolute"
          h="130%"
          w="100%"
          bottom={0}
          left="13%"
        />
        <Image src={coworker} />
      </Box>
    </Flex>
  );
};

export default HeroHeader;
