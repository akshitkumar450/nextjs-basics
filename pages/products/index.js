import Link from "next/link";

function products({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`} passHref>
            <p>
              {product.title} {product.price}
            </p>
          </Link>
          <p>**********</p>
        </div>
      ))}
    </div>
  );
}

export default products;
export async function getStaticProps() {
  const response = await fetch("http://localhost:4000/products");
  const data = await response.json();
  console.log("generating ");
  // return an object and object should contains a props key which is also an object
  return {
    props: {
      products: data,
    },
    revalidate: 10,
  };
}
