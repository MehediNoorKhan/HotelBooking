import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";

export const useGlobalLoading = () => {
  return useSelector((state: RootState) =>
    Object.values(state.api.queries).some(
      (query: any) => query?.status === "pending"
    )
  );
};
