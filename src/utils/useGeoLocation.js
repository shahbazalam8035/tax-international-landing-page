import { useState, useEffect } from "react";
import axios from "axios";

const useGeoLocation = () => {
  const [geoResponse, setGeoResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGeoLocationData = async () => {
      try {
        const response = await axios.get("https://api.country.is");
        setGeoResponse(response.data ?? null);
      } catch (error) {
        setError(error);
        console.log("Error fetching geolocation data:", error);
        setGeoResponse(null)
      } finally {
        setIsLoading(false);
      }
    };

    fetchGeoLocationData();
  }, []);

  return { geoResponse, isLoading, error };
};

export default useGeoLocation;
