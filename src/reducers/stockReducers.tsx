import {
  StockActionTypes,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_FAILURE,
  Stock,
} from '../types/stockTypes';

interface StockState {
  auth: any;
  data: Stock[];
  loading: boolean;
  error: string | null;
}

const initialState: StockState = {
  data: [],
  loading: false,
  error: null,
};

const stockReducer = (
  state = initialState,
  action: StockActionTypes,
): StockState => {
  switch (action.type) {
    case GET_STOCKS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null,
      };

    case GET_STOCKS_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default stockReducer;
