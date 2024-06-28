"use client";
import { styled } from "@mui/system";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

const StyledDemoContainer = styled(DemoContainer)({
	"& > :first-child": {
		display: "none",
	},
	width: 100,
});

export function SingleInputDateRangePicker() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<StyledDemoContainer components={["SingleInputDateRangeField"]}>
				<DateRangePicker
					sx={{ py: 0 }}
					slots={{ field: SingleInputDateRangeField }}
					name="allowedRange"
				/>
			</StyledDemoContainer>
		</LocalizationProvider>
	);
}
