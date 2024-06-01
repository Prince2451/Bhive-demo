import {
  Box,
  Flex,
  Image,
  Text,
  Title,
  rem,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import cowoBg from "../../../assets/images/cowo_bg.svg";
import coworker from "../../../assets/images/coworker.png";
import heroBg from "../../../assets/images/hero_bg.svg";
import heroHex from "../../../assets/images/hero_hex.svg";
import classes from "./HeroHeader.module.css";

const HeroHeader: React.FC = () => {
  const theme = useMantineTheme();
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
          top="-22%"
          left="22.5%"
          h={rem(170)}
          w={rem(110)}
          visibleFrom="lg"
        />
        <Flex
          className={classes.heroText}
          align="flex-start"
          mt={rem(80)}
          h="100%"
          w="100%"
        >
          <Title order={1} lh={1.25}>
            Host your meeting with <br />
            world-class amenities. <br />
            Starting at{" "}
            <Text span c={theme.colors[theme.primaryColor][5]} inherit inline>
              ₹199/-!
            </Text>
          </Title>
        </Flex>
      </Box>

      <Box pos="relative" h="100%" w={rem(400)} className={classes.coworker}>
        <Image
          src={cowoBg}
          pos="absolute"
          h="130%"
          w="100%"
          bottom={0}
          left="13%"
        />
        <Image
          src={coworker}
          pos="relative"
          alt="coworker"
          mt="xl"
          className={classes.coworker}
        />
      </Box>
    </Flex>
  );
};

export default HeroHeader;
