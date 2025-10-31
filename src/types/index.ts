    
export type Property = {
  id: string;
  name: string;
  location: string;
  price: number;
  type: string;
  // Add other relevant property fields here
};

export type SearchFilters = {
  type: string;
  // Add additional filter fields as required
};
