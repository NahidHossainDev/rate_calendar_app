"use client";
import { CustomCard } from "@/components/molecules";
import { Filter, RoomTableData } from "@/components/organisms";
import { Stack } from "@mui/material";
import { Suspense } from "react";

export default function Home() {
	return (
		<Stack spacing={2} p={2}>
			<Suspense>
				<CustomCard>
					<Filter />
				</CustomCard>

				<CustomCard>
					<RoomTableData />
				</CustomCard>
			</Suspense>
		</Stack>
	);
}

