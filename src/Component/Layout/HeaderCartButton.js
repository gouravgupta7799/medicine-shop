import React, { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-context";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {

  const cartCtx = useContext(CartContext);

  //console.log('in header acrt button', cartCtx.items)
  let quantity = 0;
  cartCtx.items.forEach((item) => {
    quantity = quantity + Number(item.quantity);
  });


  return (
    <button className={classes.button} onClick={props.onClickButton}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}> {quantity}</span>
    </button>
  )
}

export default HeaderCartButton
