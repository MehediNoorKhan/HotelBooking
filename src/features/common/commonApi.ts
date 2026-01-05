// redux/api/common/commonApi.ts
import { rtkApi } from "@/services/rtkApi";

export const commonApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getPrivacyPolicy: builder.query<any, void>({
      query: () => "/privacy/policy/get",
      keepUnusedDataFor: 60 * 60,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("getPrivacyPolicy response:", data);
        } catch (error) {
          console.error("getPrivacyPolicy error:", error);
        }
      },
    }),

    getFaqs: builder.query<any, void>({
      query: () => "/faq",
      keepUnusedDataFor: 60 * 60,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("getFaqs response:", data);
        } catch (error) {
          console.error("getFaqs error:", error);
        }
      },
    }),

    getAboutUs: builder.query<any, void>({
      query: () => "/about/us/get",
      keepUnusedDataFor: 60 * 60,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("getAboutUs response:", data);
        } catch (error) {
          console.error("getAboutUs error:", error);
        }
      },
    }),

    getTermsOfService: builder.query<any, void>({
      query: () => "/terms/services/get",
      keepUnusedDataFor: 60 * 60,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("getTermsOfService response:", data);
        } catch (error) {
          console.error("getTermsOfService error:", error);
        }
      },
    }),

    getAdminContact: builder.query<any, void>({
      query: () => "/contact/get",
      keepUnusedDataFor: 60 * 60,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log("getAdminContact response:", data);
        } catch (error) {
          console.error("getAdminContact error:", error);
        }
      },
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetPrivacyPolicyQuery,
  useGetFaqsQuery,
  useGetAboutUsQuery,
  useGetTermsOfServiceQuery,
  useGetAdminContactQuery,
} = commonApi;
