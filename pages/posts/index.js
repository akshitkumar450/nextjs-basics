import Link from "next/link";

function post({ posts }) {
  return (
    <div>
      posts {posts.length}
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <p>{post.title}</p>
          </Link>
          <p>**********</p>
        </div>
      ))}
    </div>
  );
}

export default post;
export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  // return an object and object should contains a props key which is also an object
  return {
    props: {
      posts: data,
    },
  };
}
