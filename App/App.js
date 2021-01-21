import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {navigationRef} from './NavigationService';

import Home from './screens/Home';
import Search from './screens/Search';
import Explore from './screens/Explore';
import Suscribe from './screens/Suscribe';
import VideoPlayer from './screens/VideoPlayer';
import Create from './screens/Create';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from './services/VectorIcons';
import Foundation from 'react-native-vector-icons/Foundation';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      tabBarOptions={{
        style: {
          borderWidth: 0,
          backgroundColor: 'transparent',
          alignItems: 'center',
        },
        labelStyle: {
          fontSize: 14,
          backgroundColor: 'transparent',
        },
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
      backBehavior={'history'}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Trang chủ',
          tabBarIcon: ({color, focused}) =>
            !focused ? (
              <Foundation name={'home'} size={28} color={'gray'} />
            ) : (
              <Foundation name={'home'} size={28} color={'red'} />
            ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Khám phá',
          tabBarIcon: ({color, focused}) =>
            !focused ? (
              <MaterialIcons name={'explore'} size={28} color={'gray'} />
            ) : (
              <MaterialIcons name={'explore'} size={28} color={'red'} />
            ),
        }}
      />
      <Tab.Screen
        name="Create"
        component={Create}
        options={{
          // tabBarLabel: 'Khám phá',
          tabBarIcon: ({color, focused}) =>
            !focused ? (
              <MaterialIcons name={'explore'} size={28} color={'gray'} />
            ) : (
              <MaterialIcons name={'explore'} size={28} color={'red'} />
            ),
        }}
      />
      <Tab.Screen
        name="Suscribe"
        component={Suscribe}
        options={{
          tabBarLabel: 'Kênh đăng ký',
          tabBarIcon: ({color, focused}) =>
            !focused ? (
              <MaterialCommunityIcons
                name={'youtube-subscription'}
                size={28}
                color={'gray'}
              />
            ) : (
              <MaterialCommunityIcons
                name={'youtube-subscription'}
                size={28}
                color={'red'}
              />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeStackNavigator() {
  return (
    <Stack.Navigator initialRouteName={'HomeTabNavigator'} headerMode={'none'}>
      <Stack.Screen name="HomeTabNavigator" component={HomeTabNavigator} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <HomeStackNavigator />
    </NavigationContainer>
  );
};

export default App;
