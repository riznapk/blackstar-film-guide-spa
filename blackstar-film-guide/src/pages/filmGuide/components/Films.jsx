import "./Films.scss";
import Loader from "../../../components/loader/Loader";
import { extractTrailerUrl } from "../../../utils/utils";
import Film from "./Film";
import { useFilms } from "../hooks/useFilms";

function Films() {
  const { isLoading, filmListDetails } = useFilms();

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
