// components/StockList.tsx

import React, {useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../store/configureStore'; // Import your store types
import {getStocksData} from '../actions/stockActions';
import {Stock} from '../types/stockTypes';

function renderFlatList(item: Stock) {
  return (
  <View style={styles.textContainer}>
        <Text style={styles.textItem}> symbol: {item.symbol}</Text>
        <Text style={styles.textItem}> name: {item.name}</Text>
        <Text style={styles.textItem}> currency: {item.currency}</Text>
        <Text style={styles.textItem}> exchange: {item.exchange}</Text>
        <Text style={styles.textItem}> mic_code: {item.mic_code}</Text>
        <Text style={styles.textItem}> country: {item.country}</Text>
        <Text style={styles.textItem}> type: {item.type}</Text>
      </View>
  )
}

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
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Stocks List!!</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.flatListContainer}
        data={stocks}
        keyExtractor={(item: Stock) => item.symbol}
        renderItem={item => renderFlatList(item.item)}
      />
      <Button title="Next Page" onPress={() => {}}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  flatListContainer: {
    marginLeft: 10,
    marginRight: 10,
  },
  textContainer: {
    backgroundColor: 'lightgray',
    marginVertical: 2,
    padding: 5,
  },
  textItem: {
    fontSize: 16,
  },
  button: {
    alignItems: 'center',
    marginBottom: 5,
    marginLeft: 20,
    marginRight: 20,
  }
});

export default StockList;
