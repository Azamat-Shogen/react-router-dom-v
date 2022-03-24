import React from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import OrderSummery from "./components/OrderSummery";
import PageNotFound from "./components/PageNotFound";
import Products from "./components/Products";
import FeaturedProducts from "./components/FeaturedProducts";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDeatails from "./components/UserDetails";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { AuthProvider } from "./components/auth";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
const LazyAbout = React.lazy(() => import("./components/About"));

export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />

          <Route path="order-summery" element={<OrderSummery />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured" element={<FeaturedProducts />} />
            <Route path="new" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UserDeatails />} />
            <Route path="admin" element={<Admin />} />
          </Route>
          <Route
            path="profile"
            element={
              <RequireAuth>
                <Profile />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
