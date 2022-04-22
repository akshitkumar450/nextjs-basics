function post({ post }) {
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}

export default post;
// use it when we have dynamic links
// provide values to support on dynamic page

// dynamic generated paths by fetching post id
export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  const paths = data.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}
// hardcoded the paths
// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: { postId: "1" },
//       },
//       {
//         params: { postId: "2" },
//       },
//       {
//         params: { postId: "3" },
//       },
//     ],
//     fallback: false,
//   };
// }

export async function getStaticProps(context) {
  // console.log(context);
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  // return an object and object should contains a props key which is also an object
  return {
    props: {
      post: data,
    },
  };
}
