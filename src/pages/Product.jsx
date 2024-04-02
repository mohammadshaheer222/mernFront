import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";
import RecentlyViewed from "../components/RecentlyViewed";

const Product = () => {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((item) => item._id === productId);
  if (!product) {
    return <div>Product Not Found</div>;

  }
  return (
    <section className=" px-4 py-28 md:fle flex-col md:justify-center md:items-center xl:px-44">
      <div>
        <ProductHd product={product} />
          <ProductDisplay product={product} />
        <RecentlyViewed />
      </div>
    </section>
  );
};
export default Product;
