import {
  Box,
  Grid,
  Group,
  Image,
  Paper,
  Text,
  Title,
  rem,
} from "@mantine/core";
import React from "react";
import affordable from "../../../assets/images/affordable.svg";
import cafe from "../../../assets/images/cafe.svg";
import comEvents from "../../../assets/images/com_events.svg";
import gym from "../../../assets/images/gym.svg";
import lounges from "../../../assets/images/lounges.svg";
import quickBookings from "../../../assets/images/quick_booking.svg";
import sports from "../../../assets/images/sports.svg";
import wifi from "../../../assets/images/wifi.svg";
import arrow from "../../../assets/images/arrow.svg";
import classes from "./Amenities.module.css";

const Amenities: React.FC = () => {
  const items = [
    {
      url: comEvents,
      label: "Community Events",
      secondaryText: "One liner details about the feature",
    },
    {
      url: gym,
      label: "Gym Facilities",
      secondaryText: "One liner details about the feature",
    },
    {
      url: wifi,
      label: "High-Speed WiFi",
      secondaryText: "One liner details about the feature",
    },
    {
      url: cafe,
      label: "Cafe & Tea Bar",
      secondaryText: "One liner details about the feature",
    },
    {
      url: affordable,
      label: "Affordable",
      secondaryText: "One liner details about the feature",
    },
    {
      url: lounges,
      label: "Comfort Lounges",
      secondaryText: "One liner details about the feature",
    },
    {
      url: quickBookings,
      label: "Quick Booking",
      secondaryText: "One liner details about the feature",
    },
    {
      url: sports,
      label: "Sports Area",
      secondaryText: "One liner details about the feature",
    },
  ];

  return (
    <Box>
      <Group justify="space-between">
        <Title className={classes.heading}>Why Choose us?</Title>
        <Image
          hiddenFrom="sm"
          src={arrow}
          w={rem(24)}
          h="auto"
          fit="contain"
          alt="arrow"
        />
      </Group>
      <Grid mt={rem(40)}>
        {items.map((item, i) => (
          <Grid.Col
            span={{
              base: 6,
              lg: 3,
              md: 4,
            }}
            key={i}
          >
            <Paper className={classes.cardContainer} px="md" radius="md">
              <Group className={classes.cardGroup} h="100%">
                <Image
                  src={item.url}
                  alt={item.label}
                  className={classes.icon}
                />
                <Box>
                  <Text className={classes.primaryText}>{item.label}</Text>
                  <Text
                    className={classes.secondaryText}
                    fw={400}
                    variant="secondary"
                    size="xs"
                  >
                    {item.secondaryText}
                  </Text>
                </Box>
              </Group>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default Amenities;
