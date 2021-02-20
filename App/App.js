import 'react-native-gesture-handler';
import React from 'react';
import {View, Text, Image} from 'react-native';

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
  useTheme,
} from '@react-navigation/native';
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

import {Provider, useSelector} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {reducer} from './reducer/reducer';
import {themeReducer} from './reducer/themeReducer';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const rootReducer = combineReducers({
  addData: reducer,
  changeTheme: themeReducer,
});
const store = createStore(rootReducer);

const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    backgroundColor: '#404040',
    iconColor: 'white',
    tabIcon: 'white',
  },
};
const customDefaultTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: 'white',
    iconColor: 'black',
    tabIcon: 'red',
  },
};

function HomeTabNavigator() {
  const {colors} = useTheme();
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
        activeTintColor: colors.tabIcon,
        // activeTintColor: 'red',
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

const RootNavigator = () => {
  let currentTheme = useSelector((state) => {
    return state.changeTheme;
  });
  return (
    <Provider store={store}>
      <NavigationContainer
        ref={navigationRef}
        theme={currentTheme ? customDefaultTheme : customDarkTheme}>
        <HomeStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
