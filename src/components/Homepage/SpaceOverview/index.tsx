import { Box, Grid, Group, Image, Title, rem } from "@mantine/core";
import React from "react";
import PropertyCard from "./PropertyCard";
import arrow from "../../../assets/images/arrow.svg";
import classes from "./SpaceOverview.module.css";

const SpaceOverview: React.FC = () => {
  const items = [
    {
      name: "HSR Sector -6, 5th main Road",
      bulkPrice: 2450,
      bulkDuration: "10 Days",
      dayPrice: 245,
      distance: "6 Kms",
      url: "",
    },
    {
      name: "HSR Sector -6, 5th main Road",
      bulkPrice: 2450,
      bulkDuration: "10 Days",
      dayPrice: 245,
      distance: "6 Kms",
      url: "",
    },
    {
      name: "HSR Sector -6, 5th main Road",
      bulkPrice: 2450,
      bulkDuration: "10 Days",
      dayPrice: 245,
      distance: "6 Kms",
      url: "",
    },
    {
      name: "HSR Sector -6, 5th main Road",
      bulkPrice: 2450,
      bulkDuration: "10 Days",
      dayPrice: 245,
      distance: "6 Kms",
      url: "",
    },
    {
      name: "HSR Sector -6, 5th main Road",
      bulkPrice: 2450,
      bulkDuration: "10 Days",
      dayPrice: 245,
      distance: "6 Kms",
      url: "",
      discountText: "20% Discount",
    },
  ];

  return (
    <Box>
      <Group justify="space-between">
        <Title className={classes.heading}>Our Space Overview</Title>
        <Image
          hiddenFrom="sm"
          src={arrow}
          w={rem(24)}
          h="auto"
          fit="contain"
          alt="arrow"
        />
      </Group>
      <Grid gutter="xl" mt={rem(40)}>
        {items.map((item, i) => (
          <Grid.Col
            key={i}
            span={{
              lg: 4,
              sm: 6,
              base: 12,
            }}
          >
            <PropertyCard {...item} />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

export default SpaceOverview;
