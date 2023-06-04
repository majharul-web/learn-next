import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { productId } = router.query;
  return (
    <div>
      <h1>Product Details of {productId}</h1>
    </div>
  );
};

export default ProductDetails;
