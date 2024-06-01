import { AppShell, Container, rem } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";

const Layout: React.FC<PropsWithChildren> = (props) => {
  return (
    <AppShell
      header={{ height: rem(90) }}
      footer={{
        height: "auto",
      }}
    >
      <AppShell.Header withBorder={false}>
        <Header />
      </AppShell.Header>

      <AppShell.Main style={{ overflowX: "hidden" }}>
        <Container h="100%" p={0}>
          {props.children}
        </Container>
      </AppShell.Main>
      <AppShell.Footer pos="static" mt="xl">
        <Footer />
      </AppShell.Footer>
    </AppShell>
  );
};

export default Layout;
