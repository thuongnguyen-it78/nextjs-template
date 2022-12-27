import { Footer, Header } from '../common';

export function MainLayout({ children }) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<Footer />
		</>
	);
}
