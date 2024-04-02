import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { MdClose } from "react-icons/md";
import CartTotal from "./CartTotal";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartOpen, closeCart }) => {
  const {
    allProducts,
    cartItems,
    increment,
    decrement,
    removeCart,
    getTotalCartAmount,
    getSingleCartItem,
  } = useContext(ShopContext);
  const navigate = useNavigate();

  const isNextPage = () => {
    const accessToken = localStorage.getItem("auth-token");
    if (accessToken) {
      navigate("/buy");
      closeCart(false)
    } else {
      navigate("/login");
      window.scroll(0, 0);
      closeCart(false)
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 bottom-0 h-screen w-[80%] md:w-[40%] bg-gray-200 z-50 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out pt-6 pb-4 px-8 space-y-4 overflow-y-scroll`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-lg tracking-wider font-medium">CART</h1>
        <MdClose className="cursor-pointer" onClick={closeCart} size={25} />
      </div>

      <hr />

      {getTotalCartAmount() === 0 ? (
        <div className="flex justify-center items-center h-full text-5xl">
          Cart is Empty
        </div>
      ) : (
        <div className="space-y-6">
          {allProducts.map((itemDetails) => {
            if (cartItems[itemDetails._id] > 0) {
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
                          <div className="flex  ring-1 ring-gray-400 text-lg px-4">
                            <p
                              onClick={() => decrement(itemDetails._id)}
                              className="text-2xl"
                            >
                              -
                            </p>{" "}
                            <span className="mx-4 cursor-none text-lg font-medium">
                              {getSingleCartItem(itemDetails._id)}
                            </span>{" "}
                            <p
                              onClick={() => increment(itemDetails._id)}
                              className="text-2xl"
                            >
                              +
                            </p>
                          </div>
                          <h1 className="font-semibold text-lg">
                            ${itemDetails.new_price}.00
                          </h1>
                        </div>
                        
                        <div>
                          <button
                            onClick={() => removeCart(itemDetails._id)}
                            className="bg-red-500 px-2 text-white scale-100 hover:scale-110 transition-all duration-300 "
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
          <CartTotal getTotalCartAmount={getTotalCartAmount} />
          <button onClick={isNextPage} className="btn-dark py-2 w-full">
            Checkout : ${" "}
            <span className="font-semibold text-xl">
              {getTotalCartAmount()}.00
            </span>
          </button>
        </div>
      )}
    </div>
   
  );
};
export default Cart;
