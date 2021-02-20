import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import NavigationService from '../NavigationService';
import { useTheme } from "@react-navigation/native";

export default function MiniCard(props) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={() =>
        NavigationService.navigate('VideoPlayer', {
          videoId: props.videoId,
          title: props.title,
        })
      }>
      <View
        style={{flexDirection: 'row', margin: 5}}
        onPress={() => NavigationService.navigate('VideoPlayer')}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault_live.jpg`,
          }}
          style={{
            width: '45%',
            height: 100,
          }}
        />
        <View
          style={{
            paddingLeft: 10,
          }}>
          <Text
            style={{fontSize: 16, width: Dimensions.get('screen').width / 2, color: colors.iconColor}}
            numberOfLines={3}
            ellipsizeMode={'tail'}>
            {props.title}
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>
            {props.channel}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
