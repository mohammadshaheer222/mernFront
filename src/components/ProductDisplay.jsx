import { useContext } from "react";
import Slider from "react-slick";
import { MdStar } from "react-icons/md";
import { ShopContext } from "../Context/ShopContext";
import ProductDescription from "./ProductDescription";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <MdOutlineArrowBackIosNew className="arrows" style={{ color: "black" }} />
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div onClick={onClick} className={`arrow ${className}`}>
      <MdOutlineArrowForwardIos className="arrows" style={{ color: "black" }} />
    </div>
  );
}

const ProductDisplay = ({ product }) => {
  const { image } = product;
  const { increment } = useContext(ShopContext);
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section>
      <div className="flex flex-col  gap-14 md:flex-row md:justify-start md:items-start md:gap-8 p-10">
        <div className="w-full md:w-[50%]">
          {image.length === 1 ? (
            <img src={image[0]} alt={"product image"} className="mx-auto w-full" />
          ) : (
            <Slider {...settings}>
              {image.map((photo, index) => (
                <div key={index}>
                  <img src={photo} alt={"product image"} className="mx-auto w-full" />
                </div>
              ))}
            </Slider>
          )}
        </div>

        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">{product.name}</h1>
          <div className="flex items-center gap-x-2 text-orange-500 mt-2">
            <MdStar />
            <MdStar />
            <MdStar />
            <MdStar />
            <p className="text-black">(111)</p>
          </div>
          <div className="flex items-center gap-x-4 my-2">
            <div className="font-medium text-gray-500 line-through text-sm">
              ${product.old_price}
            </div>
            <div className="font-bold">${product.new_price}</div>
          </div>
          <div className="mb-4">
            <h1 className="font-bold">Select Size:</h1>
            <div className="flex gap-4 my-3">
              <div className="ring-2 ring-slate-900 w-10 h-10 flex justify-center items-center cursor-pointer">
                S
              </div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flex justify-center items-center cursor-pointer">
                M
              </div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flex justify-center items-center cursor-pointer">
                L
              </div>
              <div className="ring-2 ring-slate-900/10 w-10 h-10 flex justify-center items-center cursor-pointer">
                XL
              </div>
            </div>
            <div className="flex flex-col gap-y-3 mb-4 max-w-[555px] md:w-[30%]">
              <button
                onClick={() => {
                  increment(product._id);
                }}
                className="btn-dark py-2 tracking-wider rounded-none"
              >
                Add to cart
              </button>
            </div>
            <p className="">
              <span className="font-bold">Category :</span> {product.category}
            </p>
            <p>
              <span className="font-bold">Tags :</span> Modern | Latest
            </p>
          </div>
          <ProductDescription />
        </div>
      </div>
    </section>
  );
};
export default ProductDisplay;
