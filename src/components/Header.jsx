import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useContext, useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { PiShoppingCartSimpleThin } from "react-icons/pi";
import { ShopContext } from "../Context/ShopContext";
import Cart from "./Cart";
import DropDown from "./DropDown";
import WishList from "../pages/WishList";
import { PiHeartThin } from "react-icons/pi";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishList, setWishList] = useState(false);
  const { getTotalCartItem } = useContext(ShopContext);

  const likeOpen = () => {
    setWishList(true);
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const toggleCart = () => {
    setCartOpen(true);
  };

  const closeCart = () => {
    setCartOpen(false);
  };

  const closeWishList = () => {
    setWishList(false);
  };

  return (
    <>
      <div
        className={`bg-gray-100 px-4 sm:px-8 py-5 w-full flex justify-between items-center shadow-md fixed top-0 left-0 right-0 z-50 `}
      >
        {/* Logo */}
        <Link to="/" className="font-bold text-2xl tracking-widest">
          LOGO
        </Link>

        {/* Navbar desktop */}
        <Navbar
          containerStyles={
            "hidden md:flex gap-x-8 font-semibold text-lg tracking-wider"
          }
        />

        {/* Navbar mobile */}
        <Navbar
          openMenu={openMenu}
          containerStyles={
            openMenu
              ? "md:hidden font-semibold w-[100%] h-full tracking-wider bg-white flex flex-col items-center justify-center  gap-y-14  shadow-inner fixed top-20  right-0 transition-all duration-300 z-20"
              : "md:hidden font-semibold w-[100%] h-full tracking-wider bg-white flex flex-col items-center justify-center  gap-y-14 shadow-xl fixed top-20 -right-[100%] transition-all duration-300 z-20 "
          }
        />

        {/* Buttons */}
        <div className="flex items-center justify-center gap-x-2 sm:gap-x-4">
          <PiHeartThin
            className="cursor-pointer scale-90 hover:scale-100 transition-all duration-300"
            onClick={likeOpen}
            size={30}
          />

          <div className="relative flex scale-90 hover:scale-100 transition-all duration-300">
            <span className="flex-1 w-8 h-8 mt-2 cursor-pointer ">
              <PiShoppingCartSimpleThin onClick={toggleCart} size={30} />
            </span>
            <span className="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-xs  leading-tight text-center">
              {getTotalCartItem()}
            </span>
          </div>

          <DropDown />

          <div>
            {!openMenu ? (
              <IoMenu
                onClick={toggleMenu}
                size={30}
                className="md:hidden cursor-pointer"
              />
            ) : (
              <IoClose
                onClick={toggleMenu}
                size={30}
                className="md:hidden cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>

      <Cart cartOpen={cartOpen} closeCart={closeCart} />
      <WishList wishList={wishList} closeWishList={closeWishList} />
    </>
  );
};

export default Header;
