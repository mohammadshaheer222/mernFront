import { TbArrowRight } from "react-icons/tb";

const ProductHd = ({ product }) => {
  return (
    <div className="flex items-center text-gray-500 flex-wrap font-semibold my-4 capitalize">
      Home <TbArrowRight /> Shop <TbArrowRight /> {product.category}{" "}
      <TbArrowRight /> {product.name}
    </div>
  );
};
export default ProductHd;
