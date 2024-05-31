import {
  AppShell,
  Container,
  Text,
  Title,
  createTheme,
  rem,
} from "@mantine/core";
import classes from "./theme.module.css";

export const theme = createTheme({
  /* Put your mantine theme override here */
  fontFamily: "Inter, sans-serif",
  components: {
    Container: Container.extend({
      defaultProps: {
        size: rem(1600),
      },
    }),
    Text: Text.extend({
      classNames: { root: classes.text },
      defaultProps: {
        variant: "primary",
      },
    }),
    Title: Title.extend({
      classNames: { root: classes.text },
      defaultProps: {
        variant: "primary",
      },
    }),
    AppShell: AppShell.extend({ classNames: { root: classes.appShell } }),
  },
  colors: {
    yellow: [
      "#fffae0",
      "#fff2ca",
      "#ffe499",
      "#ffd662",
      "#ffc936",
      "#ffc118",
      "#ffbd02",
      "#e4a600",
      "#ca9400",
      "#af7e00",
    ],
  },
  cursorType: "pointer",
  headings: {
    fontFamily: "Inter, sans-serif",
    sizes: {
      h1: { fontSize: rem(58), lineHeight: "1.1em" },
      h2: { fontSize: rem(36), lineHeight: "1.1em" },
      h3: { fontSize: rem(24), lineHeight: "1.1em" },
      h4: { fontSize: rem(20), lineHeight: "1.1em" },
      h5: { fontSize: rem(18), lineHeight: "1.1em" },
      h6: { fontSize: rem(16), lineHeight: "1.1em" },
    },
  },
  primaryShade: 4,
  primaryColor: "yellow",
});
