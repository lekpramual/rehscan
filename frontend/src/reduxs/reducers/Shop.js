import {
  SHOP_BEGIN,
  SHOP_SUCCESS,
  SHOP_FAILURE,
  UPDATESHOP_BEGIN,
  UPDATESHOP_SUCCESS,
  UPDATESHOP_FAILURE,
  COUNTSHOP_BEGIN,
  COUNTSHOP_SUCCESS,
  COUNTSHOP_FAILURE,
} from "../actions/Shop";

const initialState = {
  currentShop: [],
  currentShopFailure: null,

  updateShop: [],
  updateShopFailure: null,

  countShop: [],
  countShopFailure: null,
};

export default function listitemReducer(state = initialState, action) {
  switch (action.type) {
    case SHOP_BEGIN:
      return {
        ...state,
        currentShop: [],
      };
    case SHOP_SUCCESS:
      return {
        ...state,
        currentShop: action.payload.payload,
      };
    case SHOP_FAILURE:
      return {
        ...state,
        currentShopFailure: action.payload.error,
      };
    case COUNTSHOP_BEGIN:
      return {
        ...state,
        countShop: [],
      };
    case COUNTSHOP_SUCCESS:
      return {
        ...state,
        countShop: action.payload.payload,
      };
    case COUNTSHOP_FAILURE:
      return {
        ...state,
        countShopFailure: action.payload.error,
      };
    case UPDATESHOP_BEGIN:
      return {
        ...state,
        updateShop: [],
      };
    case UPDATESHOP_SUCCESS:
      return {
        ...state,
        updateShop: action.payload.payload,
      };
    case UPDATESHOP_FAILURE:
      return {
        ...state,
        updateShop: action.payload.error,
      };
    default:
      return state;
  }
}
