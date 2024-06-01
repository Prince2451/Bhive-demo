import "@mantine/core";
import {
  ButtonVariant,
  ButtonFactory as DefaultButtonFactory,
  TextFactory as DefaultTextFactory,
  TextVariant,
} from "@mantine/core";

type ExtendedButtonVariant = ButtonVariant | "primary" | "secondary";
type ExtendedTextVariant = TextVariant | "primary" | "secondary";
declare module "@mantine/core" {
  type ButtonFactory = DefaultButtonFactory & {
    variant: ExtendedButtonVariant;
  };

  type TextFactory = DefaultTextFactory & {
    variant: ExtendedTextVariant;
  };
}
