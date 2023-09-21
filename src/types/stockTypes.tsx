export const GET_STOCKS_SUCCESS = 'GET_STOCKS_SUCCESS';
export const GET_STOCKS_FAILURE = 'GET_STOCKS_FAILURE';

export interface Stock {
    symbol: string;
    name: string;
    currency: string;
    exchange: string;
    mic_code: string;
    country: string;
    type: string;
}

export interface GetStocksSuccessAction {
    
}