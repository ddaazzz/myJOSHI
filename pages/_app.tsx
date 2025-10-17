

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  DynamicContextProvider,
  DynamicWidget,
} from '@dynamic-labs/sdk-react-core';
import { SolanaWalletConnectors } from '@dynamic-labs/solana';
import NavBar from '../components/NavBar';

config.autoAddCss = false;
library.add(fab);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DynamicContextProvider
      settings={{
        environmentId: 'b6555669-5bd5-43e3-a960-664f88e4082f',
        walletConnectors: [SolanaWalletConnectors],
      }}
    >
      <NavBar />
      <Component {...pageProps} />
    </DynamicContextProvider>
  );
}

export default MyApp;
