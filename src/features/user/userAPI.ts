// services/userAPI.ts
import { rtkApi } from "@/services/rtkApi";
import type { UserProfile } from "@/types";

interface ProfileResponse {
  status: boolean;
  message: string;
  data: UserProfile;
}

export const userAPI = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<UserProfile, void>({
      query: () => "/user/profile/get",
      transformResponse: (res: ProfileResponse) => res.data,
      providesTags: ["Auth"],
    }),

    updateUserProfile: builder.mutation<UserProfile, FormData>({
      query: (formData) => ({
        url: "/user/profile/update",
        method: "POST",
        body: formData,
      }),
      transformResponse: (res: ProfileResponse) => res.data,
      invalidatesTags: ["Auth"],
    }),

    updateProfileImage: builder.mutation<{ image: string }, FormData>({
      query: (body) => ({
        url: "/profile/image/update",
        method: "POST",
        body,
      }),
      transformResponse: (response: any) => {
        if (!response) return null;
        return response.data ?? response;
      },
    }),
    updateProfilePassword: builder.mutation<UserProfile, FormData>({
      query: (body) => ({
        url: "/user/password/change", 
        method: "POST",
        body,
      }),
      transformResponse: (response: any) => {
        if (!response) return null;
        return response.data ?? response;
      },
    }),
  }),
});

export const {
  useGetUserProfileQuery,
  useUpdateUserProfileMutation,
  useUpdateProfileImageMutation,
  useUpdateProfilePasswordMutation
} = userAPI;
