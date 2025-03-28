import { useParams } from "react-router-dom";

const ProductDetail = () => {
  // Extract productId from URL parameters
  const { productId } = useParams();

  return (
    <div>
      <h1>Product Details</h1>
      <p>Viewing product with ID: {productId}</p>
      {/* You can now use productId to fetch product data */}
    </div>
  );
};

export default ProductDetail;
