import { useRouter } from "next/router";

function Post({ product }) {
  const router = useRouter();
  // meaning nextjs is generating html and json in background when props are not available
  if (router.isFallback) {
    return <h1>loaidng..</h1>;
  }
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default Post;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { productId: "1" },
      },
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `http://localhost:4000/products/${params.productId}`
  );
  const data = await response.json();
  // fallback->true
  if (!data.id) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product: data,
    },
    revalidate: 10,
  };
}
