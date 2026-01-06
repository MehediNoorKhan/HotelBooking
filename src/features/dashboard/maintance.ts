import { rtkApi } from "@/services/rtkApi";
import type {
  MaintenanceApiResponse,
  MaintenanceUIItem,
  InvoiceApiResponse,
  AmenityCategoryApiResponse,
  CreateMaintenancePayload,
} from "@/types";

export const maintenanceApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    // ===============================
    // GET ALL MAINTENANCE
    // ===============================
    getAllMaintenanceRequests: builder.query<MaintenanceUIItem[], void>({
      query: () => "/maintaince/request/get/all",

      transformResponse: (
        response: MaintenanceApiResponse
      ): MaintenanceUIItem[] =>
        response.data.map((item) => ({
          title: item.apartment_title,
          location: item.amenity_category_id,
          bookingId: item.booking_invoice,
          description: item.description,
          submittedDate: item.submitted_at,
          resolvedDate:
            item.resolved_at && item.resolved_at !== "N/A"
              ? item.resolved_at
              : undefined,
          status: item.status,
        })),

      providesTags: ["Dashboard"],
    }),

    // ===============================
    // GET INVOICE LIST (on New Request)
    // ===============================
    getBookingInvoices: builder.query<{ id: number; invoice: string }[], void>({
      query: () => "/mybookings/invoice",
      transformResponse: (res: InvoiceApiResponse) =>
        res.data.map((item) => ({
          id: item.booking_id,
          invoice: item.booking_invoice,
        })),
    }),

    // ===============================
    // GET CATEGORIES BY INVOICE
    // ===============================
    getAmenityCategoriesByInvoice: builder.query<
      { id: number; name: string }[],
      string
    >({
      query: (invoice) => `/mybooking/amenity/category/${invoice}`,
      transformResponse: (res: AmenityCategoryApiResponse) =>
        res.data.map((item) => ({
          id: item.category_id,
          name: item.category_name,
        })),
    }),

    // ===============================
    // POST MAINTENANCE REQUEST
    // ===============================
    createMaintenanceRequest: builder.mutation<
      unknown,
      CreateMaintenancePayload
    >({
      query: (body) => ({
        url: "/apartment/amenity/booking/repair/store",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Dashboard"],
    }),
  }),
});

export const {
  useGetAllMaintenanceRequestsQuery,
  useGetBookingInvoicesQuery,
  useGetAmenityCategoriesByInvoiceQuery,
  useCreateMaintenanceRequestMutation,
} = maintenanceApi;
