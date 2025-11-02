
import { z } from 'zod';
import { Video, MapPin, Phone } from 'lucide-react';

export const roomSharingOptions = ["Single", "Double", "Triple", "Triple+"] as const;
export const securityDepositOptions = ["15 days", "1 Month", "2 Month", "3 Month"] as const;
export const whoCanStayOptions = ["Male", "Female", "Couple", "Family", "Unisex"] as const;
export const bestSuitedForOptions = ["Working Professional", "Entrepreneur", "Family", "Student"] as const;
export const furnishingPropertyOptions = ["AC", "Geyser", "TV", "Washing Machine", "Fridge", "RO"] as const;
export const houseRulesOptions = ["No Smoking", "No Alcohol", "No Loud Music", "Visitors Not Allowed", "Gate Closing Time"] as const;

// New options based on the detailed model
export const servicesFeatureOptions = ["Food", "WiFi", "Laundry", "Housekeeping"] as const;
export const propertyFeatureOptions = ["Power Backup", "CCTV", "Lift", "Parking"] as const;
export const primeFeatureOptions = ["Attached Balcony", "Attached Bathroom", "Common Area"] as const;
export const furnishingRoomOptions = ["Bed", "Mattress", "Wardrobe", "Study Table"] as const;
export const furnishedStatusOptions = ["Fully Furnished", "Semi-Furnished", "Unfurnished"] as const;
export const unitTypesOptions = ["1RK", "1BHK", "2BHK", "3BHK", "4BHK+"] as const;
export const genderOptions = ["Male", "Female", "Other"] as const;

export const bookingTypes = [
  { key: "Video Tour", icon: Video, label: "Video tour" },
  { key: "Visit", icon: MapPin, label: "Visit Property" },
  { key: "Phone Call", icon: Phone, label: "Phone Call" },
] as const;
export type BookingType = typeof bookingTypes[number]['key'];


export const RoomOptionSchema = z.object({
  type: z.enum(roomSharingOptions),
  amount: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number({ invalid_type_error: "Amount must be a number." }).positive("Amount must be a positive number.").optional()
  ),
  token: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number({ invalid_type_error: "Token amount must be a number." }).positive().optional()
  ),
  vacantBeds: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number({ invalid_type_error: "Vacant beds must be a number." }).int().min(0).optional()
  ),
  features: z.array(z.string()).optional(),
});

export type RoomOption = z.infer<typeof RoomOptionSchema>;

export const WIFISchema = z.object({
  providerName: z.string().min(1, "Provider name is required."),
  speed: z.string().min(1, "Speed is required."),
});

export type WIFIModel = z.infer<typeof WIFISchema>;

export const OtherChargesSchema = z.object({
    name: z.string().min(1, 'Charge name is required.'),
    amount: z.preprocess(
        (val) => (val === "" || val === null ? undefined : val),
        z.coerce.number({ invalid_type_error: "Amount must be a number." }).positive("Amount must be a positive number.").optional()
    ),
});
export type OtherCharges = z.infer<typeof OtherChargesSchema>;


export const PropertySchema = z.object({
  // operatorId is from the model
  operatorId: z.string().min(1, "Operator ID is required."),
  
  // Property Info
  propertyName: z.string().min(3, "Property name is required."),
  propertyCode: z.string().min(1, "Property code is required."),
  propertyDescription: z.string().optional(),
  propertyImages: z.array(z.any()).optional(),
  unitTypes: z.array(z.string()).optional(),
  totalBeds: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number({ invalid_type_error: "Total beds must be a number" }).int().positive().optional()
  ),
  
  // Location Info
  propertyFullAddress: z.string().optional(),
  propertyHounseNo: z.string().optional(),
  propertyCity: z.string().optional(),
  propertyState: z.string().optional(),
  propertyPincode: z.string().optional(),
  propertyLocality: z.string().optional(),
  propertyLocationUrl: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  landmarks: z.preprocess(
    (val) => {
      if (!val || typeof val !== 'string') {
        return val; 
      }
      return val.split(',').map(s => s.trim()).filter(Boolean);
    },
    z.array(z.string()).optional()
  ), 
  totalFloor: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number({ invalid_type_error: "Total floors must be a number" }).int().positive().optional()
  ),
  startFromGround: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number({ invalid_type_error: "Starting floor must be a number." }).int().optional()
  ),

  // Features & Furnishing
  servicesFeature: z.array(z.string()).optional(),
  propertyFeature: z.array(z.string()).optional(),
  primeFeature: z.array(z.string()).optional(),
  furnishedStatus: z.enum(furnishedStatusOptions).optional(),
  furnishingProperty: z.array(z.string()).optional(),
  furnishingRoom: z.array(z.string()).optional(),
  
  // Occupant Info
  whoCanStay: z.array(z.string()).optional(),
  bestSuitedFor: z.array(z.string()).optional(),
  limitNoOfGuest: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number({ invalid_type_error: "Guest limit must be a number" }).int().positive().optional()
  ),
  houseRules: z.array(z.string()).optional(),

  // Room and Pricing (Simplified from RoomOption model)
  roomOptions: z.array(RoomOptionSchema).optional(),

  wifiList: z.array(WIFISchema).optional(),

  // Rental Terms
  securityDeposit: z.enum(securityDepositOptions).optional(),
  agreementDuration: z.string().optional(),
  lockInPeriod: z.string().optional(),
  noticePeriod: z.string().optional(),
  rentMonthlyCycle: z.string().optional(),
  gracePeriod: z.string().optional(),
  isLateFine: z.boolean().default(false).optional(),
  lateFineAmount: z.preprocess(
    (val) => (val === "" || val === null ? undefined : val),
    z.coerce.number({ invalid_type_error: "Late fine must be a number" }).positive().optional()
  ),
  anyExtraCharges: z.boolean().default(false).optional(),
  otherChargesList: z.array(OtherChargesSchema).optional(),
  prepaidElectricMeter: z.boolean().default(false).optional(),
  prepaidMeterLink: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
  
  // Hidden fields
  isActive: z.boolean().default(true),
  propertyStatus: z.string().default('Pending'),
}).refine(data => {
    if (data.isLateFine && (data.lateFineAmount === undefined || data.lateFineAmount <= 0)) {
        return false;
    }
    return true;
}, {
    message: "Late fine amount must be a positive number if late fines are enabled.",
    path: ["lateFineAmount"],
}).refine(data => {
    if (data.anyExtraCharges && (!data.otherChargesList || data.otherChargesList.length === 0)) {
        return false;
    }
    return true;
}, {
    message: "Please add at least one charge or disable this option.",
    path: ["otherChargesList"],
});


export type PropertyFormData = z.infer<typeof PropertySchema>;

export type Property = PropertyFormData & {
  id: string;
};

// Schema for the lead form
export const LeadSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    mobileNumber: z.string().regex(/^\d{10}$/, { message: "Please enter a valid 10-digit phone number." }),
    emailID: z.string().email({ message: "Please enter a valid email address." }),
    gender: z.enum(genderOptions),
    type: z.enum(["Video Tour", "Visit", "Phone Call"]),
    day: z.date(),
    timeSlot: z.string(),
    operatorId: z.string(),
    propertyId: z.string(),
    propertyCode: z.string(),
    propertyName: z.string(),
    propertyAddress: z.string(),
    mapUrl: z.string().url().or(z.literal('')),
    propertyImage: z.string().url().or(z.literal('')),
});

export type LeadFormData = Pick<z.infer<typeof LeadSchema>, 'name' | 'mobileNumber' | 'emailID' | 'gender'>;
export type LeadDataForAction = z.infer<typeof LeadSchema>;


// Update Search Filters
export interface SearchFilters {
  whoCanStay?: string[];
  bestSuitedFor?: string[];
  priceRange?: [number, number];
  securityDeposit?: string[];
}
