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
import classes from "./Amenities.module.css";

const Amenities: React.FC = () => {
  const items = [
    {
      url: comEvents,
      label: "Community Events",
    },
    {
      url: gym,
      label: "Gym Facilities",
    },
    {
      url: wifi,
      label: "High-Speed WiFi",
    },
    {
      url: cafe,
      label: "Cafe & Tea Bar",
    },
    {
      url: affordable,
      label: "Affordable",
    },
    {
      url: lounges,
      label: "Comfort Lounges",
    },
    {
      url: quickBookings,
      label: "Quick Booking",
    },
    {
      url: sports,
      label: "Sports Area",
    },
  ];

  return (
    <Box>
      <Title order={2}>Why Choose us?</Title>
      <Grid mt={rem(40)}>
        {items.map((item, i) => (
          <Grid.Col
            span={{
              sm: 6,
              lg: 3,
              md: 4,
            }}
            key={i}
          >
            <Paper className={classes.cardContainer} px="md">
              <Group wrap="nowrap" h={rem(80)}>
                <Image
                  src={item.url}
                  alt={item.label}
                  className={classes.icon}
                />
                <Text fw={500} size="lg">
                  {item.label}
                </Text>
              </Group>
            </Paper>
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default Amenities;
