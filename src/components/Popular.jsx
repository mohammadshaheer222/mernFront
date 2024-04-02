import axios from "axios";
import Item from "./Item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import { useEffect, useState } from "react";

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

const Popular = () => {
  const [allProducts, setAllProducts] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 648,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  useEffect(() => {
    axios
      .get(`http://localhost:2000/api/v1/allproducts/popularProducts`)
      .then((res) => {
        setAllProducts(res.data.popularProducts);
      })
      .catch((error) => console.log(error));
  }, []);
  
  return (
    <section className="bg-gray-100 pb-10">
      <div className="px-4 md:px-8 py-6 ">
        <h3 className="text-2xl  font-bold text-center mb-6">
          Popular Products
        </h3>
        <Slider {...settings} className="py-4">
          {allProducts.map((item) => (
            <div key={item._id} className="px-2">
              <Item
                id={item._id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
export default Popular;
