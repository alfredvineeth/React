import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
            <Link to="/Images">Images</Link>
      </nav>
      <Outlet />
    </div>
  )
};

export default Layout;