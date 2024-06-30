import { AppBar, Container, Typography } from "@mui/material";
import { FC } from "react";

export const MainHeader: FC = () => {
	return (
		<AppBar sx={{ py: 2, position: "static" }}>
			<Container maxWidth={false}>
				<Typography variant="h6" color="white" fontWeight={500} textAlign={"center"}>
					Rate Calendar App
				</Typography>
			</Container>
		</AppBar>
	);
};
