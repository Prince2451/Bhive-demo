export interface SpaceAreaAPIRes {
  id: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  google_maps_url: string;
  city: string;
  state: string;
  country: string;
  postal_code: string;
  description: null;
  rules: null;
  amenities: Array<string>;
  images: Array<string>;
  working_hours_start: string;
  working_hours_end: string;
  contact_person_name: string;
  facilities: null;
  is_active: true;
  is_day_pass_enabled: boolean;
  day_pass_price: number;
  day_pass_discounts_percentage: {
    "1": {
      value: number;
      message: string;
    };
    "10": {
      value: number;
      message: string;
    };
  };
  manager_id: null;
}

export interface SpaceArea {
  name: string;
  images: Array<string>;
  isDayPassEnabled?: boolean;
  dayPassPrice: number;
  bulkPassPrice: number;
  bulkPassDuration: string;
  defaultImageUrl: string;
  discountText: string;
  amenities: Array<string>
}