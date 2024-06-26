"use client";
import { Shadows, createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin"],
	display: "swap",
});

const theme = createTheme({
	palette: {
		primary: {
			main: "#76C4EB",
		},
		secondary: {
			main: "#B0B0B0",
		},
		background: {
			default: "#eff2f6",
		},
		grey: {
			300: "#E1E1E1",
		},
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
	shadows: [
		"none",
		"0px 0px 0px 0px rgba(0, 0, 0, 0)",
		"0px 2px 2px 0px rgba(0, 0, 0, 0.1)",
		...Array(23).fill("0px 3px 20px 0px rgba(0, 0, 0, 0.1)"),
	] as Shadows,
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ theme }) => ({
					"&.MuiButton-containedPrimary:hover": {
						backgroundColor: theme.palette.primary.main,
					},
				}),
				containedPrimary: {
					color: "white",
					boxShadow: "none",
					textTransform: "none",
					fontSize: 14,
				},
			},
		},
	},
});

export default theme;
