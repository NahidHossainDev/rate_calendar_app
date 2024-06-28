import { SingleInputDateRangePicker } from "@/components/molecules";
import { Paper, Stack, Typography } from "@mui/material";

export default function Home() {
	return (
		<Stack spacing={2} p={2}>
			<Paper sx={{ p: 3, borderRadius: 2 }}>
				<Typography variant="h6" fontWeight={600}>
					Rate Calendar App
				</Typography>
				<SingleInputDateRangePicker />
			</Paper>

			<Paper>Button</Paper>
		</Stack>
	);
}

