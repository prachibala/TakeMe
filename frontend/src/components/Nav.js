import carts from "../images/logo_cart.png";
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
                <Link className="header__middle--link" to="/">Home</Link>
                <Link className="header__middle--link" to="/products">Products</Link>
                <Link className="header__middle--link" to="/categories">Categories</Link>
                <Link className="header__middle--link" to="/contact">Contact us</Link>
            </div>

            <div className="nav_icon header__right">
                <Link to="/" className="header__right--icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </Link>

                <Link to="/" className="header__right--icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd" />
                    </svg>
                </Link>

                <Link to="/" className="header__right--icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
                </Link>
            </div>
        </div>
    );
};
export default Nav;
