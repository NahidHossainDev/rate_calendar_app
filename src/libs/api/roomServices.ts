import { BR, IRoomCalenderData } from "../interface";
import { BaseAPI } from "./baseAPI";

class RoomServiceAPI extends BaseAPI {
	constructor(baseURL: string) {
		super(baseURL);
	}

	getRoomCalender = (query: string) =>
		this.get<BR<IRoomCalenderData[]>>(`property/1/room/rate-calendar/assessment?${query}`);
}

export const roomServiceApi = new RoomServiceAPI("https://api.bytebeds.com/api/v1"); // This base api string will come from ".env"
