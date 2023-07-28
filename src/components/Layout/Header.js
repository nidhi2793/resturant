import { Fragment } from "react";

import mealsImage2 from "../../assets/meals2.jpg";
import logo from "../../assets/burger.png";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <div className={classes.title}>
          <img src={logo} alt="logo" className={classes.logo}></img>
          <h1>Burger Hut</h1>
        </div>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage2} alt="meals"></img>
      </div>
    </Fragment>
  );
}

export default Header;
