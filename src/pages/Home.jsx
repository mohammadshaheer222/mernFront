import Hero from "../components/Hero";
import NewCollections from "../components/NewCollections";
import NewsLetter from "../components/NewsLetter";
import Offer from "../components/Offer";
import Popular from "../components/Popular";
import Review from "../components/Review";

const Home = () => {
  return (
    <>
      <Hero />
      <Popular />
      <Offer />
      <NewCollections />
      <Review />
      <NewsLetter />
    </>
  );
};
export default Home;
