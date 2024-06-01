import { Box, Grid, Title, rem } from "@mantine/core";
import React from "react";
import PropertyCard from "./PropertyCard";

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
      <Title order={2}>Our Space Overview</Title>
      <Grid gutter="xl" mt={rem(40)}>
        {items.map((item, i) => (
          <Grid.Col
            key={i}
            span={{
              lg: 4,
              md: 6,
              sm: 12,
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
