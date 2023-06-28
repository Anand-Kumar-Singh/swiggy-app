import { useDispatch, useSelector } from "react-redux";
import store from "../utils/store";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  }
  return (
    <>
      <h1>Cart Items - {cartItems.length}</h1>
      <button className="bg-green-500 p-2 m-5" onClick={()=>handleClearCart()}>Clear Cart</button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
        {/* <FoodItem {...cartItems[0]} /> */}
      </div>
    </>
  );
};

export default Cart;
