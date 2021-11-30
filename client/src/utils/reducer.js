import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_PARTS":
      return {
        ...state,
        parts: [...action.parts],
      };

    case "UPDATE_CATEGORIES":
      return {
        ...state,
        categories: [...action.categories],
      };

    case "UPDATE_CURRENT_CATEGORY":
      return {
        ...state,
        currentCategory: action.currentCategory
      }

    case "ADD_TO_CART":
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.part],
      };

    case "ADD_MULTIPLE_TO_CART":
      return {
        ...state,
        cart: [...state.cart, ...action.parts],
      };

    case "UPDATE_CART_QUANTITY":
      return {
        ...state,
        cartOpen: true,
        cart: state.cart.map(part => {
          if (action._id === part._id) {
            part.purchaseQuantity = action.purchaseQuantity
          }
          return part
        })
      };

    case "REMOVE_FROM_CART":
      let newState = state.cart.filter(part => {
        return part._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
        cart: newState
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartOpen: false,
        cart: []
      };

    case "TOGGLE_CART":
      return {
        ...state,
        cartOpen: !state.cartOpen
      };

    default:
      return state;
  }
};

export function usePartReducer(initialState) {
  return useReducer(reducer, initialState)
}