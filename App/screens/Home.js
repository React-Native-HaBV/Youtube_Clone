import React from 'react';
import {View, Text, FlatList} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {useSelector, useDispatch} from "react-redux";
import MiniCard from "../components/MiniCard";

export default function Home({navigation}) {
  const cardData = useSelector(state => {
    return state;
  })
  return (
    <View>
      <Header />
      <FlatList
        data={cardData}
        renderItem={({item}) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
}
