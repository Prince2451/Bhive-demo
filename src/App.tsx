import "@mantine/core/styles.css";
import "./theme/global.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import Layout from "./containers/Layout";
import HomePage from "./pages/Homepage";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Layout>
        <HomePage />
      </Layout>
    </MantineProvider>
  );
}
