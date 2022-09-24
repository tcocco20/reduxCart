import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";
import classes from "./CartButton.module.css";

const CartButton = props => {
  const totalCartItems = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const toggleCartHandler = () => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default CartButton;
