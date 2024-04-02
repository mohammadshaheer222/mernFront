import { Link } from "react-router-dom";

const Offer = () => {
    return(
        <Link to="/womens">
        <section className="w-full bg-bannerOffer bg-cover bg-center h-[500px] cursor-pointer">
            {/* <div className="px-4 space-y-3 md:px-8">
                <h1 className="text-4xl font-bold md:text-5xl">Summer Sale 50%</h1>
                <h1 className="text-3xl font-medium">Men's Leather Formal Wear Shoes</h1>
                <button className="btn-dark px-3 py-1 sm:px-6 sm:py-2">Go to Store</button>
            </div> */}
        </section>
        </Link>
    )
}
export default Offer;