import Modal from "../UI/Modal";
import classes from "./OrderDone.module.css";

function OrderDone(props) {
  return (
    <Modal>
      <div>
        <h3 className={classes.message}>Congrats..Your Order is placed !!!</h3>
      </div>
    </Modal>
  );
}

export default OrderDone;
