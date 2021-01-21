// import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/Home';
import SearchScreen from "./screens/SearchScreen";

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={''} />
      <Tab.Screen name="Kham Pha" component={''} />
      <Tab.Screen name="Plus" component={''} />
      <Tab.Screen name="Kenh dang ky" component={''} />
      <Tab.Screen name="Thu vien" component={''} />
    </Tab.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      {/*<Home/>*/}
      <SearchScreen/>
    </NavigationContainer>
  );
};

export default App;
