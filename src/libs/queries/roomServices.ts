import { useQuery } from "@tanstack/react-query";
import { ReadonlyURLSearchParams } from "next/navigation";
import { roomServiceApi } from "../api";

export const useRoomCalender = (query: ReadonlyURLSearchParams) =>
	useQuery({
		queryKey: ["room", query.toString()],
		queryFn: () => {
			const finalQuery = new URLSearchParams(query);
			if (!finalQuery.has("start_date") || !finalQuery.has("end_date")) {
				const today = new Date().toISOString().slice(0, 10);
				if (!finalQuery.has("start_date")) finalQuery.set("start_date", today);
				if (!finalQuery.has("end_date")) finalQuery.set("end_date", today);
			}
			return roomServiceApi.getRoomCalender(finalQuery.toString());
		},
	});
