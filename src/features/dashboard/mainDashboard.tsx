import { rtkApi } from "@/services/rtkApi";
import type { DashboardResponse } from "@/types";

export const dashboardApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardData: builder.query<DashboardResponse, void>({ 
      query: () => ({
        url: "/user/dashboard", // Relative to baseUrl
        method: "GET",
      }),
      providesTags: ["Dashboard"], // For cache invalidation if needed
    }),
  }),
});

export const { useGetDashboardDataQuery } = dashboardApi;