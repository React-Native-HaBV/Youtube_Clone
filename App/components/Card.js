import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import NavigationService from '../NavigationService';
import { useTheme } from "@react-navigation/native";

export default function Card(props) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={() =>
        NavigationService.navigate('VideoPlayer', {
          videoId: props.videoId,
          title: props.title,
        })
      }>
      <View style={{}}>
        <Image
          source={{
            uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault_live.jpg`,
          }}
          style={{
            width: '100%',
            height: 200,
          }}
        />
        <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
          <Image
            source={{
              uri:
                'https://images.unsplash.com/photo-1552607676-17f088307dce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=781&q=80',
            }}
            style={{width: 30, height: 30, borderRadius: 15}}
          />
          <View style={{marginLeft: 10, width: '90%'}}>
            <Text
              style={{fontSize: 16, fontWeight: '500', color: colors.iconColor}}
              numberOfLines={2}
              ellipsizeMode={'tail'}
            >
              {props.title}
            </Text>
            <Text style={{fontSize: 14, fontWeight: '400', color: 'gray'}}>
              {props.channel}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
