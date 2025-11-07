"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Navbar from "@/component/navbar";
import Footer from "@/component/Footer";
import { getPropertyById } from "../../../lib/firestore";
import useEmblaCarousel from "embla-carousel-react";

export type RoomOption = {
  type: string;
  amount: number;
  totalBed: number;
};

export type PropertyImage = {
  imageUrl: string;
  imageType: string;
};

export type Property = {
  id: string;
  name: string;
  location: string;
  price: number;
  type: string;
  agreementDuration: string;
  anyExtraCharges: boolean;
  propertyName: string;
  propertyAddress: string;
  mapUrl: string;
  propertyCode: string;
  propertyImages: PropertyImage[];
  propertyFeature: string[];
  roomOptions: RoomOption[];
  wifiList: string[];
  houseRules: string[];
  securityDeposit: string;
  isActive: boolean;
  propertyStatus: string;
  propertyDescription: string;
  propertyLocality: string;
  propertyCity: string;
  whoCanStay: string[];
  lockInPeriod: string;
  noticePeriod: string;
  propertyLocationUrl?: string;
  views?: number;
};

// ==== Helper UI bits ====
function Badge({ children, tone = "default" }: { children: React.ReactNode; tone?: "default" | "success" | "danger" | "warning" }) {
  const map: Record<string, string> = {
    default: "bg-gray-100 text-gray-700",
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-800",
  };
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${map[tone]}`}>{children}</span>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <div className="bg-blue-50/70 p-4 rounded-t-lg">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className="p-4 bg-white border border-t-0 rounded-b-lg shadow-sm">{children}</div>
    </section>
  );
}

function KeyValue({ label, value }: { label: string; value?: React.ReactNode }) {
  return (
    <div className="flex justify-between items-start gap-4 py-3 border-b last:border-b-0">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gray-900 text-right">{value ?? "—"}</span>
    </div>
  );
}

// Header image slider (Embla)
function HeaderImageSlider({
  images = [],
  title,
}: {
  images: PropertyImage[];
  title: string;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  if (!images?.length) {
    return (
      <div className="relative w-full h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl bg-gray-100 grid place-items-center text-gray-400">
        No images
      </div>
    );
  }

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl shadow-xl" ref={emblaRef}>
        <div className="flex">
          {images.map((img, idx) => (
            <div className="relative min-w-0 flex-[0_0_100%] h-80 md:h-96" key={idx}>
              <div className="absolute inset-0 bg-gray-100">
                {img.imageUrl ? (
                  <Image
                    src={img.imageUrl}
                    alt={img.imageType || `${title}-image-${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1024px"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full grid place-items-center text-gray-400">No image</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Controls */}
      <button
        onClick={scrollPrev}
        aria-label="Previous image"
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={scrollNext}
        aria-label="Next image"
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow"
      >
        <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M7.293 4.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 11-1.414-1.414L11.586 10 7.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 bg-white/70 rounded-full px-2 py-1">
        {images.map((_, i) => (
          <span key={i} className={`h-2 w-2 rounded-full ${i === selectedIndex ? "bg-gray-900" : "bg-gray-400"}`} />
        ))}
      </div>
    </div>
  );
}

// ==== Main Component ====
export default function PropertyDetailClient({ propertyId }: { propertyId: string }) {
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function fetchProperty() {
      try {
        setLoading(true);
        setError(null);
        const { data, error } = await getPropertyById(propertyId);
        if (!mounted) return;
        if (error) {
          setError(error);
          setProperty(null);
        } else if (!data) {
          setError("Property not found");
          setProperty(null);
        } else {
          setProperty(data as Property);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load property");
        setProperty(null);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    if (propertyId) fetchProperty();
    return () => {
      mounted = false;
    };
  }, [propertyId]);

  // Formatters
  const inr = (n?: number) => (typeof n === "number" ? n.toLocaleString("en-IN") : undefined);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="max-w-6xl mx-auto p-6 w-full">
          <div className="animate-pulse space-y-6">
            <div className="h-72 bg-gray-200 rounded-2xl" />
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="h-40 bg-gray-200 rounded-lg" />
                <div className="h-56 bg-gray-200 rounded-lg" />
                <div className="h-40 bg-gray-200 rounded-lg" />
              </div>
              <div className="h-72 bg-gray-200 rounded-2xl" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="max-w-3xl mx-auto p-6 w-full">
          <div className="text-red-700 bg-red-50 border border-red-200 rounded-lg p-4 font-medium">{error}</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="max-w-3xl mx-auto p-6 w-full text-gray-600">No property details available.</div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Image */}
      <div className="p-4 mt-20 max-w-6xl w-full mx-auto">
        <HeaderImageSlider images={property.propertyImages} title={property.propertyName || property.name} />
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{property.propertyName || property.name}</h1>
          <Badge tone={property.isActive ? "success" : "danger"}>{property.isActive ? "Active" : "Inactive"}</Badge>
          {property.propertyStatus && <Badge tone="warning">{property.propertyStatus}</Badge>}
          {property.type && <Badge>{property.type}</Badge>}
        </div>
        <p className="text-gray-600 mt-1">{property.propertyAddress}</p>
        <div className="text-sm text-gray-500 mt-0.5">{property.propertyLocality} · {property.propertyCity} · {property.location}</div>
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto p-4 pb-10 grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
        {/* Left: Details */}
        <div className="lg:col-span-2 space-y-8">
          <Section title="About Property">
            <p className="text-gray-700 leading-relaxed">{property.propertyDescription || "—"}</p>
          </Section>

          <Section title="Renting Terms">
            <div className="divide-y">
              <KeyValue label="Agreement Duration" value={property.agreementDuration} />
              <KeyValue label="Security Deposit" value={property.securityDeposit} />
              <KeyValue label="Any Extra Charges" value={typeof property.anyExtraCharges === "boolean" ? (property.anyExtraCharges ? "Yes" : "No") : "—"} />
              <KeyValue label="Lock-in Period" value={property.lockInPeriod} />
              <KeyValue label="Notice Period" value={property.noticePeriod} />
              <KeyValue label="Who Can Stay" value={property.whoCanStay?.length ? property.whoCanStay.join(", ") : "—"} />
            </div>
          </Section>

          <Section title="Room Options">
            {property.roomOptions?.length ? (
              <div className="overflow-hidden rounded-lg border border-gray-100">
                <table className="min-w-full divide-y divide-gray-100">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Type</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Amount</th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600">Total Beds</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {property.roomOptions.map((r, i) => (
                      <tr key={`${r.type}-${i}`} className="bg-white">
                        <td className="px-4 py-3 text-sm text-gray-900">{r.type}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{typeof r.amount === "number" ? `₹ ${inr(r.amount)}/-` : "—"}</td>
                        <td className="px-4 py-3 text-sm text-gray-900">{r.totalBed ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="text-gray-500">No room options available.</p>
            )}
          </Section>

          <Section title="Amenities & Features">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Features</h3>
                {property.propertyFeature?.length ? (
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {property.propertyFeature.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">—</p>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Wi‑Fi</h3>
                {property.wifiList?.length ? (
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {property.wifiList.map((w, i) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">—</p>
                )}
              </div>
            </div>
          </Section>

          <Section title="House Rules">
            {property.houseRules?.length ? (
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {property.houseRules.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">—</p>
            )}
          </Section>
        </div>

        {/* Right: CTA Card */}
        <aside className="lg:col-span-1 sticky top-4 self-start">
          <div className="bg-white p-4 md:p-6 rounded-2xl shadow-xl border border-gray-100">
            <div className="flex items-baseline justify-between mb-4">
              <div className="text-2xl font-bold text-gray-900">{typeof property.price === "number" ? `₹ ${inr(property.price)}` : "—"}</div>
              {property.type && <Badge>{property.type}</Badge>}
            </div>

            <div className="flex space-x-2 mb-4">
              <button className="flex-1 py-3 px-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 transition">I&apos;m interested</button>
              <button className="flex-1 py-3 px-4 rounded-xl font-bold text-gray-800 bg-white border-2 border-gray-200 hover:border-blue-600 transition">Reserve Bed</button>
            </div>

            <p className="text-center text-xs text-yellow-700 mb-4">🔥 Real-time availability</p>

            <div className="grid grid-cols-3 gap-3">
              {/* Live Video Tour */}
              <button className="flex flex-col items-center justify-center p-3 border rounded-xl hover:border-blue-500 transition">
                <div className="w-10 h-10 bg-blue-50 rounded-full grid place-items-center mb-1">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.552-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.448.894L15 14M4 16h6M4 8h6m0 8l-4 4m4-4l-4-4" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700 text-center">Live video tour</span>
              </button>

              {/* Visit Property */}
              <button className="flex flex-col items-center justify-center p-3 border rounded-xl hover:border-blue-500 transition">
                <div className="w-10 h-10 bg-green-50 rounded-full grid place-items-center mb-1">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243m0 0a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700 text-center">Visit Property</span>
              </button>

              {/* Phone Call */}
              <button className="flex flex-col items-center justify-center p-3 border rounded-xl hover:border-blue-500 transition">
                <div className="w-10 h-10 bg-gray-50 rounded-full grid place-items-center mb-1">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-11a2 2 0 01-2-2v-3.28z" />
                  </svg>
                </div>
                <span className="text-xs font-medium text-gray-700 text-center">Phone Call</span>
              </button>
            </div>

            {/* Quick Facts */}
            <div className="mt-6 text-sm text-gray-700 space-y-2">
              <div className="flex justify-between"><span>Property Code</span><span className="font-medium">{property.propertyCode || "—"}</span></div>
              <div className="flex justify-between"><span>Views</span><span className="font-medium">{property.views || "—"}</span></div>
              <div className="flex justify-between"><span>Status</span><span className="font-medium">{property.propertyStatus || "—"}</span></div>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
