import { Box } from '@mui/material';
import { Footer, Header } from '../common';

export function MainLayout({ children }) {
	return (
		<>
			<Header />
			<Box component="main">{children}</Box>
			<Footer />
		</>
	);
}
