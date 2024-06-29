import { ReadonlyURLSearchParams } from "next/navigation";

export const updateURLSearchParams = (
	searchParams: ReadonlyURLSearchParams,
	newQuery?: Record<string, string>,
): string => {
	const params = new URLSearchParams();
	for (const [key, value] of Object.entries(searchParams)) {
		if (Array.isArray(value)) {
			value.map((e) => params.append(key, e));
		} else {
			params.set(key, value as string);
		}
	}
	if (newQuery) {
		for (const [key, value] of Object.entries(newQuery)) {
			if (value) {
				params.set(key, value);
			} else {
				params.delete(key);
			}
		}
	}

	return params.toString();
};
