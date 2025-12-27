// Next.js uses this file to stream a loading state to the user
// while the main content is being prepared.
// You can add any UI you want here.
// This file is only rendered on the server.
import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}