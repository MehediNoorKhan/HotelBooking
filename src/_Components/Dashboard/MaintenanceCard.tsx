import { Settings } from 'lucide-react';

export type MaintenanceStatus = 'pending' | 'resolved' | 'in-progress';

export interface MaintenanceCardProps {
  data: {
    title: string;
    location: string;
    bookingId: string;
    description: string;
    submittedDate: string;
    resolvedDate?: string;
    status: MaintenanceStatus;
  };
}

const STATUS_STYLES: Record<MaintenanceStatus, string> = {
  resolved: 'bg-teal-500/20 text-teal-400',
  'in-progress': 'bg-yellow-500/20 text-yellow-400',
  pending: 'bg-orange-500/20 text-orange-400',
};

export default function MaintenanceCard({ data }: MaintenanceCardProps) {
  const { title, location, bookingId, description, submittedDate, resolvedDate, status } = data;

  return (
    <div className="bg-black border border-border/30 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex gap-4">
        {/* Icon */}
        <div className="shrink-0">
          <div className="w-14 h-14 bg-accent-foreground rounded-xl flex items-center justify-center">
            <Settings className="text-background" size={28} />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h3 className="text-lg font-bold text-muted mb-1">{title}</h3>
              <p className="text-muted/70 text-sm">{location}</p>
              <p className="text-primary text-xs mt-1">Booking Id: {bookingId}</p>
            </div>

            {/* Status Badge */}
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${STATUS_STYLES[status]}`}
            >
              {status.replace('-', ' ').toUpperCase()}
            </span>
          </div>

          {/* Description */}
          <p className="text-muted/70 text-sm mb-4 border-b border-muted/20 pb-4">
            {description}
          </p>

          {/* Dates */}
          <div className="flex justify-between text-sm">
            <div>
              <span className="text-muted/70 uppercase">Submitted: </span>
              <span className="text-muted/70 font-medium">{submittedDate}</span>
            </div>
            {resolvedDate && (
              <div>
                <span className="text-muted/70 uppercase">Resolved: </span>
                <span className="text-muted/70 font-medium">{resolvedDate}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
