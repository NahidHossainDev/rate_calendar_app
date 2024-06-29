import { Paper, PaperProps } from "@mui/material";
import { FC } from "react";

export const CustomCard: FC<PaperProps> = ({ children }) => {
	return <Paper sx={{ p: 3, borderRadius: 2 }}>{children}</Paper>;
};
