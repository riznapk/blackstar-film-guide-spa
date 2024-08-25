import axios from "axios";
import { useEffect, useState } from "react";
import Film from "./Film";
import "./Films.scss";

function Films() {
  const [filmData, setAllFilmData] = useState([]);
  const getAllFilmDetails = async () => {
    try {
      const response = await axios.get(
        "https://wp.blackstarfest.org/wp-json/wp/v2/festival-film?per_page=18&page=1&_year=2024&rich=1&not_hidden=1"
      );
      if (response?.data) {
        setAllFilmData(response?.data);
      }
    } catch (err) {
      return err;
    }
  };

  console.log("filmData", filmData);

  useEffect(() => {
    getAllFilmDetails();
  }, []);

  return (
    <div className="film-container">
      {filmData?.map((filmItem) => {
        const director = filmItem?.acf?.credits?.find(
          (credit) => credit.type === "Director"
        );
        const coverImage = filmItem?.acf?.cover_image;

        return (
          <Film
            key={filmItem?.id}
            coverImage={coverImage}
            title={filmItem?.title?.rendered}
            tags={filmItem.tags.map((tag) => tag.name).join(", ")}
            director={director?.name}
            runtime={filmItem?.acf?.runtime}
          />
        );
      })}
    </div>
  );
}

export default Films;
