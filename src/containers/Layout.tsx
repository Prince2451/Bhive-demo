import {
  ActionIcon,
  AppShell,
  Center,
  Container,
  Group,
  Image,
  Paper,
  Text,
  rem,
} from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { MdCall } from "react-icons/md";
import logo from "../assets/images/logo.svg";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <AppShell
      header={{ height: rem(90) }}
      footer={{
        height: "auto",
      }}
    >
      <AppShell.Header withBorder={false}>
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
      </AppShell.Header>

      <AppShell.Main>
        <Container h="100%" p={0}>
          {props.children}
        </Container>
      </AppShell.Main>
      <AppShell.Footer pos="static" mt="xl">
        {/* Todo */}
        <Paper
          bg="#222E34"
          radius={0}
          h="100%"
          py="sm"
          shadow="none"
          withBorder={false}
        >
          <Center h="100%">
            <Text c="gray.3" fz="sm" lh={1.5}>
              © Copyright 2024. Bhive Private Limited
            </Text>
          </Center>
        </Paper>
      </AppShell.Footer>
    </AppShell>
  );
};

export default Layout;
