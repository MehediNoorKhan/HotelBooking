import { api } from "./api";

export interface InquiryPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendInquiry = async (payload: InquiryPayload) => {
  const response = await api.post("/contact/store", payload);
  return response.data;
};
