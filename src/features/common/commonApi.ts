// redux/api/common/commonApi.ts
import { rtkApi } from "@/services/rtkApi";
import type { AboutUsResponse, FAQResponse, PrivacyPolicyResponse, TermConditionResponse} from "@/types";

export const commonApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getPrivacyPolicy: builder.query<PrivacyPolicyResponse, void>({
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

    getFaqs: builder.query<FAQResponse, void>({
  query: () => "/faq/get",
  keepUnusedDataFor: 60 * 60, // 1 hour
  async onQueryStarted(_, { queryFulfilled }) {
    try {
      const { data } = await queryFulfilled;
      console.log("getFaqs response:", data);
    } catch (error) {
      console.error("getFaqs error:", error);
    }
  },
}),

    getAboutUs: builder.query<AboutUsResponse, void>({
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

    getTermsOfService: builder.query<TermConditionResponse, void>({
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
