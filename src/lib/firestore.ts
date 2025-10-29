// src/lib/firestore.js (or .ts)

// 🚨 1. Import all necessary Firebase and project types 🚨
import { db } from "./firebase"; // Assuming db is exported from your firebase initialization file
import { collection, query, where, getDocs } from "firebase/firestore";
import { Property, SearchFilters } from "@/types/index"; // Adjust path

// Helper function (needs to be defined or imported)
// For now, it just checks the 'type' filter. Expand this as needed.
function applyFilters(property: Property, filters: SearchFilters): boolean {
    // Example filter: check if the property is suitable for the selected user type
    // You would add more complex logic here (e.g., rent range, amenities)
    if (filters.type === "student") {
        // You'd check a property field like `targetAudience`
        return true; 
    }
    return true; // Default to true if no specific logic is applied
}


// Search by location
export async function searchProperties(
  location: string,
  filters: SearchFilters
): Promise<{ data?: Property[]; error?: string }> {
  if (!location || typeof location !== "string") {
    return { error: "Invalid location provided." };
  }

  try {
    const propertiesRef = collection(db, "allProperties");
    // Initial Firestore query for mandatory conditions
    const q = query(
      propertiesRef,
      where('isActive', '==', true),
      where('propertyStatus', '==', 'Approved')
    );
    const querySnapshot = await getDocs(q);

    const lowerLocation = location.trim().toLowerCase();

    const results: Property[] = [];

    // The location search must be done client-side because Firestore 
    // does not support full-text search or 'OR' searches on multiple fields efficiently.
    querySnapshot.forEach((doc) => {
      const data = doc.data();

      const fullAddress = (data.propertyFullAddress || "")
        .trim()
        .toLowerCase();
      const city = (data.propertyCity || "").trim().toLowerCase();
      const locality = (data.propertyLocality || "").trim().toLowerCase();

      if (
        fullAddress.includes(lowerLocation) ||
        city.includes(lowerLocation) ||
        locality.includes(lowerLocation)
      ) {
        // Cast the data to your Property type
        const property: Property = { id: doc.id, ...data } as Property;
        
        // Apply the additional user-defined filters
        if (applyFilters(property, filters)) {
          results.push(property);
        }
      }
    });

    return { data: results };
  } catch (error) {
    console.error("Firestore Search Error:", error);
    return {
      error: "Failed to search for properties. Please check your connection or try again later.",
    };
  }
}