"use client";
import { CustomCard } from "@/components/molecules";
import { Filter, RoomTableData } from "@/components/organisms";
import { Stack } from "@mui/material";

export default function Home() {
	return (
		<Stack spacing={2} p={2}>
			<CustomCard>
				<Filter />
			</CustomCard>

			<CustomCard>
				<RoomTableData />
			</CustomCard>
		</Stack>
	);
}

