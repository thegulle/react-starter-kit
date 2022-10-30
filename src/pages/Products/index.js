import { Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products Layout</h1>
      <Outlet />
    </div>
  );
}

export default Products;