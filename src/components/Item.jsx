import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { PiHeart } from "react-icons/pi";
import { useContext, useEffect, useState } from "react";
import WishList from "../pages/WishList";
import { WishListContext } from "../Context/WishListContext";
import { toast } from "react-toastify";

const Item = ({ id, image, name, new_price, old_price }) => {
  const [like, setLike] = useState(false);
  const { addItem, removeItem } = useContext(WishListContext);
  const toggleLike = () => {
    setLike(!like);
    toast.success("Added To WishList");
  };

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("products");
    };

    window.addEventListener("beforeunload", clearLocalStorage);

    return () => {
      window.removeEventListener("beforeunload", clearLocalStorage);
    };
  }, []);

  const getProductInfo = (id) => {
    const existingProducts = localStorage.getItem("products");
    let productsArray = existingProducts ? JSON.parse(existingProducts) : [];
    productsArray.unshift(id);
    productsArray = productsArray.slice(0, 4);
    localStorage.setItem("products", JSON.stringify(productsArray));
  };
  return (
    <div className="overflow-hidden shadow-lg ">
      <div className="relative flex justify-center h-56 items-center overflow-hidden group transition-all duration-100">
        <Link
          onClick={() => getProductInfo(id)}
          to={`/product/${id}`}
          className="w-12 h-12 bg-white rounded-full flex justify-center items-center absolute top-1/2 bottom-1/2 z-20 scale-0 group-hover:scale-100 transition-all duration-700"
        >
          <FaSearch className="scale-125 hover:rotate-90 transition-all duration-200" />
        </Link>
        <img
          // onClick={window.scroll(0, 0)}
          src={image}
          alt="productImage"
          className="w-full block object-cover group-hover:scale-110 transition-all duration-1000"
        />
      </div>
      <div className="p-4 overflow-hidden">
        <div className="flex flow-row justify-between items-center">
          <h1 className="my-4 font-medium line-clamp-2 text-gray-700">
            {name}
          </h1>
          <div onClick={toggleLike}>
            {like ? (
              <FcLike
                onClick={() => removeItem(id)}
                className="cursor-pointer"
              />
            ) : (
              <PiHeart onClick={() => addItem(id)} className="cursor-pointer" />
            )}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <p className="line-through text-sm text-gray-500">${old_price}</p>
          <p className="font-bold">${new_price}.00</p>
        </div>
      </div>
      <WishList />
    </div>
  );
};
export default Item;
