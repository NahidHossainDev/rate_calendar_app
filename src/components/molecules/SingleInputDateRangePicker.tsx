import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

export default function SingleInputDateRangePicker() {
	return (
		<LocalizationProvider dateAdapter={AdapterDayjs}>
			<DemoContainer components={["SingleInputDateRangeField"]}>
				<DateRangePicker slots={{ field: SingleInputDateRangeField }} name='allowedRange' />
			</DemoContainer>
		</LocalizationProvider>
	);
}
