/* eslint-disable react/prop-types */
import Button from "../../../components/button/Button";
import Icon from "../../../components/icon/Icon";
import "./Film.scss";
import { iconMappings } from "../../../utils/utils";
import { useState } from "react";
import Modal from "../../../components/modal/Modal";

function Film(props) {
  const {
    coverImage,
    title,
    tags,
    director,
    runtime,
    accessibility,
    trailer,
    trailerUrl,
  } = props;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleClick = () => {
    alert(`Clicked on the "${title}" card`);
  };

  const renderAccessibilityIcons = () => {
    return accessibility?.map((item) => {
      const iconProps = iconMappings[item?.slug];
      if (iconProps) {
        return (
          <Icon
            src={iconProps.src}
            size={iconProps.size}
            alt={iconProps.alt}
            tooltip={item?.description}
            key={item.term_id}
          />
        );
      }
      return null;
    });
  };

  return (
    <div className="card">
      <div onClick={handleClick}>
        <div
          className="card-cover-image"
          dangerouslySetInnerHTML={{ __html: coverImage }}
        />
      </div>

      <div className="card-header">
        <h2>{title}</h2>
      </div>

      <div className="card-body">
        <p>{tags}</p>
        <p>{director}</p>
        <p>Runtime: {runtime}</p>
      </div>
      <div className="card-footer-container">
        <div className="card-footer">
          <Button
            buttonText="Read more"
            buttonOnClick={() => {
              alert("Page under construction");
            }}
          />
          {trailer && (
            <Button
              buttonText="Watch Trailer"
              buttonOnClick={handleOpenModal}
            />
          )}
        </div>
        <div className="card-accessibility-icons">
          {renderAccessibilityIcons()}
        </div>
      </div>

      {/* Custom Modal for Trailer */}

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="modal-body">
          <iframe
            src={`${trailerUrl}?autoplay=1&muted=1`}
            allow="autoplay; fullscreen"
            title={title}
          ></iframe>
        </div>
      </Modal>
    </div>
  );
}

export default Film;
