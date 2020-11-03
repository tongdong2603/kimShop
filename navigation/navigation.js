import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreens from '../screens/HomeScreens';
import ProductCard from '../components/ProductCard';
import ProductCartVertical from '../components/ProductCartVertical';
import ViewProduct from '../components/ViewProduct';
import ShowAll from '../components/ShowAll';
import DrawerContent from '../components/DrawerContent';

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

const Drawer = createDrawerNavigator();
const Tab

export default function DrawerApp() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreens} />
      <Drawer.Screen name="Notifications" component={ViewProduct} />
    </Drawer.Navigator>
  );
}
