import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { GrCart } from "react-icons/gr";
import classes from "./HeaderCartButton.module.css";
import { Fragment } from "react";
import Cart from "../Cart/Cart";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Fragment>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <GrCart />
        </span>
        <span>Your Cart</span>

        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </Fragment>
  );
}
export default HeaderCartButton;
