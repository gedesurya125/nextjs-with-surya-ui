import 'styles/globals.css';

import { ThemeProvider } from '@gedesurya125/surya-ui';

import { theme } from 'theme';

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
