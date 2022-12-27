import { MainLayout } from '@/components/layout';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Head from 'next/head';
import '../styles/globals.css';
import ThemeConfig from '../theme';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createCache({ key: 'css', prepend: true });

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: false,
		},
	},
});

export default function App(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const Layout = Component.Layout || MainLayout;

	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name="viewport" content="initial-scale=1, width=device-width" />
			</Head>
			<ThemeConfig>



				
				<QueryClientProvider client={queryClient}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</ThemeConfig>
		</CacheProvider>
	);
}
