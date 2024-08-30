import { useDispatch, useSelector } from "react-redux";
import { getFilmData } from "../../../services/filmDetailsService";
import { setFilmList } from "../../../store/filmListSlice";
import { useEffect, useState } from "react";

export const useFilms = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const filmListDetails = useSelector((state) => state?.filmList?.filmList);
  const queryParams = new URLSearchParams(location.search);
  const eventiveTag = queryParams.get("eventive-tag");

  const getFilmDetails = async (eventiveTag = null) => {
    setIsLoading(true);
    try {
      const data = await getFilmData(18, 1, 2024, eventiveTag);
      if (data) {
        setIsLoading(false);
        dispatch(setFilmList(data));
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!filmListDetails.length) {
      getFilmDetails(eventiveTag);
    }
  }, [location.search]);

  return { isLoading, filmListDetails };
};
