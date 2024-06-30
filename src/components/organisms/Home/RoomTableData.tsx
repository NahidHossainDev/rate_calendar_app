import { useRoomCalender } from "@/libs/queries";
import {
	Box,
	Button,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { FC } from "react";

import { styled } from "@mui/system";
import dayjs from "dayjs";

export const RoomTableData: FC = () => {
	const StickyTableCell = styled(TableCell)({
		position: "sticky",
		left: 0,
		background: "white",
		textAlign: "left",
		zIndex: 3,
		borderRight: "1px solid rgba(224, 224, 224, 1) ",
		whiteSpace: "nowrap",
	});

	const CustomTableCell = styled(TableCell)({
		borderRight: "1px solid rgba(224, 224, 224, 1) ", // Add column border color
		textAlign: "right", // Align text to the right
	});

	const searchQuery = useSearchParams();
	const { data } = useRoomCalender(searchQuery);

	const dates = data?.data[0].inventory_calendar.map((cal) => cal.date);

	return (
		<TableContainer component={Paper} sx={{ maxHeight: "calc(100vh - 300px)" }}>
			<Table stickyHeader>
				<TableHead>
					<TableRow>
						<StickyTableCell />
						{dates?.map((date, index) => (
							<CustomTableCell key={index} sx={{ p: 1 }}>
								<Box sx={{ maxWidth: 30 }}>{dayjs(date).format("ddd  DD")}</Box>
							</CustomTableCell>
						))}
					</TableRow>
				</TableHead>
				<TableBody>
					{data?.data?.map((room, roomIndex) => (
						<React.Fragment key={roomIndex}>
							<TableRow>
								<StickyTableCell sx={{ borderRight: 0, width: "100%" }}>
									<Typography variant="h6">{room.name}</Typography>
								</StickyTableCell>
								<CustomTableCell
									colSpan={room.inventory_calendar.length - 1}
									sx={{
										position: "relative",
										borderRight: 0,
									}}
								>
									<Button
										variant="contained"
										color="warning"
										sx={{
											py: 0.3,
											ml: "auto",
											position: "sticky",
											right: 100,
										}}
									>
										+ Bulk Edit
									</Button>
								</CustomTableCell>
							</TableRow>
							<TableRow>
								<StickyTableCell>Room Status</StickyTableCell>
								{room.inventory_calendar?.map((cal, calIndex) => (
									<CustomTableCell
										sx={{
											background: cal?.status ? "green" : "red",
											color: "white",
										}}
										key={calIndex}
									>
										{cal.status ? "Open" : "Closed"}
									</CustomTableCell>
								))}
							</TableRow>
							<TableRow>
								<StickyTableCell>Rooms to Sell</StickyTableCell>
								{room.inventory_calendar.map((cal, calIndex) => (
									<CustomTableCell key={calIndex}>
										{cal.available}
									</CustomTableCell>
								))}
							</TableRow>
							<TableRow>
								<StickyTableCell>Net Booked</StickyTableCell>
								{room.inventory_calendar.map((cal, calIndex) => (
									<CustomTableCell key={calIndex}>{cal.booked}</CustomTableCell>
								))}
							</TableRow>
							{room.rate_plans.map((ratePlan, ratePlanIndex) => (
								<React.Fragment key={ratePlanIndex}>
									<TableRow>
										<StickyTableCell>{ratePlan.name}</StickyTableCell>
										{ratePlan?.calendar?.map((rateCal, rateCalIndex) => (
											<CustomTableCell key={rateCalIndex}>
												{rateCal.rate}
											</CustomTableCell>
										))}
									</TableRow>
									<TableRow>
										<StickyTableCell>Min Length of Stay</StickyTableCell>
										{ratePlan.calendar.map((rateCal, rateCalIndex) => (
											<CustomTableCell key={rateCalIndex}>
												{rateCal.min_length_of_stay}
											</CustomTableCell>
										))}
									</TableRow>
									<TableRow>
										<StickyTableCell>Reservation Deadline</StickyTableCell>
										{ratePlan.calendar.map((rateCal, rateCalIndex) => (
											<CustomTableCell key={rateCalIndex}>
												{rateCal.reservation_deadline}
											</CustomTableCell>
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
