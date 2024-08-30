import Films from "./components";
import "./FilmGuide.scss";
import Button from "../../components/button/Button";
import { getFilmData } from "../../services/filmDetailsService";
import { useDispatch, useSelector } from "react-redux";
import { addFilmDetailsToList } from "../../store/filmListSlice";
import { useEffect, useState } from "react";
import FilterComponent from "./components/FilterComponent";
import Loader from "../../components/loader/Loader";
import { useLocation } from "react-router-dom";

function FilmGuide() {
  const dispatch = useDispatch();
  const location = useLocation();
  const filmDetailsList = useSelector((state) => state?.filmList?.filmList);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [eventiveTag, setEventiveTag] = useState(null);

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
    const queryParams = new URLSearchParams(location.search);
    setEventiveTag(queryParams.get("eventive-tag"));
  }, [location.search]);

  return (
    <>
      <div className="container">
        {isLoading && <Loader />}
        <FilterComponent setPage={setPage} />
        <Films />
        {filmDetailsList?.length % 18 === 0 && (
          <div className="load-more">
            <Button buttonOnClick={handleClick} buttonText="Load more" />
          </div>
        )}
      </div>
    </>
  );
}

export default FilmGuide;
