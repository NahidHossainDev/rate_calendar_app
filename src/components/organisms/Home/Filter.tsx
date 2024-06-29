"use client";

import { SingleInputDateRangePicker } from "@/components/molecules";
import { updateURLSearchParams } from "@/utils/helpers";
import { Typography } from "@mui/material";
import { DateRange } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { FC, useEffect, useState } from "react";

interface IFilters {
	start_date: string;
	end_date: string;
	search?: string;
}

const initialFilter = {
	start_date: dayjs(new Date()).format("YYYY-MM-DD"),
	end_date: dayjs(new Date()).format("YYYY-MM-DD"),
};
export const Filter: FC = () => {
	const [values, setValues] = useState({ ...initialFilter });
	const searchQuery = useSearchParams();
	const path = usePathname();
	const router = useRouter();

	const handleDateChange = (date: DateRange<dayjs.Dayjs>) => {
		const [start_date, end_date] = date;
		if (start_date && end_date) {
			setValues((prevState) => ({
				...prevState,
				start_date: start_date?.format("YYYY-MM-DD"),
				end_date: end_date?.format("YYYY-MM-DD"),
			}));
		}
	};

	useEffect(() => {
		const query = updateURLSearchParams(searchQuery, values);
		router.push(`${path}?${query}`);
	}, [values]);

	return (
		<>
			<Typography variant="h6" fontWeight={600}>
				Rate Calendar App
			</Typography>
			<SingleInputDateRangePicker onChange={handleDateChange} />
		</>
	);
};
