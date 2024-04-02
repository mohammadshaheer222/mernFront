import React, { useContext, useEffect, useRef, useState } from "react";
import Item from "../components/Item";
import Pagination from "../components/Pagination";
import Filtering from "../components/Filtering";
import { PaginationContext } from "../Context/PaginationContext";

const Category = ({category}) => {
  const {
    products,
    min,
    max,
    limit,
    page,
    setPage,
    handlePriceRange,
    setSearch,
  } = useContext(PaginationContext);


  const filterProducts = products.filter(
    (product) => product.category === category
  );

  useEffect(() => {
    setPage(1)
  }, [category, setPage]);

  const lastIndex = page * limit; //1*8 = 8
  const firstIndex = lastIndex - limit; //8-8 =0
  const currentProduct = filterProducts.slice(firstIndex, lastIndex); //0,8

  return (
    <section className="px-4 md:px-8 py-28 xl:py-26 ">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-medium">Essentials</h1>
      </div>
      <div className="flex justify-center">
        <input
          onChange={(event) => setSearch(event.target.value)}
          type="search"
          placeholder="Search Your Prouducts Here.."
          className="bg-[#E5E7EB] w-full py-2 px-4 text-center outline-none sm:w-[30%]"
        />
      </div>

      <div className="flex flex-col justify-start items-start sm:flex-row sm:justify-between w-full  gap-y-4 xl:px-44 sm:mb-4 ">
        <Filtering min={min} max={max} handlePriceRange={handlePriceRange} />

        <div>
          <h1 className="text-start text-gray-500 mb-4">
            {currentProduct.length} products
          </h1>
        </div>
      </div>
      {currentProduct == 0 ? (
        <div className="text-center text-lg font-medium text-gray-500">
          No Product Found
        </div>
      ) : (
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 xl:px-44">
          {currentProduct.map((item) => (
            <Item
              key={item._id}
              id={item._id}
              image={item.image[0]}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      )}
      <Pagination
        length={filterProducts.length}
        setPage={setPage}
        limit={limit}
        page={page}
      />
    </section>
  );
};

export default Category;
