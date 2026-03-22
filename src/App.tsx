import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Router } from './Router';
import { theme } from './theme';
import { Footer } from './components/Footer/Footer';
import { Navbar } from './components/Navbar/Navbar';

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Navbar></Navbar>

      <Router />
      <Footer></Footer>

    </MantineProvider>
  );
}
