import { actionType } from "./../actionType";

const INIT_STATE = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  modal: false,
};

export const Reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionType.ADD_TO_BASKET:
      const fount = state.basket.find((el) => el.id === action.payload.id);
      if (fount) {
        return {
          ...state,
          basket: state.basket.map((el) =>
            el.id === action.payload.id ? { ...el, count: el.count + 1 } : el
          ),
        };
      }
      return {
        ...state,
        basket: [...state.basket, { ...action.payload, count: 1 }],
      };
    case actionType.MINUS_TO_BASKET:
      return {
        ...state,
        basket: state.basket.map((el) =>
          el.id === action.payload.id
            ? { ...el, count: el.count > 1 ? el.count - 1 : el.count }
            : el
        ),
      };
    case actionType.DEL_IN_BASKET: {
      let filtered = state.basket.filter((el) => el.id !== action.payload);
      return { ...state, basket: filtered };
    }
    case actionType.OPEN_CLOSE_MODAL: {
      return { ...state, modal: action.payload };
    }
    default:
      return state;
  }
};
