import React from "react";
import { useRouter } from "next/router";

function ReviewID() {
  const router = useRouter();
  const productId = router.query.productId;
  const reviewId = router.query.reviewId;
  return (
    <div>
      product {productId} ReviewID {reviewId}
    </div>
  );
}

export default ReviewID;
// http://localhost:3000/product/1/review/5
// nested dynamic routes
