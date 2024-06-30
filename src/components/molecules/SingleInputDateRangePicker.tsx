"use client";
import { DateRange } from "@mui/x-date-pickers-pro";
import { DateRangePicker, DateRangePickerProps } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { FC, useEffect } from "react";

interface PropsType extends DateRangePickerProps<dayjs.Dayjs> {
	onChange: (date: DateRange<dayjs.Dayjs>) => void;
}

export const SingleInputDateRangePicker: FC<PropsType> = ({ onChange, ...rest }) => {
	useEffect(() => {
		const observer = new MutationObserver(() => {
			const elements = document.getElementsByClassName("MuiDateRangeCalendar-root");
			if (elements.length > 0 && elements[0].firstElementChild) {
				elements[0].firstElementChild.style.display = "none";
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["SingleInputDateRangeField"]} sx={{ maxWidth: 300 }}>
				<DateRangePicker
					{...rest}
					onChange={onChange}
					slots={{ field: SingleInputDateRangeField }}
					name="allowedRange"
				/>
			</DemoContainer>
		</LocalizationProvider>
	);
};
