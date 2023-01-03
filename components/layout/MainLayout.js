import { Box } from '@mui/material';
import Footer from './Footer';
import Header from './Header';

export function MainLayout({ children }) {
	return (
		<>
			<Header />
			<Box component="main">{children}</Box>
			<Footer />
		</>
	);
}
