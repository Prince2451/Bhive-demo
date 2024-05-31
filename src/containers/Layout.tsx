import {
  ActionIcon,
  AppShell,
  Container,
  Group,
  Image,
  rem,
} from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { MdCall } from "react-icons/md";
import logo from "../assets/images/logo.svg";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <AppShell header={{ height: rem(90) }}>
      <AppShell.Header withBorder={false}>
        <Container size="100rem" h="100%">
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
      </AppShell.Header>

      <AppShell.Main>
        <Container h="100%" p={0}>
          {props.children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default Layout;
