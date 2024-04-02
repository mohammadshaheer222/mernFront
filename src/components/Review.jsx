import Slider from "react-slick";
import { MdStar } from "react-icons/md";

const Review = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const reviews = [
    {
      name: "John",
      message:
        "I was really impressed by the fabric and the stitching,They were so nice that my girlfriend had me buy her a shirt",
    },
    {
      name: "Adeeb Don",
      message: "Uncomprimised product,I am very satisfied with this product",
    },
    {
      name: "Dain",
      message:
        "Extremely comfortable pants that you can wear bum around at home, with a decent shirt and head out",
    },
    {
      name: "Marry",
      message:
        "What a genuine piece,i love my new t-shirt.Going to wear them for my next occassion!! ",
    },
    {
      name: "Ravis",
      message: "Totally love it!I love the quality of pants",
    },
  ];
  return (
    <div className="py-8">
      <Slider {...settings}>
        {reviews.map((review) => (
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-x-2">
              <MdStar size={25} />
              <MdStar size={25} />
              <MdStar size={25} />
              <MdStar size={25} />
            </div>
            <h1 className="text-lg">{review.message}</h1>
            <h1 className="italic font-light">-{review.name}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Review;
