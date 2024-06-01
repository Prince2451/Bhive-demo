import "@mantine/core/styles.css";
import "./theme/global.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Layout from "./containers/Layout";
import HomePage from "./pages/Homepage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <QueryClientProvider client={new QueryClient()}>
        <Layout>
          <HomePage />
        </Layout>
      </QueryClientProvider>
    </MantineProvider>
  );
}
