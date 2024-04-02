// const shopReducer = (state, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//       if (localStorage.getItem("auth-token")) {
//         axios
//           .post(
//             "http://localhost:2000/api/v1/cart/incrementcart",
//             {
//               itemId: itemId,
//             },
//             {
//               headers: {
//                 Accept: "application/json",
//                 "auth-token": localStorage.getItem("auth-token"),
//                 "Content-Type": "application/json",
//               },
//             }
//           )
//           .then((res) => {
//             console.log(res);
//           })
//           .catch((error) => {
//             console.error(error);
//           });
//       }
//   }
// };
