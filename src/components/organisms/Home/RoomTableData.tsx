import { useRoomCalender } from "@/libs/queries";
import {
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { FC } from "react";

import { styled } from "@mui/system";

export const RoomTableData: FC = () => {
	const StickyTableCell = styled(TableCell)({
		position: "sticky",
		left: 0,
		background: "#fff",
		zIndex: 1,
	});

	const searchQuery = useSearchParams();
	const { data } = useRoomCalender(searchQuery);

	const dates = data?.data[0].inventory_calendar.map((cal) => cal.date);

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<StickyTableCell>Room Name</StickyTableCell>
						{dates?.map((date, index) => (
							<TableCell key={index}>{date}</TableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data?.data?.map((room, roomIndex) => (
						<React.Fragment key={roomIndex}>
							<TableRow>
								<StickyTableCell rowSpan={4}>{room.name}</StickyTableCell>
								<TableCell>Status</TableCell>
								{room.inventory_calendar?.map((cal, calIndex) => (
									<TableCell key={calIndex}>
										{cal.status ? "Sellable" : "Not Sellable"}
									</TableCell>
								))}
							</TableRow>
							<TableRow>
								<TableCell>Rooms to Sell</TableCell>
								{room.inventory_calendar.map((cal, calIndex) => (
									<TableCell key={calIndex}>{cal.available}</TableCell>
								))}
							</TableRow>
							<TableRow>
								<TableCell>Net Booked</TableCell>
								{room.inventory_calendar.map((cal, calIndex) => (
									<TableCell key={calIndex}>{cal.booked}</TableCell>
								))}
							</TableRow>
							{room.rate_plans.map((ratePlan, ratePlanIndex) => (
								<React.Fragment key={ratePlanIndex}>
									<TableRow>
										<StickyTableCell rowSpan={4}>
											{ratePlan.name}
										</StickyTableCell>
										<TableCell>Occupancy</TableCell>
										{Array(dates?.length)
											.fill(room.occupancy)
											.map((occupancy, index) => (
												<TableCell key={index}>{occupancy}</TableCell>
											))}
									</TableRow>
									<TableRow>
										<TableCell>Rate</TableCell>
										{ratePlan?.calendar?.map((rateCal, rateCalIndex) => (
											<TableCell key={rateCalIndex}>{rateCal.rate}</TableCell>
										))}
									</TableRow>
									<TableRow>
										<TableCell>Min Length of Stay</TableCell>
										{ratePlan.calendar.map((rateCal, rateCalIndex) => (
											<TableCell key={rateCalIndex}>
												{rateCal.min_length_of_stay}
											</TableCell>
										))}
									</TableRow>
									<TableRow>
										<TableCell>Reservation Deadline</TableCell>
										{ratePlan.calendar.map((rateCal, rateCalIndex) => (
											<TableCell key={rateCalIndex}>
												{rateCal.reservation_deadline}
											</TableCell>
										))}
									</TableRow>
								</React.Fragment>
							))}
						</React.Fragment>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};
