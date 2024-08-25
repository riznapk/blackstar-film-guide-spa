import "./Card.scss";

function Card(props) {
  const { coverImage, title, tags, director, runtime } = props;

  const handleClick = () => {
    alert(`Clicked on the "${title}" card`);
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

      <div className="card-footer">
        <button>Read More</button>
      </div>
    </div>
  );
}

export default Card;
