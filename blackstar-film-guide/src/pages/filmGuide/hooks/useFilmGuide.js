import { useEffect, useState } from "react";
import { getFilmData } from "../../../services/filmDetailsService";
import { useDispatch } from "react-redux";
import { addFilmDetailsToList } from "../../../store/filmListSlice";

export const useFilmGuide = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [eventiveTag, setEventiveTag] = useState(null);
  const queryParams = new URLSearchParams(location.search);
  const handleClick = () => {
    const newPage = page + 1;
    setPage(newPage);
    setIsLoading(true);
    getNextPageFilmData(newPage);
  };
  const getNextPageFilmData = async (pageNumber) => {
    try {
      const data = await getFilmData(18, pageNumber, 2024, eventiveTag);
      if (data) {
        setIsLoading(false);
        dispatch(addFilmDetailsToList(data));
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setEventiveTag(queryParams.get("eventive-tag"));
  }, [location.search]);

  return { isLoading, handleClick, setPage };
};
