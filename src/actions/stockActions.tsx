import {Dispatch} from 'redux';
import {
  StockActionTypes,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_FAILURE,
  Stock,
} from '../types/stockTypes';

const API_URL = 'https://mocki.io/v1/88d1f054-781c-4c8b-b32d-810d7a310df1';
const headers = {
  'Content-Type': 'application/json',
};

export const getStocksSuccess = (data: Stock[]): StockActionTypes => ({
  type: GET_STOCKS_SUCCESS,
  payload: data,
});

export const getStocksFailure = (error: string): StockActionTypes => ({
  type: GET_STOCKS_FAILURE,
  payload: error,
});

// export const getStockData = () => {
//     return async (dispatch: Dispatch<StockActionTypes>) => {
//         try {
//             const response = await fetch(API_URL, {
//                 method: 'GET',
//                 headers: headers,
//             })
//             if(!response.ok) {
//                 throw new Error('Network response was not ok')
//             }
//             const data = await response.json();
//             if (typeof data === 'string') {
//                 dispatch(getStocksFailure(data.toString()));
//               } else {
//                 dispatch(getStocksSuccess(data));
//               }
//             dispatch(getStocksSuccess(data))
//         } catch (error: any) {
//             dispatch(getStocksFailure(error.message.toString()))
//         }
//     }
// }

export const getStocksData = () => {
  return async (dispatch: Dispatch<StockActionTypes>) => {
    try {
      // Replace this with your actual API call
      const response = await fetch(API_URL, {
        method: 'GET',
        headers: headers,
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('Data', JSON.stringify(data, null, 2))
      dispatch(getStocksSuccess(data.data));
    } catch (error: any) {
      dispatch(getStocksFailure(error.message));
    }
  };
};
