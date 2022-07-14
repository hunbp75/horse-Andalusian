import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/AboutUs">Rólunk</Link>
      <Link to="/Horses">Lovaink</Link>
      <Link to="/ForSale">Eladó Lovaink</Link>
      <Link to="Gallery">Galéira</Link>
      <Link to="/ContactUs">Kapcsolat</Link>
    </nav>
  );
};

export default NavBar;
