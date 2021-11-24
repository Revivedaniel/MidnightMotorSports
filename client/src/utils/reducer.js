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

    default:
      return state;
  }
};

export function usePartReducer(initialState) {
  return useReducer(reducer, initialState)
}