import React from 'react';
import {View, Text, FlatList, ScrollView} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {useSelector} from 'react-redux';

const LittleCard = ({name}) => {
  return (
    <View
      style={{
        borderRadius: 5,
        backgroundColor: 'tomato',
        width: 180,
        height: 50,
        marginTop: 10,
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          paddingHorizontal: 40,
          paddingVertical: 10,
        }}>
        {name}
      </Text>
    </View>
  );
};

export default function Explore({navigation}) {
  const data = useSelector((state) => {
    return state;
  });
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        renderItem={({item}) => {
          return (
            <Card
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        ListHeaderComponent={() => {
          return (
            <View>
              <Header />
              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-around',
                }}>
                <LittleCard name={'Gaming'} />
                <LittleCard name={'Trending'} />
                <LittleCard name={'Music'} />
                <LittleCard name={'News'} />
                <LittleCard name={'Fashions'} />
                <LittleCard name={'Movies'} />
              </View>
              <Text style={{margin: 8, fontSize: 18}}> Trending Videos</Text>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.videoId}
      />
    </View>
  );
}
