import React, { useContext, useState } from "react";
import Input from '../UI/Input.js'

import classes from './MedicineItemForm.module.css'
import CartContext from "../../Store/Cart-context.js";

const MedicineItemForm = (props) => {

  const cartcnxt = useContext(CartContext);
  const [localQuantity, setLocalQuantity] = useState(props.items.quantity || 0);

  const addToCart = (event) => {
    event.preventDefault();
    if (localQuantity > 0) {
      const quantity = document.getElementById('amount_' + props.id).value;
      cartcnxt.addItem({ ...props.items, quantity: quantity });
      setLocalQuantity((prevQuantity) => prevQuantity - quantity);
    }
  }

  return <form className={classes.form}>

    {localQuantity > 0 ? <Input label="Quantity" input={{
      value: localQuantity
    }} /> :
      <div style={{ color: 'red', fontSize: '24px' }}>Out of Stock</div>}

    <Input label="Amount" input={{
      id: 'amount_' + props.id,
      type: 'number',
      min: '1',
      max: '5',
      step: '1',
      defaultValue: '1'
    }} />
    <button onClick={addToCart}>+ Add</button>
  </form>
}

export default MedicineItemForm;