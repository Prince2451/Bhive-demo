import { useQuery } from "@tanstack/react-query";
import homepageKeys from "./keys";
import { getSpaceAreas } from "../../services/homepage";

function useSpaces() {
  const query = useQuery({
    queryKey: homepageKeys.spaces,
    queryFn: getSpaceAreas,
  });

  return query;
}

export default useSpaces;
