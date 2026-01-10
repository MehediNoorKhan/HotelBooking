interface SearchData {
  location: string;
  checkIn: string;
  checkOut: string;
  min_price: string;
  max_price: string;
}

export const buildSearchPayload = (form: SearchData) => {
  const payload: Record<string, any> = {};

  // Location
  if (form.location?.trim()) {
    payload.location = form.location.trim();
  }

  // Dates
  if (form.checkIn) {
    payload.check_in_date = form.checkIn; // YYYY-MM-DD
  }

  if (form.checkOut) {
    payload.check_out_date = form.checkOut; // YYYY-MM-DD
  }

  // Prices
  if (form.min_price) {
    const min = Number(form.min_price);
    if (!isNaN(min)) payload.min_price = min;
  }

  if (form.max_price) {
    const max = Number(form.max_price);
    if (!isNaN(max)) payload.max_price = max;
  }

  return payload;
};