import { useRouter } from "next/router";

function ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return <div>productDetails for {productId}</div>;
}

export default ProductDetails;
// dynamic routes
// http://localhost:3000/product/2
// http://localhost:3000/product/3
// http://localhost:3000/product/4
