export interface IRoomCalenderData {
	id: string;
	name: string;
	occupancy: number;
	inventory_calendar: InventoryCalendar[];
	rate_plans: RatePlan[];
}

interface InventoryCalendar {
	id?: string;
	date: string;
	available?: number;
	status?: boolean;
	booked?: number;
}

interface RatePlan {
	id: number;
	name: string;
	calendar: Calendar[];
}

interface Calendar {
	id?: string;
	date: string;
	rate?: number;
	min_length_of_stay?: number;
	reservation_deadline?: number;
}
