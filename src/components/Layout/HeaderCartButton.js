import { GrCart } from "react-icons/gr";
import classes from "./HeaderCartButton.module.css";
import { Fragment } from "react";

function HeaderCartButton() {
  return (
    <Fragment>
      <button className={classes.button}>
        <span className={classes.icon}>
          <GrCart />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
      </button>
    </Fragment>
  );
}
export default HeaderCartButton;
