"use client";
import { CustomCard } from "@/components/molecules";
import { Filter } from "@/components/organisms";
import { useRoomCalender } from "@/libs/queries";
import { Stack } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function Home() {
	const searchQuery = useSearchParams();
	const { data } = useRoomCalender(searchQuery);

	console.log(data);

	return (
		<Stack spacing={2} p={2}>
			<CustomCard>
				<Filter />
			</CustomCard>

			<CustomCard></CustomCard>
		</Stack>
	);
}

