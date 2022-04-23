function News({ news }) {
  return (
    <div>
      all News
      {news.map((article) => (
        <p key={article.id}>{article.title}</p>
      ))}
    </div>
  );
}

export default News;
// html is generated on server and returned (slower than static generation)
// called on server in every request
// will run at request time
// html is not generated on build time
export async function getServerSideProps(context) {
  // make a file .env.local in root for env variables
  // console.log(process.env.DB_USER, "*********");
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  // return an object and object should contains a props key which is also an object
  return {
    props: {
      news: data,
    },
  };
}
