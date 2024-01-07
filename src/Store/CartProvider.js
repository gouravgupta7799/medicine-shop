
import CartContext from './Cart-context';
import React, { useReducer } from "react"
const defaultCartState = {
  items: [],
  totalAmount: 0
}
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.quantity;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const existingCartItem = state.items[existingCartItemIndex]


    let updateItems;
    if (existingCartItem) {

      const updateItem = {
        ...existingCartItem,
        quantity: Number(existingCartItem.quantity) + Number(action.item.quantity)
      }
      updateItems = [...state.items]
      updateItems[existingCartItemIndex] = updateItem
    }
    else {

      updateItems = state.items.concat(action.item);
    }

    return {
      items: updateItems,
      totalAmount: updateTotalAmount
    }
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id)
    const existingItem = state.items[existingCartItemIndex]
    const updateTotalAmount = state.totalAmount - existingItem.price
    let updateItems;
    if (existingItem.quantity === 1) {
      updateItems = state.items.filter(item => item.id !== action.id)
    } else {
      const updateItem = { ...existingItem, quantity: existingItem.quantity - 1 }
      updateItems = [...state.items]
      updateItems[existingCartItemIndex] = updateItem
    }
    return {
      items: updateItems,
      totalAmount: updateTotalAmount
    }
  }
  return defaultCartState
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)
  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD', item: item })
  }
  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE', id: id })
  }
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return <CartContext.Provider value={cartContext}>
    {props.children}
  </CartContext.Provider>
}
export default CartProvider