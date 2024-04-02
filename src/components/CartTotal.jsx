import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";

const CartTotal = ({getTotalCartAmount}) => {
  return (
      <div className="space-y-5 font-medium ">
        <div className="flex justify-between ">
          <h1>SubTotal</h1>
          <h1>${getTotalCartAmount()}</h1>
        </div>
        <hr className="bg-black" />
        <div className="flex justify-between ">
          <h1>Shipping</h1>
          <h1>Free</h1>
        </div>
        <hr className="bg-black" />
        <div className="flex justify-between">
          <h1>Total</h1>
          <h1>${getTotalCartAmount()}</h1>
        </div>
      </div>
  );
};
export default CartTotal;
