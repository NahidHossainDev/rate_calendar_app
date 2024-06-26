"use client";
import { Footer, MainHeader } from "@/components/organisms";
import { Box, SxProps, Theme } from "@mui/material";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<>
			<MainHeader />
			<Box sx={mainContentSx}>{children}</Box>
			<Footer />
		</>
	);
}

const mainContentSx: SxProps<Theme> = {
	minHeight: "100vh",
	backgroundColor: (theme) => theme.palette.background.default,
};
