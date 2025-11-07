// src/lib/firestore.ts

// 🚨 1. Import all necessary Firebase and project types 🚨
import { db } from "./firebase"; // Assuming db is exported from your firebase initialization file
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore"; // Added doc and getDoc
import type { Property, SearchFilters } from "@/types/index"; // Ensure correct types are imported

// Helper function (needs to be defined or imported)
function applyFilters(property: Property, filters: SearchFilters): boolean {
    // Example filter: check if the property is suitable for the selected user type
    // You would add more complex logic here (e.g., rent range, amenities)
    if (filters.type === "student") {
        // You'd check a property field like `targetAudience`
        return true; 
    }
    return true; // Default to true if no specific logic is applied
}

// --- EXISTING SEARCH FUNCTION (UNCHANGED) ---

// Search by location
export async function searchProperties(
    location: string,
    filters: SearchFilters
): Promise<{ data?: Property[]; error?: string }> {
    if (!location || typeof location !== "string" || location.trim() === "") {
        // Updated check to include empty string, resolving the original error trigger
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

        // Client-side filtering based on location
        querySnapshot.forEach((firestoreDoc) => {
            const data = firestoreDoc.data();

            const fullAddress = (data.propertyFullAddress || "").trim().toLowerCase();
            const city = (data.propertyCity || "").trim().toLowerCase();
            const locality = (data.propertyLocality || "").trim().toLowerCase();

            if (
                fullAddress.includes(lowerLocation) ||
                city.includes(lowerLocation) ||
                locality.includes(lowerLocation)
            ) {
                // Cast the data to your Property type
                const property: Property = { id: firestoreDoc.id, ...data } as Property;
                
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

// --- NEW GET PROPERTY BY ID FUNCTION ---

/**
 * Fetches a single property by its ID.
 * @param propertyId The unique ID of the property document.
 */
export async function getPropertyById(propertyId: string): Promise<{ data: Property | null; error: string | null }> {
    try {
        if (!propertyId) {
            return { data: null, error: "Property ID is required." };
        }
        
        // Reference the specific document in the 'allProperties' collection
        const propertyRef = doc(db, "allProperties", propertyId); 
        const docSnap = await getDoc(propertyRef);

        if (docSnap.exists()) {
            const propertyData = docSnap.data();
            // Construct the Property object including the ID
            const property: Property = {
                id: docSnap.id,
                ...propertyData,
            } as Property;
            return { data: property, error: null };
        } else {
            return { data: null, error: "Property not found." };
        }
    } catch (e) {
        console.error("Error fetching property by ID:", e);
        return { data: null, error: "Failed to load property details due to a database error." };
    }
}