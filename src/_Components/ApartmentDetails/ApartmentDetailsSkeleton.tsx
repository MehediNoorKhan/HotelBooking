
import { Skeleton } from "../../components/ui/skeleton";

export default function ApartmentDetailsSkeleton() {
  return (
    <div className="bg-foreground">
      {/* Image Skeleton */}
      <div className="max-w-[1400px] mx-auto px-2 sm:px-0">
        <Skeleton className="h-[400px] w-full rounded-xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-8 pb-12 space-y-6">

          {/* Badge */}
          <Skeleton className="h-8 w-40 rounded-full" />

          {/* Title */}
          <Skeleton className="h-12 w-3/4" />

          {/* Buttons */}
          <div className="flex gap-3">
            <Skeleton className="h-[45px] w-[103px] rounded-2xl" />
            <Skeleton className="h-[45px] w-[103px] rounded-2xl" />
          </div>

          {/* Description */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>

        </div>
      </div>
    </div>
  );
}
