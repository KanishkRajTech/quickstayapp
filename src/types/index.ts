    
export type Property = {
  id: string;
  name: string;
  location: string;
  price: number;
  type: string;
  agreementDuration: string,
  anyExtraCharges: boolean,
propertyName: string;
  propertyAddress: string;
  mapUrl: string;
  propertyCode: string;
  propertyImages: {
    imageUrl: string;
    imageType: string;
  }[];
  propertyFeature: string[];
  roomOptions:{
   type: string;
    amount: number;
    totalBed: number;
  }[]
  wifiList: string[];
  houseRules: string[];
  securityDeposit: string;
  isActive: boolean;
  propertyStatus: string;
  propertyDescription: string;
 propertyLocality: string;
 propertyCity: string;
};

export type SearchFilters = {
  type: string;
  // Add additional filter fields as required
};



