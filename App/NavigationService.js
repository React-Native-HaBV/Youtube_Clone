import * as React from 'react';
import {
  CommonActions,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';
export const navigationRef = React.createRef();

/**
 * Call this function when you want to navigate to a specific route.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

/**
 * Call this function when you want to navigate to a specific route AND reset the navigation history.
 *
 * That means the user cannot go back. This is useful for example to redirect from a splashscreen to
 * the main screen: the user should not be able to go back to the splashscreen.
 *
 * @param routeName The name of the route to navigate to. Routes are defined in RootScreen using createStackNavigator()
 * @param params Route parameters.
 */
function navigateAndReset(routeName, params) {
  console.log(navigationRef.current);
  navigationRef.current.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{name: routeName, params}],
    }),
  );
}

function toggleDrawer() {
  navigationRef.current.dispatch(DrawerActions.toggleDrawer());
}

function goBack() {
  navigationRef.current.dispatch(CommonActions.goBack());
}

function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export default {
  navigate,
  navigateAndReset,
  toggleDrawer,
  goBack,
  replace,
};
