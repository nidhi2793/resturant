import { useContext } from "react";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import veg from "../../../assets/veg.png";
import nonVeg from "../../../assets/nonVeg.png";

function MealItem(props) {
  const cartCtx = useContext(CartContext);
  const price = `Rs ${props.price}`;
  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
      type: props.type,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <div className={classes.nameType}>
          <h3>{props.name}</h3>
          {props.type === "veg" && (
            <img alt={veg} src={veg} className={classes.type}></img>
          )}
          {props.type === "non-veg" && (
            <img alt={nonVeg} src={nonVeg} className={classes.type}></img>
          )}
        </div>

        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm
          id={props.id}
          item={props}
          onAddToCart={addItemToCartHandler}
        />
      </div>
    </li>
  );
}

export default MealItem;
