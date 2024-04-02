import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import ShopContextProvider from "./Context/ShopContext";
import SignUp from "./pages/SignUp";
import Buy from "./pages/Buy";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import PaginationContextProvider from "./Context/PaginationContext";
import Category from "./pages/Category";
import WishListContextProvider from "./Context/WishListContext";

const App = () => {
  return (
    <>
      <WishListContextProvider>
        <PaginationContextProvider>
          <ShopContextProvider>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mens" element={<Category category="men" />} />
              <Route path="/womens" element={<Category category="women" />} />
              <Route path="/kids" element={<Category category="kid" />} />
              <Route path="/product" element={<Product />}>
                <Route path=":productId" element={<Product />} />
              </Route>
              <Route path="/buy" element={<Buy />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgotPassword" element={<ForgotPassword />} />
              <Route
                path="/resetPassword/:accessToken"
                element={<ResetPassword />}
              />
            </Routes>
            <Footer />
          </ShopContextProvider>
        </PaginationContextProvider>
      </WishListContextProvider>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default App;
