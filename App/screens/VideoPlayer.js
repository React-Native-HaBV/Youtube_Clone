import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import {WebView} from 'react-native-webview';
import NavigationService from '../NavigationService';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useTheme } from "@react-navigation/native";

export default function VideoPlayer({route}) {
  const {videoId, title} = route.params;
  const {colors} = useTheme();
  return (
    <View style={{flex: 1, marginTop: 50}}>
      <Ionicons
        name={'ios-arrow-back'}
        size={30}
        color={colors.iconColor}
        style={{paddingHorizontal: 15}}
        onPress={() => NavigationService.goBack()}
      />
      <View style={{width: '100%', height: 300}}>
        <WebView
          javaScriptEnable={true}
          source={{uri: `https://youtube.com/embed/${videoId}`}}
        />
      </View>
      <Text
        style={{
          fontSize: 20,
          width: Dimensions.get('screen').width - 50,
          margin: 0,
          color: colors.iconColor
        }}
        numberOfLines={2}>
        {title}
      </Text>
      <View style={{borderBottomWidth: 2}} />
    </View>
  );
}
