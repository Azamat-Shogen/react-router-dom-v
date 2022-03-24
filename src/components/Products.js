import { Link, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div>
      <h4>Products</h4>
      <input type="search" placeholder="seach products" />
      <div>
        <nav className="secondary-nav">
          <Link to="featured">Featured</Link>
          <Link to="new">New</Link>
        </nav>
        {/* *** IMPORTANT to invoke the outlet below the nav tag*** */}
        <Outlet />
      </div>
    </div>
  );
}
