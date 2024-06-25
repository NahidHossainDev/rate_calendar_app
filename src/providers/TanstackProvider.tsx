import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { FC, ReactNode } from "react";

interface PropsType {
	children: ReactNode;
}
export const TanstackProvider: FC<PropsType> = ({ children }) => {
	const queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
