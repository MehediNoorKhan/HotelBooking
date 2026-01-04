export const calculateBookingPrice = (
  monthlyPrice: number,
  checkIn: string,
  checkOut: string
) => {
  const start = new Date(checkIn);
  const end = new Date(checkOut);

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const base_price = months * monthlyPrice;
  const tax = base_price * 0.1; // 10% example
  const total_price = base_price + tax;

  return {
    base_price,
    tax,
    total_price,
  };
};
