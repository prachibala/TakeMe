import cart from "../images/cart.png";
import carts from "../images/carts.png";
import user from "../images/user.png";
import search from "../images/m.png";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="header">
            <div className="part-1 header__left">
                <Link to="/" className="header__left--logo">
                    <img className="logo  " src={carts} alt="logo" />
                    <span>TakeMe</span>
                </Link>
            </div>
            <div className="part-2 header__middle">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/contact">Contact us</Link>
            </div>
            <div className="nav_icon header__right">
                <a href="/search">
                    <img className="img" src={search} alt="" />
                </a>

                <a href="/cats">
                    <img className="img" src={cart} alt="" />
                </a>

                <a href="/user">
                    <img className="img" src={user} alt="" />
                </a>
            </div>
        </div>
    );
};
export default Nav;
