import {
  Badge,
  Box,
  Button,
  Card,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  rem,
  useMantineTheme,
} from "@mantine/core";
import React from "react";
import direction from "../../../../assets/images/assistant_direction.svg";
import nextArrow from "../../../../assets/images/next_arrow.svg";
import classes from "./PropertyCard.module.css";

interface PropertyCardProps {
  name: string;
  distance?: string;
  url: string;
  dayPrice: number;
  bulkPrice: number;
  bulkDuration: string;
  discountText?: string;
  amenities?: {
    icon: React.ReactNode;
    label: string;
  } | null;
}

const PropertyCard: React.FC<PropertyCardProps> = (props) => {
  const theme = useMantineTheme();
  return (
    <Card withBorder shadow={theme.shadows.sm} padding="sm" radius="md">
      <Card.Section inheritPadding py="sm">
        <Group justify="space-between" wrap="nowrap" align="center">
          <Title fw={600} order={4} lh={1.3}>
            {props.name}
          </Title>
          <Paper
            withBorder
            shadow="none"
            w={rem(52)}
            h={rem(52)}
            py={rem(8)}
            className={classes.paper}
            radius="md"
          >
            <Stack gap={rem(8)} align="center">
              <Image src={direction} alt="direction" w={rem(18)} h={rem(18)} />
              <Text fw={500} size={rem(8)} opacity={0.5}>
                {props.distance || "6 Kms"}
              </Text>
            </Stack>
          </Paper>
        </Group>
      </Card.Section>
      <Card.Section inheritPadding>
        <Box pos="relative">
          <Image
            src={props.url}
            alt="place-image"
            h={rem(200)}
            fit="cover"
            radius="md"
          />
          {props.amenities && (
            <Box pos="absolute" top={rem(8)} left={rem(8)} right={0}>
              <Badge
                radius="sm"
                size="xl"
                variant="gradient"
                className={classes.badge}
                leftSection={props.amenities.icon}
                px={rem(8)}
                fw={500}
                fz="sm"
                maw="100%"
              >
                {props.amenities.label}
              </Badge>
            </Box>
          )}
        </Box>
      </Card.Section>
      <Card.Section inheritPadding pt="lg" pb="sm">
        <Group className={classes.btnGroup}>
          <Button
            variant="secondary"
            h={rem(66)}
            px={"xs"}
            justify="space-between"
            classNames={{
              label: classes.buttonLabel,
              root: classes.button,
            }}
            radius={rem(6)}
            fullWidth
          >
            <Stack gap={rem(4)} align="flex-start" py={rem(8)}>
              <Text variant="secondary" fw={500} size="sm">
                Day Pass
              </Text>

              <Text size="lg" fw={600}>
                ₹ {props.dayPrice}
                <Text span size="xs">
                  / Day
                </Text>
              </Text>
            </Stack>
            <Image
              className={classes.nextArrow}
              src={nextArrow}
              w={rem(32)}
              alt="next-arrow"
              fit="contain"
              height="auto"
            />
          </Button>

          <Button
            variant="primary"
            h={rem(66)}
            px={"xs"}
            justify="space-between"
            classNames={{
              label: classes.buttonLabel,
              root: classes.button,
            }}
            radius={rem(6)}
            pos="relative"
            fullWidth
          >
            <Stack gap={rem(4)} align="flex-start" py={rem(8)}>
              <Text className={classes.bulkBtnTitle} fw={500} size="sm">
                Bulk Pass
              </Text>
              <Text size="lg" fw={600} truncate>
                ₹ {props.bulkPrice}
                <Text span size="xs">
                  / {props.bulkDuration}
                </Text>
              </Text>
            </Stack>
            <Image
              className={classes.nextArrow}
              src={nextArrow}
              w={rem(32)}
              alt="next-arrow"
              fit="contain"
              height="auto"
            />
            {!!props.discountText && (
              <Paper
                bg="dark.8"
                className={classes.discountBanner}
                py={rem(4)}
                px={rem(8)}
              >
                <Text c="white" fw={500} size={rem(8)}>
                  {props.discountText}
                </Text>
              </Paper>
            )}
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
};

export default PropertyCard;
