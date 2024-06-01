import { SpaceAreaAPIRes, SpaceArea } from "../types/homepage";
import apiUrls from "./apiUrls";
import axiosInstance, { BASE_URL } from "./axios";

async function getSpaceAreas(): Promise<SpaceArea[]> {
  const { data } = await axiosInstance.get<SpaceAreaAPIRes[]>(
    apiUrls.homepage.spaces,
    { responseType: "json" }
  );
  return data.map((ele) => ({
    name: ele.name,
    images: ele.images.map((image) => BASE_URL + image),
    bulkPassDuration: "10 Days",
    bulkPassPrice:
      ele.day_pass_price * 10 -
      (ele.day_pass_price * 10 * ele.day_pass_discounts_percentage[10].value) /
        100,
    dayPassPrice: ele.day_pass_price,
    isDayPassEnabled: ele.is_day_pass_enabled,
    defaultImageUrl: ele.images.length ? BASE_URL + ele.images[0] : "",
    discountText: `${ele.day_pass_discounts_percentage[10].value}% Discount`,
    amenities: ele.amenities || [],
  }));
}

export { getSpaceAreas };
