import axios from "axios";
import Item from "./Item";
import { useEffect, useState } from "react";

const RecentlyViewed = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const recentlyViewed = JSON.parse(localStorage.getItem("products")) || [];
    console.log(recentlyViewed)
    axios
      .get(
        `https://backend-hqzy.onrender.com/api/v1/allproducts/recentlyViewed/${recentlyViewed}`
      )
      .then((res) => {
        setAllProducts([res.data.recentlyViewedProducts]);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <section className=" pb-10">
      {allProducts.length > 0 && (
        <div>
          <div className=" py-6 ">
            <h3 className="text-2xl  font-bold text-center mb-6">
              Recently Viewed Products
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
              {allProducts.map((item) =>
                item.map((item) => (
                  <div key={item._id} className="px-2 w-full">
                    <Item
                      id={item._id}
                      image={item.image[0]}
                      name={item.name}
                      new_price={item.new_price}
                      old_price={item.old_price}
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
export default RecentlyViewed;
