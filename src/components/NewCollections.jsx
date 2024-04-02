import { useEffect, useState } from "react";
import axios from "axios";
import Item from "./Item";

const NewCollections = () => {
  const [allProducts, setAllProducts] = useState([])
  useEffect(() => {
    axios
      .get(`https://mernback-5-r5jk.onrender.com//api/v1/allproducts/newCollections`)
      .then((res) => {
        setAllProducts(res.data.newCollections);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <section className="bg-gray-100 xl:px-44">
      <div className="px-4 md:px-8 py-16">
        <h3 className="text-2xl font-bold text-center mb-6">
          Latest Products
        </h3>
        {/* <hr className="h-[3px] mx-auto md:w-1/2 bg-gradient-to-l from-transparent via-gray-500 to-transparent mb-16 text-center " /> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {allProducts.map((item) => (
            <Item
              key={item._id}
              id={item._id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default NewCollections;
