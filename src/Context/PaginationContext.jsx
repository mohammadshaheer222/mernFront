import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const PaginationContext = createContext();

const PaginationContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(200);
  const [page, setPage] = useState(() => {
    const storedPage = localStorage.getItem("currentPage");
    return storedPage ? parseInt(storedPage) : 1;
  });
  const [limit, setLimit] = useState(8);

  const handlePriceRange = (event) => {
    setMax(event.target.value);
  };

  useEffect(() => {
    localStorage.setItem("currentPage", page);
  }, [page]);
  
  useEffect(() => {
    localStorage.removeItem("currentPage");
  }, []);

  useEffect(() => {
    axios
      .get(`https://backend-hqzy.onrender.com/api/v1/allproducts/?name=${search}`)
      .then((res) => setProducts(res.data.product))
      .catch((error) => console.error(error));
  }, [search]);

  useEffect(() => {
    axios
      .get(
        `https://backend-hqzy.onrender.com/api/v1/allproducts/?name=${search}&numericFields=new_price<=${max}`
      )
      .then((res) => {
        setProducts(res.data.product);
      })
      .catch((error) => console.error(error));
  }, [page, max, search]);
  

  const contextValue = {
    products,
    min,
    max,
    limit,
    page,
    setPage,
    setSearch,
    handlePriceRange,
  };

  return (
    <PaginationContext.Provider value={contextValue}>
      {props.children}
    </PaginationContext.Provider>
  );
};

export default PaginationContextProvider;
