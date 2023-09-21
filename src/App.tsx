/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';

interface StockData {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  mic_code: string;
  country: string;
  type: string;
}

export default function App() {
  const [data, setData] = useState<StockData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const API_URL = 'https://mocki.io/v1/88d1f054-781c-4c8b-b32d-810d7a310df1';
  const headers = {
    'Content-Type': 'application/json',
  };

  useEffect(() => {
    fetch(API_URL, {
      method: 'GET',
      headers: headers,
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(json => {
        if (json && json.data && Array.isArray(json.data)) {
          setData(json.data);
          console.log(json.data);
        } else {
          throw new Error('API response is not an array');
        }
      })
      .catch(error => {
        console.error(error);
        setData([]); // Set data to an empty array in case of an error
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : data ? ( // Check if data is not null before mapping
          data.map((item, index) => {
            return (
              <View key={index}>
                <Text>symbol:        {item.symbol}</Text>
                <Text>name:           {item.name}</Text>
                <Text>currency:      {item.currency}</Text>
                <Text>exchange:    {item.exchange}</Text>
                <Text>mic_code:    {item.mic_code}</Text>
                <Text>country:        {item.country}</Text>
                <Text>type:              {item.type}</Text>
                <Text>-------------------------------</Text>
              </View>
            );
          })
        ) : (
          <Text>No data available.</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
