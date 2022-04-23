import { useRouter } from "next/router";

function Post({ post }) {
  const router = useRouter();
  // meaning nextjs is generating html and json in background when props are not available
  if (router.isFallback) {
    return <h1>loaidng..</h1>;
  }
  return (
    <div>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
}

export default Post;
// use it when we have dynamic links
// provide values to support on dynamic page

// dynamic generated paths by fetching post id
// // possible vaues for post id
// export async function getStaticPaths() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();
//   const paths = data.map((post) => {
//     return {
//       params: {
//         postId: `${post.id}`,
//       },
//     };
//   });
//   return {
//     paths: paths,
//     fallback: false,
//   };
// }
// hardcoded the paths
export async function getStaticPaths() {
  return {
    // paths statically generated at build time
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
    ],
    // fallback: false,
    // paths returned from getStaticPaths will be rendered to HTML files at build time by getStaticProps
    // any path not returned by getStaticPaths will 404 page

    // fallback: true,
    // paths returned from getStaticPaths will be rendered to HTML files at build time by getStaticProps
    // any path not returned by getStaticPaths will not be 404 page rather it will show fallback version of the page on first request
    // in background nextjs will statically generate the requested path HTML and JSON.this includes running getStaticProps
    // if some path which was not returned from path then getStaticProps run and statically generate HTML and JSON in background
    //when json file is generated this we swapped from fallback page to full page

    fallback: "blocking",
    // paths returned from getStaticPaths will be rendered to HTML files at build time by getStaticProps
    // any path not returned by getStaticPaths will not 404 page instaead on first request nextjs will render the page on the server and return generated HTML
    // no loading indicator is shown if path is not retured else page will be generated at server and shown
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  // getting the params from url
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const data = await response.json();
  // if we have random id which do not have data
  // fallback->true
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  // return an object and object should contains a props key which is also an object
  return {
    props: {
      post: data,
    },
  };
}
