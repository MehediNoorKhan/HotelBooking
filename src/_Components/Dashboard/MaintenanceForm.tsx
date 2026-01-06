import { useState } from "react";
import {
  useGetBookingInvoicesQuery,
  useGetAmenityCategoriesByInvoiceQuery,
  useCreateMaintenanceRequestMutation,
} from "@/features/dashboard/maintance";

export default function MaintenanceForm({ onCancel }: { onCancel?: () => void }) {
  const [invoice, setInvoice] = useState("");
  const [categoryId, setCategoryId] = useState<number | null>(null);
  const [description, setDescription] = useState("");

  const { data: invoices = [] } = useGetBookingInvoicesQuery();

  const { data: categories = [] } =
    useGetAmenityCategoriesByInvoiceQuery(invoice, {
      skip: !invoice,
    });

  const [createRequest, { isLoading }] =
    useCreateMaintenanceRequestMutation();

  const handleSubmit = async () => {
    if (!invoice || !categoryId || !description) return;

    await createRequest({
      invoice_number: invoice,
      amenity_category_id: categoryId,
      description,
    });

    setInvoice("");
    setCategoryId(null);
    setDescription("");
    onCancel?.();
  };

  return (
    <div className="bg-accent-foreground border-2 border-border/50 rounded-2xl p-6">
      <h2 className="text-xl font-semibold text-muted mb-6">
        Submit New Request
      </h2>

      {/* Invoice */}
      <div className="mb-6">
        <label className="block text-muted text-sm font-medium mb-2">
          Booking ID
        </label>
        <select
          value={invoice}
          onChange={(e) => setInvoice(e.target.value)}
          className="w-full bg-foreground border border-primary/50 rounded-lg px-4 py-3 text-gray-400"
        >
          <option value="">Select a booking id</option>
          {invoices.map((b) => (
            <option key={b.id} value={b.invoice}>
              {b.invoice}
            </option>
          ))}
        </select>
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-muted text-sm font-medium mb-2">
          Category
        </label>
        <select
          value={categoryId ?? ""}
          onChange={(e) => setCategoryId(Number(e.target.value))}
          disabled={!invoice}
          className="w-full bg-foreground border border-primary/50 rounded-lg px-4 py-3 text-gray-400"
        >
          <option value="">Select a amenities</option>
          {categories.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Description */}
      <div className="mb-6">
        <label className="block text-muted text-sm font-medium mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={5}
          placeholder="Please describe the issue in details..."
          className="w-full bg-foreground border border-primary/50 rounded-lg px-4 py-3 text-gray-400 resize-none"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3">
        {onCancel && (
          <button
            onClick={onCancel}
            className="bg-muted/50 hover:bg-primary text-muted font-medium px-6 py-3 rounded-lg"
          >
            Cancel
          </button>
        )}
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-primary hover:bg-primary/80 text-muted font-medium px-6 py-3 rounded-lg"
        >
          Submit Requests
        </button>
      </div>
    </div>
  );
}
