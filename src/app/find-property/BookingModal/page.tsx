// "use client";

// import { useState, useEffect } from "react";

// // Time slot options
// const timeSlots = [
//   "9:00 – 9:30 AM", "9:30 – 10:00 AM", "10:00 – 10:30 AM", "10:30 – 11:00 AM",
//   "11:00 – 11:30 AM", "11:30 – 12:00 PM", "12:00 – 12:30 PM", "12:30 – 1:00 PM",
//   "1:00 – 1:30 PM", "1:30 – 2:00 PM", "2:00 – 2:30 PM", "2:30 – 3:00 PM",
//   "3:00 – 3:30 PM", "3:30 – 4:00 PM", "4:00 – 4:30 PM", "4:30 – 5:00 PM"
// ];

// // Steps for modal state
// type Step = 'details' | 'form' | 'success';

// export default function Page() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [step, setStep] = useState<Step>('details');
//   const [bookingType, setBookingType] = useState<string | null>(null);
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [selectedTime, setSelectedTime] = useState<string | null>(null);
//   const [availableDates, setAvailableDates] = useState<Date[]>([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     mobileNumber: "",
//     emailID: "",
//     gender: ""
//   });

//   // Generate 14 future dates
//   useEffect(() => {
//     const today = new Date();
//     const dates = Array.from({ length: 14 }, (_, i) => {
//       const d = new Date(today);
//       d.setDate(today.getDate() + i + 1);
//       return d;
//     });
//     setAvailableDates(dates);
//   }, []);

//   // Reset modal state on close
//   const handleOpenChange = (open: boolean) => {
//     setIsOpen(open);
//     if (!open) {
//       setTimeout(() => {
//         setStep('details');
//         setBookingType(null);
//         setSelectedDate(null);
//         setSelectedTime(null);
//         setFormData({ name: "", mobileNumber: "", emailID: "", gender: "" });
//       }, 300);
//     }
//   };

//   // Continue to form step
//   const handleContinue = () => {
//     if (!bookingType || !selectedDate || !selectedTime) {
//       alert("Please select all booking options.");
//       return;
//     }
//     setStep('form');
//   };

//   // Form submit, go to success state
//   const handleSubmit = (e: any) => {
//     e.preventDefault();
//     setStep('success');
//   };

//   // Step 1: Booking options
//   const renderDetailsStep = () => (
//     <div className="space-y-6">
//       <div className="grid grid-cols-3 gap-3">
//         {["Visit", "Virtual", "Phone"].map((type) => (
//           <button
//             key={type}
//             className={`flex flex-col h-20 gap-2 font-medium border bg-white hover:bg-blue-50 
//               ${bookingType === type ? "bg-blue-100 border-blue-500 text-blue-700" : ""}`}
//             onClick={() => setBookingType(type)}
//           >
//             <span role="img" aria-label={type}>{type === "Visit" ? "🗺️" : type === "Virtual" ? "🎥" : "📞"}</span>
//             <span>{type}</span>
//           </button>
//         ))}
//       </div>

//       <div>
//         <h3 className="font-semibold mb-3">Select Date</h3>
//         <div className="flex overflow-x-auto gap-2 pb-2">
//           {availableDates.map((date) => (
//             <button
//               key={date.toISOString()}
//               onClick={() => setSelectedDate(date)}
//               className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-14 rounded-xl border text-sm font-medium
//                 ${selectedDate?.toDateString() === date.toDateString() 
//                   ? "bg-blue-100 text-blue-700 border-blue-500"
//                   : "bg-gray-100 text-gray-500"
//                 }`}
//             >
//               <span className="uppercase text-[11px]">{date.toLocaleDateString('en-US', { weekday: 'short' })}</span>
//               <span className="text-lg font-bold">{date.getDate()}</span>
//             </button>
//           ))}
//         </div>
//       </div>

//       <div>
//         <h3 className="font-semibold mb-3">Select Time</h3>
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
//           {timeSlots.map((slot) => (
//             <button
//               key={slot}
//               onClick={() => setSelectedTime(slot)}
//               className={`px-4 py-2 rounded-xl border text-sm font-medium
//                 ${selectedTime === slot 
//                   ? "bg-blue-100 text-blue-700 border-blue-500"
//                   : "bg-gray-100 text-gray-500"
//                 }`}
//             >
//               {slot}
//             </button>
//           ))}
//         </div>
//       </div>

//       <button
//         className="w-full h-12 text-base bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
//         onClick={handleContinue}
//       >
//         Continue
//       </button>
//     </div>
//   );

//   // Step 2: Contact form
//   const renderFormStep = () => (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <div>
//         <label className="block mb-1">Full Name</label>
//         <input
//           type="text"
//           className="w-full px-3 py-2 border rounded"
//           placeholder="Enter your full name"
//           value={formData.name}
//           onChange={e => setFormData(f => ({ ...f, name: e.target.value }))}
//         />
//       </div>
//       <div>
//         <label className="block mb-1">Mobile Number</label>
//         <input
//           type="tel"
//           className="w-full px-3 py-2 border rounded"
//           placeholder="Enter your mobile number"
//           value={formData.mobileNumber}
//           onChange={e => setFormData(f => ({ ...f, mobileNumber: e.target.value }))}
//         />
//       </div>
//       <div>
//         <label className="block mb-1">Email ID</label>
//         <input
//           type="email"
//           className="w-full px-3 py-2 border rounded"
//           placeholder="Enter your email"
//           value={formData.emailID}
//           onChange={e => setFormData(f => ({ ...f, emailID: e.target.value }))}
//         />
//       </div>
//       <div>
//         <label className="block mb-1">Gender</label>
//         <select
//           className="w-full px-3 py-2 border rounded"
//           value={formData.gender}
//           onChange={e => setFormData(f => ({ ...f, gender: e.target.value }))}
//         >
//           <option value="">Select your gender</option>
//           <option value="Male">Male</option>
//           <option value="Female">Female</option>
//           <option value="Other">Other</option>
//         </select>
//       </div>
//       <div className="flex gap-4 pt-4">
//         <button type="button" onClick={() => setStep('details')} className="w-full bg-gray-200 text-gray-800 rounded-lg py-2">
//           Back
//         </button>
//         <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2">
//           Submit
//         </button>
//       </div>
//     </form>
//   );

//   // Step 3: Success indicator
//   const renderSuccessStep = () => (
//     <div className="text-center py-8 flex flex-col items-center gap-4">
//       <div style={{ fontSize: 50, color: "green" }}>✔️</div>
//       <h2 className="text-2xl font-bold">Successfully Booked!</h2>
//       <div className="text-left bg-gray-100 p-4 rounded-lg w-full space-y-2 text-sm">
//         <p><strong>Name:</strong> {formData.name}</p>
//         <p><strong>Booking Type:</strong> {bookingType}</p>
//         <p><strong>Date:</strong> {selectedDate ? selectedDate.toLocaleDateString() : 'N/A'}</p>
//         <p><strong>Time:</strong> {selectedTime}</p>
//       </div>
//       <button onClick={() => handleOpenChange(false)} className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2">
//         Done
//       </button>
//     </div>
//   );

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen">
//       <button
//         onClick={() => setIsOpen(true)}
//         className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg"
//       >
//         Book Now
//       </button>
//       {isOpen && (
//         <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
//           <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
//             <h2 className="text-xl font-bold mb-4">
//               {step === "form"
//                 ? "Enter Your Details"
//                 : step === "success"
//                 ? "Confirmation"
//                 : `Book a ${bookingType || "Visit"}`}
//             </h2>
//             <div className="py-4">
//               {step === "details" && renderDetailsStep()}
//               {step === "form" && renderFormStep()}
//               {step === "success" && renderSuccessStep()}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



'use client';

import Image from 'next/image';
import Link from 'next/link';

// Simplified property type for demo use
type Property = {
  id: string | number;
  propertyName?: string;
  propertyLocality?: string;
  propertyCity?: string;
  roomOptions?: { amount?: number }[];
  whoCanStay?: string[];
  propertyImages?: any; // Accepts string, array, or array of { imageUrl: string }
};

function OperatorPropertyCard({ property }: { property: Property }) {
  const price = property.roomOptions?.[0]?.amount;
  const whoCanStay = property.whoCanStay?.join(' / ');

  // Simple image extraction (no backend or library dependency)
  const getFirstValidImage = (images: any): string | null => {
    if (!images) return null;
    if (!Array.isArray(images)) {
      if (typeof images === 'string' && images.trim() !== '') return images;
      return null;
    }
    for (const img of images) {
      if (typeof img === 'string' && img.trim() !== '') return img.trim();
      if (typeof img === 'object' && img && typeof img.imageUrl === 'string' && img.imageUrl.trim() !== '') {
        return img.imageUrl.trim();
      }
    }
    return null;
  };

  const imageUrl =
    getFirstValidImage(property.propertyImages) ||
    `https://placehold.co/600x400/EEE/31343C.png?text=No+Photo+Available`;

  return (
    <Link href={`/property/${property.id}`} className="block">
      <div className="w-80 flex-shrink-0 snap-start bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        <div className="relative">
          <Image
            src={imageUrl}
            alt={property.propertyName || 'Property Image'}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          {price && (
            <span className="absolute bottom-2 right-2 bg-yellow-300 text-gray-800 py-1.5 px-5 font-bold rounded-lg text-sm">
              ₹{price.toLocaleString('en-IN')}
            </span>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-base mb-1 truncate">{property.propertyName || 'Unnamed Property'}</h3>
          <p className="text-sm text-gray-600 mb-2 truncate">{property.propertyLocality}, {property.propertyCity}</p>
          {whoCanStay && (
            <p className="text-sm"><strong>For: {whoCanStay}</strong></p>
          )}
        </div>
      </div>
    </Link>
  );
}

// Sample demo data and export—replace with real map/list if needed
const mockProperties: Property[] = [
  {
    id: 1,
    propertyName: 'Lakeside Residency',
    propertyLocality: 'Sector 21',
    propertyCity: 'Noida',
    roomOptions: [{ amount: 14000 }],
    whoCanStay: ['Students', 'Professionals'],
    propertyImages: ['/OIP.jpeg'],
  },
  {
    id: 2,
    propertyName: 'Maple Villas',
    propertyLocality: 'Downtown',
    propertyCity: 'Bangalore',
    roomOptions: [{ amount: 17500 }],
    whoCanStay: ['Families'],
    propertyImages: [],
  },
  {
    id: 3,
    propertyName: '',
    propertyLocality: 'Central Park',
    propertyCity: 'Delhi',
    roomOptions: [],
    whoCanStay: [],
    propertyImages: [],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-row flex-wrap gap-8 justify-center items-center p-10">
      {mockProperties.map((property) => (
        <OperatorPropertyCard property={property} key={property.id} />
      ))}
    </div>
  );
}
