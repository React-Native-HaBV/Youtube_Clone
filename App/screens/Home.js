import React from 'react';
import {View, Text, FlatList, Animated} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {useSelector, useDispatch} from 'react-redux';
import MiniCard from '../components/MiniCard';

export default function Home({props}) {
  const cardData = useSelector((state) => {
    return state.addData;
  });
  const scrollY = new Animated.Value(0);
  const diffClamp = Animated.diffClamp(scrollY, 0, 45);
  const translateY = diffClamp.interpolate({
    inputRange: [0, 45],
    outputRange: [0, -90],
  });

  return (
    <View>
      <Animated.View
        style={{
          transform: [
            {
              translateY: translateY,
            },
          ],
          elevation: 4,
          zIndex: 100,
        }}>
        <Header />
      </Animated.View>
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
        onScroll={(event) => {
          scrollY.setValue(event.nativeEvent.contentOffset.y);
        }}
      />
    </View>
  );
}
