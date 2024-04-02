import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <Link to="/mens">
      <div className="relative bg-heroXs sm:bg-hero bg-cover bg-no-repeat h-screen w-full cursor-pointer"></div>
    </Link>
  );
};

export default Hero;
