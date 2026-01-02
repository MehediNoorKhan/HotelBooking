import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const rtkApi = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_API_BASE_URL,
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("token");
//       if (token) {
//         headers.set("authorization", `Bearer ${token}`);
//       }
//       headers.set("content-type", "application/json");
//       return headers;
//     },
//   }),
//   tagTypes: ["FeaturedApartments", "Apartments", "Auth"],
//   endpoints: () => ({}),
// });


export const rtkApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      // ❌ DO NOT SET content-type here
      return headers;
    },
  }),
  tagTypes: ["Auth","FeaturedApartments","Apartments","Dashboard"],
  endpoints: () => ({}),
});
