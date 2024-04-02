import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const WishListContext = createContext();

const WishListContextProvider = (props) => {
  const [wishListItems, setWishListItems] = useState({});

  useEffect(() => {
    if (localStorage.getItem("auth-token")) {
      axios
        .get("https://backend-hqzy.onrender.com/api/v1/wishlist/getwishlist", {
          headers: {
            Accept: "application/json",
            "auth-token": localStorage.getItem("auth-token"),
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          setWishListItems(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  const addItem = (itemId) => {
    setWishListItems((prev) => ({ ...prev, [itemId]: 1 }));
    if (localStorage.getItem("auth-token")) {
      axios
        .post(
          "https://backend-hqzy.onrender.com/api/v1/wishlist/addwhishlist",
          {
            itemId: itemId,
          },
          {
            headers: {
              Accept: "application/json",
              "auth-token": localStorage.getItem("auth-token"),
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const removeItem = (itemId) => {
    setWishListItems((prev) => ({ ...prev, [itemId]: 0 }));
    if (localStorage.getItem("auth-token")) {
      axios
        .post(
          "https://backend-hqzy.onrender.com/api/v1/wishlist/removewhishlist",
          {
            itemId: itemId,
          },
          {
            headers: {
              Accept: "application/json",
              "auth-token": localStorage.getItem("auth-token"),
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const contextValue = { addItem, wishListItems, removeItem };
  return (
    <WishListContext.Provider value={contextValue}>
      {props.children}
    </WishListContext.Provider>
  );
};

export default WishListContextProvider;
