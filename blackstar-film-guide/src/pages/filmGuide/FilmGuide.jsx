import Header from "../../components/Header";
import Films from "./components";

import "./FilmGuide.scss";
import TabsComponent from "../../components/tabsComponent/TabsComponent";
import Button from "../../components/button/Button";
import { getFilmData } from "../../services/filmDetailsService";
import { useDispatch } from "react-redux";
import { addFilmDetailsToList } from "../../store/filmListSlice";
import { useEffect, useState } from "react";
import FilterComponent from "../../components/filterComponent/filterComponent";
import Loader from "../../components/loader/Loader";
import { useLocation } from "react-router-dom";

function FilmGuide() {
  const dispatch = useDispatch();
  const location = useLocation();
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
      console.log("hi from next page");
      const data = await getFilmData(18, pageNumber, 2024, eventiveTag);
      console.log("eventivetag nextpage", eventiveTag);
      if (data) {
        setIsLoading(false);
        dispatch(addFilmDetailsToList(data));
      }
    } catch (err) {
      setIsLoading(false);
      console.error(err.message);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    setEventiveTag(queryParams.get("eventive-tag"));
  }, [location.search]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="container">
          <FilterComponent />
          <Films />
          <div className="load-more">
            <Button buttonOnClick={handleClick} buttonText="Load more" />
          </div>
        </div>
      )}
    </>
  );
}

export default FilmGuide;
