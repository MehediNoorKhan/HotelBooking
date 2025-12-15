import { useState } from 'react';

interface NewMaintenanceRequestProps {
  onSubmit: (data: MaintenanceFormData) => void;
  onCancel?: () => void;
  bookings?: { id: string; name: string }[];
  categories?: string[];
}

interface MaintenanceFormData {
  bookingId: string;
  category: string;
  description: string;
}

export default function MaintenanceForm({
  onSubmit,
  onCancel,
  bookings = [],
  categories = []
}: NewMaintenanceRequestProps) {
  const [formData, setFormData] = useState<MaintenanceFormData>({
    bookingId: '',
    category: '',
    description: ''
  });

  const handleSubmit = () => {
    if (formData.bookingId && formData.category && formData.description) {
      onSubmit(formData);
      // Reset form
      setFormData({
        bookingId: '',
        category: '',
        description: ''
      });
    }
  };

  return (
    <div className="bg-accent-foreground border-2 border-border/50 rounded-2xl p-6 ">
      {/* Header */}
      <h2 className="text-xl font-semibold text-muted mb-6">Submit New Request</h2>

      {/* Form Fields */}
      <div>
        {/* Booking ID */}
        <div className="mb-6">
          <label className="block text-muted text-sm font-medium mb-2">
            Booking ID
          </label>
          <select
            value={formData.bookingId}
            onChange={(e) => setFormData({ ...formData, bookingId: e.target.value })}
            className="w-full bg-foreground border border-border/20 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
          >
            <option value="">Select a booking id</option>
            {bookings.map((booking) => (
              <option key={booking.id} value={booking.id}>
                {booking.name}
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
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full bg-foreground border border-border/20 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-gray-600 transition-colors"
          >
            <option value="">Select a amenities</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
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
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Please describe the issue in details..."
            rows={5}
            className="w-full bg-foreground border border-border/20 rounded-lg px-4 py-3 text-gray-400 placeholder:text-gray-600 focus:outline-none focus:border-gray-600 transition-colors resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-end gap-3">
          {onCancel && (
            <button
              onClick={onCancel}
              className="bg-muted/50 hover:bg-primary text-muted font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Cancel
            </button>
          )}
          <button
            onClick={handleSubmit}
            className="bg-primary hover:bg-primary/80 text-muted font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Submit Requests
          </button>
        </div>
      </div>
    </div>
  );
}