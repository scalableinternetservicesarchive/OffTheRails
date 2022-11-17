import { FETCH_UNPURCHASED_ORDER, UPDATE_ORDER, FETCH_ORDERS } from '../constants/actionTypes';

export default (orders = {}, action) => {
  switch (action.type) {
    case FETCH_UNPURCHASED_ORDER:
      return { ...orders, order: action.payload };
    case UPDATE_ORDER:
      return orders.map((order) => order.id === action.payload.id ? action.payload : order); 
    case FETCH_ORDERS:
      return action.payload;
    default:
      return orders;
  }
};