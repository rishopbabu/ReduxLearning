// components/StockList.tsx

import React, {useEffect} from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/configureStore'; // Import your store types
import {getStocksData} from '../actions/stockActions';
import {Stock} from '../types/stockTypes';

const StockList: React.FC = () => {
  const dispatch = useDispatch();
  const stocks = useSelector((state: RootState) => state.data);
  const loading = useSelector((state: RootState) => state.loading);
  const error = useSelector((state: RootState) => state.error);

  useEffect(() => {
    dispatch(getStocksData());
  }, [dispatch]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
      <FlatList
        data={stocks}
        keyExtractor={(item: Stock) => item.symbol}
        renderItem={({item}) => (
          <View>
            <Text>   symbol:        {item.symbol}</Text>
            <Text>   name:           {item.name}</Text>
            <Text>   currency:      {item.currency}</Text>
            <Text>   exchange:    {item.exchange}</Text>
            <Text>   mic_code:    {item.mic_code}</Text>
            <Text>   country:        {item.country}</Text>
            <Text>   type:              {item.type}</Text>
            <Text>          -----------------------------------------------------------------------------</Text>
            <Text>          $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$</Text>
            <Text>          -----------------------------------------------------------------------------</Text>
          </View>
        )}
      />
  );
};

export default StockList;
