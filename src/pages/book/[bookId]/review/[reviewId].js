import { useRouter } from "next/router";
import React from "react";

const Review = () => {
  const router = useRouter();
  const { bookId, reviewId } = router.query;
  return (
    <div>
      <h3>
        Book:{bookId} and Review:{reviewId}
      </h3>
    </div>
  );
};

export default Review;
