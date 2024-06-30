"use client";
import { MainHeader } from "@/components/organisms";
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
			{/* <Footer /> */}
		</>
	);
}

const mainContentSx: SxProps<Theme> = {
	minHeight: "calc(100vh - 100px)",
	backgroundColor: (theme) => theme.palette.background.default,
};
