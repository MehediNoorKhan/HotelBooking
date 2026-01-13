import { useGetBannerByTypeQuery } from "@/features/banner/bannerApi";
import type { BannerType } from "@/features/banner/bannerApi";

export const usePageBanner = (
  bannerType: BannerType = "home_banner"
) => {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useGetBannerByTypeQuery(bannerType);

  return {
    bannerData: data,
    isBannerLoading: isLoading,
    isBannerError: isError,
    bannerError: error,
  };
};
