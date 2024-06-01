import {
  Anchor,
  Box,
  Group,
  Image,
  Paper,
  Stack,
  Text,
  Title,
  rem,
} from "@mantine/core";
import React from "react";
import download from "../../../assets/images/app_download.png";
import appStore from "../../../assets/images/app_store.svg";
import playStore from "../../../assets/images/play_store.svg";

const AppDownload: React.FC = () => {
  return (
    <Box>
      <Title order={2}>Download our app now</Title>
      <Paper withBorder mt={rem(180)} pos="relative" radius="lg" shadow="sm" p="md">
        <Image
          src={download}
          alt="download-app"
          w={rem(450)}
          h={rem(400)}
          pos="absolute"
          fit="contain"
          bottom={0}
          left={0}
        />
        <Stack
          w="50%"
          ml="auto"
          justify="center"
          align="flex-start"
          h="100%"
          mih={rem(250)}
        >
          <Text fw={500} fz="h4" c="dark.3">
            Boost your productivity with the BHIVE Workspace app. Elevate your
            workspace, collaborate efficiently, and unlock exclusive perks.
          </Text>
          <Group wrap="nowrap" mt="lg">
            <Anchor target="_blank" href="#" rel="noopener">
              <Image
                src={playStore}
                h={rem(45)}
                w="auto"
                fit="contain"
                alt="play_store"
              />
            </Anchor>
            <Anchor target="_blank" href="#" rel="noopener">
              <Image
                src={appStore}
                h={rem(45)}
                w="auto"
                fit="contain"
                alt="app_store"
              />
            </Anchor>
          </Group>
        </Stack>
      </Paper>
    </Box>
  );
};

export default AppDownload;
