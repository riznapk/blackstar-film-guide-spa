import Card from "../../../components/card/Card";
function Film({ coverImage, title, tags, director, runtime }) {
  return (
    <Card
      coverImage={coverImage}
      title={title}
      tags={tags}
      director={director}
      runtime={runtime}
    />
  );
}

export default Film;
