import { Footer, MainHeader } from "@/components/organisms";
import { Box, SxProps, Theme } from "@mui/material";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<MainHeader />
			<Box
				sx={{
					...layoutSX,
					backgroundColor: (theme) =>
						theme.palette.background.default,
				}}
			>
				{children}
			</Box>
			<Footer />
		</>
	);
}

const layoutSX: SxProps<Theme> = {
	height: "100vh",
};
