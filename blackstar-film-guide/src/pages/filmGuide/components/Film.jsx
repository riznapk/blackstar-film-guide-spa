import Card from "../../../components/card/Card";
function Film({ coverImage, title, tags, director, runtime, accessibility }) {
  return (
    <Card
      coverImage={coverImage}
      title={title}
      tags={tags}
      director={director}
      runtime={runtime}
      accessibility={accessibility}
    />
  );
}

export default Film;
