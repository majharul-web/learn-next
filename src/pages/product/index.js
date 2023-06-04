import { useRouter } from "next/router";

const Product = () => {
  const router = useRouter();
  const handlePlaceOrder = () => {
    router.push("/");
  };
  return (
    <div>
      <ul>
        <li>Product 1</li>
        <li>Product 2</li>
        <li>Product 3</li>
        <button onClick={() => handlePlaceOrder()}>place order</button>
      </ul>
    </div>
  );
};

export default Product;
