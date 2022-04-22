import Link from "next/link";

function product({ productId = 10 }) {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br />
      <Link href={`/product/${productId}`}>
        <a>Product {productId}</a>
      </Link>
      <Link href="/product/1">
        <a>Product1</a>
      </Link>
      <Link href="/product/2">
        <a>Product2</a>
      </Link>
      <Link href="/product/3" replace>
        <a>Product3</a>
      </Link>
      <h1>product1</h1>
      <h1>product2</h1>
      <h1>product3</h1>
    </div>
  );
}

export default product;
