import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Film from "./Film";
import "./Films.scss";
import { getFilmData } from "../../../services/filmDetailsService";
import { useDispatch, useSelector } from "react-redux";
import { setFilmList } from "../../../store/filmListSlice";
import Loader from "../../../components/loader/Loader";

function Films() {
  const location = useLocation();
  const [filmData, setAllFilmData] = useState([]);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const filmListDetails = useSelector((state) => state?.filmList?.filmList);

  console.log("filmListDetails", filmListDetails);

  const getFilmDetails = async (eventiveTag = null) => {
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

          return (
            <Film
              key={filmItem?.id}
              coverImage={coverImage}
              title={filmItem?.title?.rendered}
              tags={filmItem.tags.map((tag) => tag.name).join(", ")}
              director={director?.name}
              runtime={filmItem?.acf?.runtime}
              accessibility={accessibility}
            />
          );
        })
      )}
    </div>
  );
}

export default Films;
