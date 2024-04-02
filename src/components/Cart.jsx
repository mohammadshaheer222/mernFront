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
    // <section className="pt-28 pb-8">
    //   <table className="w-full mx-auto">
    //     <thead>
    //       <tr className="bg-slate-900/10 text-start py-12">
    //         <th className="px-1 py-2">Products</th>
    //         <th className="px-1 py-2">Title</th>
    //         <th className="px-1 py-2">Price</th>
    //         <th className="p-1 py-2">Quantity</th>
    //         <th className="px-1 py-2">Total</th>
    //         <th className="px-1 py-2">Remove</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {all_products.map((e) => {
    //         if (cartItems[e.id] > 0) {
    //           return (
    //             <tr
    //               className="border-b border-slate-900/20 font-medium text-gray-600 p-6 text-center"
    //               key={e.id}
    //             >
    //               <td className="flex justify-center items-center">
    //                 <img
    //                   className="rounded-md ring-1 ring-slate-900/5 my-1"
    //                   src={e.image}
    //                   alt="product-image"
    //                   height={43}
    //                   width={43}
    //                 />
    //               </td>
    //               <td>
    //                 <div className="line-clamp-2">{e.name}</div>
    //               </td>
    //               <td className="w-16 h-16 bg-white">{e.new_price}</td>
    //               <td>
    //                 <div>{cartItems[e.id]}</div>
    //               </td>
    //               <td>
    //                 <div>{e.new_price * cartItems[e.id]}</div>
    //               </td>
    //               <td>
    //                 <div className="flex justify-center items-center">
    //                   <TbTrash size={20} className="text-red-500 cursor-pointer scale-100 hover:scale-125 transition-all duration-300" onClick={() => removeCart(e.id)} />
    //                 </div>
    //               </td>
    //             </tr>
    //           );
    //         }
    //       })}
    //     </tbody>
    //   </table>
    //   {/* cartDetails */}
    //   <div className="flex items-center justify-center">

    //   <div className="flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-gray-100 w-full max-w-[666px] items-center justify-center">
    //     <div className="flex flex-col gap-10">
    //       <h1 className="font-bold">Summary</h1>
    //       <div>
    //         <div className="flex justify-between py-4">
    //           <h1>Subtotal:</h1>
    //           <h1>${getTotalCartAmount()}</h1>
    //         </div>
    //         <hr />
    //         <div className="flex justify-between py-4">
    //           <h1>Shipping Fee:</h1>
    //           <h4>Free</h4>
    //         </div>
    //         <hr />
    //         <div className="flex justify-between py-4">
    //           <h1>Total:</h1>
    //           <h1>${getTotalCartAmount()}</h1>
    //         </div>
    //       </div>
    //       <button className="btn-dark py-2">Checkout</button>
    //       {/* <div className="flex flex-col gap-10">
    //         <h1>Your coupon code enter here:</h1>
    //         <div className="flex justify-between pl-5 h-12 rounded-full ">
    //           <input type="text" placeholder="Coupon code"/>
    //           <button className="btn-dark ">Submit</button>
    //         </div>
    //       </div> */}
    //     </div>
    //   </div>
    //   </div>
    // </section>
  );
};
export default Cart;
