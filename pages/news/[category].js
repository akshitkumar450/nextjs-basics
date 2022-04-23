function Category({ articles, category }) {
  return (
    <div>
      <h1>{category}</h1>
      {articles.map((article) => (
        <p key={article.id}>{article.title}</p>
      ))}
    </div>
  );
}

export default Category;
export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  //   console.log(req, res);
  const response = await fetch(
    `http://localhost:4000/news?category=${params.category}`
  );
  const data = await response.json();
  // return an object and object should contains a props key which is also an object
  return {
    props: {
      articles: data,
      category: params.category,
    },
  };
}
