import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const [allProducts, setAllProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://backend-hqzy.onrender.com/api/v1/allproducts/`)
      .then((res) => {
        setAllProducts(res.data.product);
        if (localStorage.getItem("auth-token")) {
          axios
            .get("https://backend-hqzy.onrender.com/api/v1/cart/getcartitem", {
              headers: {
                Accept: "application/json",
                "auth-token": localStorage.getItem("auth-token"),
                "Content-Type": "application/json",
              },
            })
            .then((res) => {
              setCartItems(res.data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
      })
      .catch((error) => console.log(error));
  }, []);

  const increment = (itemId) => {
    // setCartItems((prev) => {
    //   const updatedItems = { ...prev };
    //   updatedItems[itemId] = (updatedItems[itemId] || 0) + 1;
    //   return updatedItems;
    // });
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      axios
        .post(
          "https://backend-hqzy.onrender.com/api/v1/cart/incrementcart",
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
    } else {
        navigate("/login")
    }
  };
  const decrement = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    //   setCartItems((prev) => {
    //     const updatedItems = { ...prev };
    //     if (updatedItems[itemId] > 0) {
    //         updatedItems[itemId] -= 1;
    //     }
    //     return updatedItems;
    // });
    if (localStorage.getItem("auth-token")) {
      axios
        .post(
          "https://backend-hqzy.onrender.com/api/v1/cart/decrementcart",
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

  const removeCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] = 0) }));
    if (localStorage.getItem("auth-token")) {
      axios
        .post(
          "https://backend-hqzy.onrender.com/api/v1/cart/removecart",
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

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = allProducts.find((product) => product._id === item);
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };

  const getSingleCartItem = (itemId) => {
    return cartItems[itemId];
  };

  const getTotalCartItem = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    // console.log(totalItem)
    return totalItem;
  };

  const contextValue = {
    setAllProducts,
    allProducts,
    cartItems,
    increment,
    decrement,
    removeCart,
    getTotalCartAmount,
    getSingleCartItem,
    getTotalCartItem,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
