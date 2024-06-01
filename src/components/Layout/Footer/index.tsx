import { Center, Paper, Text } from "@mantine/core";
import React from "react";
import classes from "./Footer.module.css"

const Footer: React.FC = () => {
  return (
    <Paper
      radius={0}
      h="100%"
      py="sm"
      shadow="none"
      withBorder={false}
      className={classes.footer}
    >
      <Center h="100%">
        <Text c="gray.3" fz="sm" lh={1.5}>
          © Copyright 2024. Bhive Private Limited
        </Text>
      </Center>
    </Paper>
  );
};

export default Footer;
