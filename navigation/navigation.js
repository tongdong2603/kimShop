import * as React from 'react';
import {Button, View, Text} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeScreens from '../screens/HomeScreens';
import CartScreens from '../screens/CartScreens';
import ProductsListScreens from '../screens/ProductsListScreens';
import ProductDetailScreens from '../screens/ProductDetailScreens';
import ViewProduct from '../components/ViewProduct';
import DrawerContent from '../components/DrawerContent';
import {createStackNavigator} from '@react-navigation/stack';

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const TabMaterialBottom = (props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={StackProducts} />
      <Tab.Screen name="Notifications" component={ViewProduct} />
    </Tab.Navigator>
  );
};

const StackProducts = () => {
  return (
    <Stack.Navigator
      headerMode="none"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreens} />
      <Stack.Screen name="ProductsList" component={ProductsListScreens} />
      <Stack.Screen name="Details" component={ProductDetailScreens} />
    </Stack.Navigator>
  );
};

const DrawerApp = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabMaterialBottom} />
      <Drawer.Screen name="Notifications" component={ViewProduct} />
    </Drawer.Navigator>
  );
};

module.exports = {
  DrawerApp,
  TabMaterialBottom,
  StackProducts,
};
