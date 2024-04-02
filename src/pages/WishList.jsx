import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { MdClose } from "react-icons/md";
import { WishListContext } from "../Context/WishListContext";

const WishList = ({ wishList, closeWishList }) => {
  const { allProducts, increment } = useContext(ShopContext);
  const { wishListItems, removeItem } = useContext(WishListContext);
  const wishlistNotEmpty = Object.values(wishListItems).some(
    (value) => value > 0
  );

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 h-screen w-[80%] md:w-[40%] bg-gray-200 z-50 ${
        wishList ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out pt-6 pb-4 px-8 space-y-4 overflow-y-scroll`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-medium tracking-wider">My WishList</h1>
        <MdClose className="cursor-pointer" onClick={closeWishList} size={25} />
      </div>

      {!wishlistNotEmpty ? (
        <div className="flex justify-center items-center h-full text-5xl">
          No Items in Your Bag
        </div>
      ) : (
        <div>
          {allProducts.map((itemDetails) => {
            if (wishListItems[itemDetails._id] > 0) {
              return (
                <div key={itemDetails._id} className="flex flex-col py-4">
                  <div className="flex flex-col justify-start gap-y-2 items-start md:items-center md:flex-row md:gap-y-0  md:gap-x-4  w-full h-full ">
                    <div>
                      <img src={itemDetails.image[0]} alt="" width={130} />
                    </div>
                    <div>
                      <h1 className="font-semibold">{itemDetails.name}</h1>
                      <div className="flex justify-between items-center mt-4 space-x-4">
                        <div className="flex cursor-pointer gap-x-4">
                          <h1 className="line-through">${itemDetails.old_price}</h1>
                          <h1 className="font-semibold text-lg">
                            ${itemDetails.new_price}.00
                          </h1>
                        </div>
                      </div>
                      <div className="space-x-4">
                        <button
                          onClick={() => increment(itemDetails._id)}
                          className="btn-dark px-4 py-1 mt-2"
                        >
                          Add to Cart
                        </button>
                        <button
                          onClick={() => removeItem(itemDetails._id)}
                          className="bg-red-500 px-4 py-1 text-white"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};
export default WishList;
