import { Box, Grid, Group, Image, Title, rem } from "@mantine/core";
import React from "react";
import PropertyCard from "./PropertyCard";
import arrow from "../../../assets/images/arrow.svg";
import classes from "./SpaceOverview.module.css";
import { SpaceArea } from "../../../types/homepage";
import PropertyCardSkeleton from "./PropertyCardSkeleton";
import platinum from "../../../assets/images/Platinum.svg";

interface SpaceOverviewProps {
  items: Array<SpaceArea>;
  isLoading: boolean;
}

const SpaceOverview: React.FC<SpaceOverviewProps> = ({ items, isLoading }) => {
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
        {isLoading
          ? Array(3)
              .fill("")
              .map((_, i) => (
                <Grid.Col
                  key={i}
                  span={{
                    md: 4,
                    sm: 6,
                    base: 12,
                  }}
                >
                  <PropertyCardSkeleton />
                </Grid.Col>
              ))
          : items.map((item, i) => (
              <Grid.Col
                key={i}
                span={{
                  lg: 4,
                  sm: 6,
                  base: 12,
                }}
              >
                <PropertyCard
                  {...item}
                  amenities={
                    item.amenities.length
                      ? {
                          icon: (
                            <Image
                              h={rem(20)}
                              w={"auto"}
                              fit="contain"
                              src={platinum}
                              alt="feature"
                            />
                          ),
                          label: item.amenities[0],
                        }
                      : null
                  }
                  bulkDuration={item.bulkPassDuration}
                  bulkPrice={item.bulkPassPrice}
                  dayPrice={item.dayPassPrice}
                  url={item.defaultImageUrl}
                />
              </Grid.Col>
            ))}
      </Grid>
    </Box>
  );
};

export default SpaceOverview;
