/* next, react */
import type { AppProps } from 'next/app';
import { useState } from 'react';

/* components */
import { Header } from '@/components/Header';

/* lib */
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

/* style */
import { GlobalStyle } from '../globalStyle';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        <Header />
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default MyApp;
