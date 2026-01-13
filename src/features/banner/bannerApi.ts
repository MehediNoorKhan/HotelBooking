import { rtkApi } from "@/services/rtkApi";

export type BannerType =
  | "home_banner"
  | "apartments"
  | "saved_property"
  | "inquiry_page"
  | "about_page"
  | "faq_page"
  | "terms"
  | "policy";

interface BannerResponse {
  status: boolean;
  message: string;
  data: {
    image: string;
    title: string;
    short_description: string;
    banner_type: BannerType;
  };
}

export const bannerApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getBannerByType: builder.query<BannerResponse, BannerType>({
      query: (bannerType) => ({
        url: `/baner/pages/get/${bannerType}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBannerByTypeQuery } = bannerApi;
