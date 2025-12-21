// redux/api/common/commonApi.ts
import { rtkApi } from "@/services/rtkApi";

export const commonApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getPrivacyPolicy: builder.query<any, void>({
      query: () => "/privacy-policy",
      keepUnusedDataFor: 60 * 60, // 1 hour cache
    }),

    getFaqs: builder.query<any, void>({
      query: () => "/faq",
      keepUnusedDataFor: 60 * 60,
    }),

    getAboutUs: builder.query<any, void>({
      query: () => "/about-us",
      keepUnusedDataFor: 60 * 60,
    }),

    getTermsOfService: builder.query<any, void>({
      query: () => "/terms-of-service",
      keepUnusedDataFor: 60 * 60,
    }),

    getAdminContact: builder.query<any, void>({
      query: () => "/admin-contact",
      keepUnusedDataFor: 60 * 60,
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
