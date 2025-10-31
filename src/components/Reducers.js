import { FETCH_PRODUCTS, VIEW_PRODUCT, ADD_TO_CART, REMOVE_FROM_CART } from './actions';

export const initialState = {
  products: [],
  view: null,
  cart: [],
};

export function reducers(state, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, products: action.payload };

    case VIEW_PRODUCT:
      return { ...state, view: action.payload };

    case ADD_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case REMOVE_FROM_CART:
      return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };

    default:
      return state;
  }
}
