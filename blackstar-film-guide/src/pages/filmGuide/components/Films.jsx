import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Films.scss";
import { getFilmData } from "../../../services/filmDetailsService";
import { useDispatch, useSelector } from "react-redux";
import { setFilmList } from "../../../store/filmListSlice";
import Loader from "../../../components/loader/Loader";
import { extractTrailerUrl } from "../../../utils/utils";
import Film from "./Film";

function Films() {
  const location = useLocation();
  const [filmData, setAllFilmData] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const filmListDetails = useSelector((state) => state?.filmList?.filmList);

  console.log("filmListDetails", filmListDetails);

  const getFilmDetails = async (eventiveTag = null) => {
    console.log("am i called here");
    try {
      const data = await getFilmData(18, 1, 2024, eventiveTag);
      if (data) {
        setIsLoading(false);
        setAllFilmData(data);
        dispatch(setFilmList(data));
      }
    } catch (err) {
      console.error(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!filmListDetails.length) {
      console.log("-------------------------------------");
      const queryParams = new URLSearchParams(location.search);
      const eventiveTag = queryParams.get("eventive-tag");
      getFilmDetails(eventiveTag);
      setIsLoading(true);
    }
  }, [location.search]);

  return (
    <div className="film-container">
      {isLoading ? (
        <Loader />
      ) : (
        filmListDetails?.map((filmItem) => {
          const director = filmItem?.acf?.credits?.find(
            (credit) => credit.type === "Director"
          );
          const coverImage = filmItem?.acf?.cover_image;
          const accessibility = filmItem?.accessibility;
          const trailer = filmItem?.acf?.trailer;
          const trailerUrl = extractTrailerUrl(trailer, filmItem?.acf?.trailer);

          return (
            <Film
              key={filmItem?.id}
              coverImage={coverImage}
              title={filmItem?.title?.rendered}
              tags={filmItem.tags.map((tag) => tag.name).join(", ")}
              director={director?.name}
              runtime={filmItem?.acf?.runtime}
              accessibility={accessibility}
              trailer={trailer}
              trailerUrl={trailerUrl}
            />
          );
        })
      )}
    </div>
  );
}

export default Films;
