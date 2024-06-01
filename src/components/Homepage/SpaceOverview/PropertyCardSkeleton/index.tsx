import { Card, Group, Skeleton, rem } from "@mantine/core";
import React from "react";

const PropertyCardSkeleton: React.FC = () => {
  return (
    <Card shadow="sm" withBorder padding="md">
      <Card.Section inheritPadding py="md">
        <Skeleton h={rem(40)} w="100%" radius="md" />
      </Card.Section>
      <Card.Section inheritPadding>
        <Skeleton h={rem(200)} w="100%" radius="md" />
      </Card.Section>
      <Card.Section inheritPadding py="md">
        <Group wrap="nowrap" grow>
          <Skeleton h={rem(40)} radius="md" />
          <Skeleton h={rem(40)} radius="md" />
        </Group>
      </Card.Section>
    </Card>
  );
};

export default PropertyCardSkeleton;
