import React, {useState} from 'react';
import {View, TextInput, Text, Image, StyleSheet, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MiniCard from '../components/MiniCard';

//GET https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=[YOUR_API_KEY]
const APIKey = 'AIzaSyCVOQG8q_Jfgk1ZhW9KQM1Brfy5pZXLfsU';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [miniCard, setMiniCard] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = () => {
    setLoading(true);
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${searchText}&type=video&key=${APIKey}`,
    )
      .then((result) => result.json())
      .then((data) => {
        setLoading(false);
        setMiniCard(data.items);
      });
  };

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchContent}>
        <Ionicons
          name={'ios-arrow-back'}
          size={30}
          color={'black'}
          style={{}}
          onPress={() => {}}
        />
        <TextInput
          autoCapitalize={'none'}
          autoCorrect={false}
          returnKeyType={'search'}
          onSubmitEditting={(event) => {
            if (event.nativeEvent.key === 'Enter'){
              fetchData();
            }
          }}
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
          color={'black'}
          onPress={() => fetchData()}
        />
      </View>
      <FlatList
        data={miniCard}
        renderItem={({ item }) => {
          console.log('item:', item)
          return (
            <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
            />
          );
        }}
        keyExtractor={(item, index) => `${item.id.videoId}`}
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
export default SearchScreen;
