import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";
import "./header.css";
import { ReactComponent as CartImage } from "../../assets/images/shopping-bag.svg";
import Cart from "../Cart/Cart";
import { toggleCart } from "../../redux/cart/cart.actions";

export default function Header() {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartState = useSelector((state) => state.cart.hidden);
  const user = useSelector((state) => state.user.name);

  const [userOptions, setUserOptions] = useState(false);
  const logout = () => {
    setUserOptions(false);
    auth.signOut();
    history.push("/home");
  };

  return (
    <div className="header-main">
      <div className="header-contents">
        <Link to="/home">
          <p className="brand-name">StyleOn</p>
        </Link>
        <CartImage
          onClick={() => dispatch(toggleCart())}
          className="cart-image"
        />

        {!user ? (
          <Link to="/login">
            <p className="login-link">Login</p>
          </Link>
        ) : (
          <p onClick={() => setUserOptions(!userOptions)} className="username">
            Hi, {user} <span className="user-arrow">&#62;</span>
          </p>
        )}
        {/* <img className='cart-image' src={CartImage} alt="loading" /> */}
      </div>

      {userOptions ? (
        <div className="user-options">
          <Link to="/user/7">
            <p onClick={() => setUserOptions(false)}>My Profile</p>
          </Link>
          <p onClick={() => logout()} className="logout-button">
            Logout
          </p>
        </div>
      ) : null}
      {cartState ? <Cart /> : null}
    </div>
  );
}
