import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

export default function Create({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header/>
      <Text> Create Screen </Text>
    </View>
  );
}
