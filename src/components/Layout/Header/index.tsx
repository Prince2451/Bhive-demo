import { ActionIcon, Container, Group, Image, rem } from "@mantine/core";
import React from "react";
import { MdCall } from "react-icons/md";
import logo from "../../../assets/images/logo.svg";


const Header: React.FC = () => {
  return (
    <Container h="100%">
      <Group justify="space-between" h="100%" align="center">
        <Image h={rem(40)} w="auto" fit="contain" src={logo} />
        <ActionIcon
          component="a"
          href="tel:+919876543210"
          aria-label="Call us"
          variant="outline"
          size="xl"
        >
          <MdCall fontSize="1.5rem" />
        </ActionIcon>
      </Group>
    </Container>
  );
};

export default Header;
