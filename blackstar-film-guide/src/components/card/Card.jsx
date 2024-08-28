import Button from "../button/Button";
import Icon from "../icon/Icon";
import "./Card.scss";
import { iconMappings } from "../../utils/utils";

function Card(props) {
  const { coverImage, title, tags, director, runtime, accessibility } = props;

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
        <h1>{title}</h1>
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
              console.log("Button Read more Clicked");
            }}
          />
          <Button
            buttonText="Watch Trailer"
            buttonOnClick={() => {
              console.log("Watch Trailer");
            }}
          />
        </div>
        <div className="card-accessibility-icons">
          {renderAccessibilityIcons()}
        </div>
      </div>
    </div>
  );
}

export default Card;
