import Films from "./components";
import "./FilmGuide.scss";
import Button from "../../components/button/Button";
import { getFilmData } from "../../services/filmDetailsService";
import { useDispatch, useSelector } from "react-redux";
import { addFilmDetailsToList } from "../../store/filmListSlice";
import { useEffect, useState } from "react";
import FilterComponent from "../../components/filterComponent/filterComponent";
import Loader from "../../components/loader/Loader";
import { useLocation } from "react-router-dom";

function FilmGuide() {
  const dispatch = useDispatch();
  const location = useLocation();
  const filmDetailsList = useSelector((state) => state?.filmList?.filmList);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [eventiveTag, setEventiveTag] = useState(null);
  const [filmDataLength, setFilmDataLength] = useState(0);

  const handleClick = () => {
    const newPage = page + 1;
    setPage(newPage);
    setIsLoading(true);
    getNextPageFilmData(newPage);
  };

  const getNextPageFilmData = async (pageNumber) => {
    try {
      console.log("hi from next page");
      console.log("evengtivetag", eventiveTag, pageNumber);
      const data = await getFilmData(18, pageNumber, 2024, eventiveTag);
      console.log("eventivetag nextpage", eventiveTag);
      if (data) {
        setIsLoading(false);
        // setFilmDataReceived(data);
        console.log("LENGTH", data?.length);
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

  //for setting the data length

  return (
    <>
      <div className="container">
        {isLoading && <Loader />}
        <FilterComponent page={page} setPage={setPage} />
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
