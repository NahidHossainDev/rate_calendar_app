import { NextPageContext } from "next";

export class BaseAPI {
	protected baseURL: string;

	constructor(baseURL: string) {
		this.baseURL = baseURL;
	}

	// private token(ctx?: NextPageContext) {
	// 	const { token = null } = parseCookies(ctx);
	// 	return token;
	// }

	protected async get<T>(url: string, ctx?: NextPageContext, token?: string): Promise<T> {
		const res = await fetch(`${this.baseURL}/${url}`, {
			method: "GET",
			headers: {
				"content-type": "application/json",
				Accept: "application/json",
				// Authorization: token || this.token(ctx),
			},
		});

		// if (res.status === 401 || res.status === 403) {
		// 	destroyCookie(ctx || null, 'token');
		// 	return;
		// }

		return await res.json();
	}

	protected async post<T>(url: string, payload: unknown, ctx?: NextPageContext): Promise<T> {
		const res = await fetch(`${this.baseURL}/${url}`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
				Accept: "application/json",
				// Authorization: this.token(ctx),
			},
			body: JSON.stringify(payload),
		});

		// if (res.status === 401 || res.status === 403) {
		// 	destroyCookie(ctx || null, 'token');
		// 	return;
		// }

		return await res.json();
	}
}
