import MedicineContext from "./Medicine-context"
import React, { useState } from 'react'


const MedicineProvider = (props) => {
  const [items, updateItems] = useState([]);

  const addItemToMedicineHandler = item => {
    const existingItemCartIndex = items.findIndex((i) => i.id === item.id)

    if (existingItemCartIndex === -1) {
      updateItems([...items, item]);
    }
  }

  const removeItemFromMedicineHandler = (id, q) => {
    const existingCartItemIndex = items.findIndex(item => item.id === id)

    if (existingCartItemIndex === -1) {
      updateItems[existingCartItemIndex].quantity = 0;
    } else {
      const updatedItems = [...items];
      updatedItems[existingCartItemIndex].quantity = Number(updatedItems[existingCartItemIndex].quantity) - q;
    }
  }

  const medicineContext = {
    items: items,
    addItem: addItemToMedicineHandler,
    removeItem: removeItemFromMedicineHandler,
  }

  return <MedicineContext.Provider value={medicineContext}>
    {props.children}
  </MedicineContext.Provider>
}
export default MedicineProvider