// --- app/PropertyDetail/[id]/page.tsx ---

import PropertyDetailClient from "./PropertyDetailClient";

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  // params.id will contain the property ID from the URL segment
  return <PropertyDetailClient propertyId={params.id} />;
}