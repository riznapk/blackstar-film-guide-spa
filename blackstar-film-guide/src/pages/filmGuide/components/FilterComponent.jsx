import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./FilterComponent.scss";
import filterIcon from "../../../assets/images/filter-icon.png";
import { categoryList } from "../../../utils/constants";
import Accordion from "../../../components/accordion/Accordion";
import { getFilmData } from "../../../services/filmDetailsService";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { filterFilmDetailsByTag } from "../../../store/filmListSlice";
import closeIcon from "../../../assets/images/close-button.png";
import Loader from "../../../components/loader/Loader";
import { Tooltip } from "@mui/material";

function FilterComponent({ setPage }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isAccordionOpen, setAccordionOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  //toggle accordion open/close
  const toggleAccordion = () => {
    setAccordionOpen((prevAccordionState) => !prevAccordionState);
  };

  //handle checkbox selection
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    setSelectedCategories((prevSelected) => {
      if (e.target.checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((item) => item !== value);
      }
    });
  };

  const getFilmFilterByCategories = async () => {
    setIsLoading(true);
    try {
      const data = await getFilmData(18, 1, 2024, selectedCategories.join(","));
      if (data) {
        setIsLoading(false);
        dispatch(filterFilmDetailsByTag(data));
        if (selectedCategories?.length === 0) {
          setPage(1);
          navigate("/festival/film-guide");
        } else
          navigate(
            `/festival/film-guide/?eventive-tag=${selectedCategories.join(",")}`
          );
      }
    } catch (err) {
      console.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  //side effect to handle the filter selection
  useEffect(() => {
    setPage(1);
    if (selectedCategories?.length >= 0) {
      getFilmFilterByCategories();
    }
  }, [selectedCategories]);

  // Extract query parameters from URL
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const eventiveTag = queryParams.get("eventive-tag");

    if (eventiveTag) {
      const categories = decodeURIComponent(eventiveTag).split(",");
      setSelectedCategories(categories);
    }
  }, [location.search]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="filter-component">
          <div
            className={`filter-header ${
              isAccordionOpen ? "accordion-open" : ""
            }`}
          >
            <div className="filter-title">
              <h1>FILMS A-Z</h1>
            </div>
            <div className="filter-icon" onClick={toggleAccordion}>
              <Tooltip title="Filter" placement="top" arrow>
                <img
                  src={filterIcon}
                  className="close-icon"
                  alt="Filter Icon"
                />
              </Tooltip>
            </div>
          </div>
          {isAccordionOpen && (
            <div className="filter-accordion">
              <div className="filter-header-accordion">
                <h3>Filter by</h3>
                <img
                  src={closeIcon}
                  alt="Close Icon"
                  onClick={toggleAccordion}
                />
              </div>
              <div className="filter-option">
                <Accordion
                  label="Category"
                  name="category-accordion"
                  defaultOpen={selectedCategories.length === 0 ? false : true}
                  content={
                    <div className="filter-options">
                      {categoryList.map((item) => (
                        <div key={item.term_id} className="checkbox-group">
                          <input
                            type="checkbox"
                            id={`category-${item?.term_id}`}
                            value={item?.term_id}
                            checked={selectedCategories.includes(
                              item.term_id.toString()
                            )}
                            onChange={handleCheckboxChange}
                          />
                          <label htmlFor={`category-${item?.term_id}`}>
                            {item?.name}
                          </label>
                        </div>
                      ))}
                    </div>
                  }
                />
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

FilterComponent.propTypes = {
  setPage: PropTypes.func,
};

export default FilterComponent;
