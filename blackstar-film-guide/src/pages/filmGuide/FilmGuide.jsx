import Films from "./components";
import "./FilmGuide.scss";
import Button from "../../components/button/Button";
import { useSelector } from "react-redux";
import FilterComponent from "./components/FilterComponent";
import Loader from "../../components/loader/Loader";
import { useFilmGuide } from "./hooks/useFilmGuide";

function FilmGuide() {
  const filmDetailsList = useSelector((state) => state?.filmList?.filmList);
  const { isLoading, handleClick, setPage } = useFilmGuide();

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
