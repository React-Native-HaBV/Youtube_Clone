import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {getStatusBarHeight} from '../components/StatusBarHeight';
import NavigationService from '../NavigationService';

const statusHeight = getStatusBarHeight();

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <AntDesign
          name={'youtube'}
          size={28}
          color={'red'}
          style={{marginLeft: 15}}
        />
        <Text style={{fontSize: 22, fontWeight: '600'}}> Youtube </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', right: 15}}>
        <Feather
          name={'cast'}
          size={22}
          color={'black'}
          style={{marginLeft: 20}}
        />
        <Ionicons
          name={'notifications-outline'}
          size={22}
          color={'black'}
          style={{marginLeft: 15}}
        />
        <Ionicons
          name={'md-search-outline'}
          size={22}
          color={'black'}
          style={{marginLeft: 15}}
          onPress={() => {
            NavigationService.navigate("Search");
          }}
        />
        <MaterialCommunityIcons
          name={'account-circle'}
          size={22}
          color={'black'}
          style={{marginLeft: 15}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: 'white',
    height: 40,
    marginTop: statusHeight,
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
