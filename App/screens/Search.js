import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MiniCard from '../components/MiniCard';
import NavigationService from '../NavigationService';

import {useSelector, useDispatch} from 'react-redux';
import { useTheme } from "@react-navigation/native";

const APIKey = 'AIzaSyAR6JWXcZT2snpUboVn0hCaIzbIlhFxdwo';

const Search = ({}) => {
  const [searchText, setSearchText] = useState('');
  // const [miniCard, setMiniCard] = useState([]);
  const [loading, setLoading] = useState(false);
  const miniCard = useSelector((state) => {
    return state.addData;
  });
  const {colors} = useTheme();
  const dispatch = useDispatch();

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchText}&type=video&key=${APIKey}`,
    )
      .then((result) => result.json())
      .then((data) => {
        console.log(data.items);
        setLoading(false);
        // setMiniCard(data.items);
        dispatch({type: 'add', payload: data.items});
      });
  };

  return (
    <View style={styles.searchContainer}>
      <View style={[styles.searchContent, {backgroundColor: colors.backgroundColor}]}>
        <Ionicons
          name={'ios-arrow-back'}
          size={30}
          color={colors.iconColor}
          style={{paddingHorizontal: 15}}
          onPress={() => NavigationService.goBack()}
        />
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          returnKeyType={'search'}
          // onSubmitEditting={(event) => {
          //   if (event.nativeEvent.key === 'Enter') {
          //     fetchData();
          //   }
          // }}
          // onKeyPress={() => fetchData()}
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          style={{
            backgroundColor: '#e6e6e6',
            width: '70%',
            paddingHorizontal: 10,
          }}
        />
        <Ionicons
          name={'send'}
          size={30}
          color={colors.iconColor}
          onPress={() => fetchData()}
        />
      </View>
      {loading ? (
        <ActivityIndicator
          style={{marginTop: 20}}
          size={'large'}
          color={'red'}
        />
      ) : null}
      <FlatList
        data={miniCard}
        renderItem={({item}) => {
          // console.log('item:', item);
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item) => `${item.id.videoId}`}
        removeClippedSubviews={true}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    flex: 1,
    marginTop: 44,
  },
  searchContent: {
    backgroundColor: 'white',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
});
export default Search;
