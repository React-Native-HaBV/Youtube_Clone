import React from 'react';
import {View, Text} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

export default function Home({navigation}) {
  return (
    <View>
      <Header />
      <Card />
      <Card />
    </View>
  );
}
