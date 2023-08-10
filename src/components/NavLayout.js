import { Outlet, Link } from "react-router-dom";
import './Nav.css';

const Layout = () => {
    return (
    
      <div className="Navigation">
        
        <nav>
              <Link to="/ImageGallery"><button className="hello"><b><i>images</i></b></button></Link>
              <Link to="/Profile"><button className="hello"><b><i>Profile</i></b></button></Link>
              <Link to="/projects"><button className="hello"><b><i>Projects</i></b></button></Link>
              <Link to="/portfolio"><button className="hello"><b><i>Portfolio</i></b></button></Link>
        </nav>
  
        <Outlet />
      </div>
    )
  };
  
  export default Layout;