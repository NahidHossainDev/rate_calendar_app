import { AppBar, Container, Typography } from "@mui/material";
import { FC } from "react";

export const MainHeader: FC = () => {
	return (
		<AppBar elevation={0}>
			<Container maxWidth={false}>
				<Typography>Rate Calendar App</Typography>
			</Container>
		</AppBar>
	);
};
