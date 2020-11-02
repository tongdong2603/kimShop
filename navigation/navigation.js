import * as React from 'react';
import {Button, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreens from '../screens/HomeScreens';
import ProductCard from '../components/ProductCard';
import ProductCartVertical from '../components/ProductCartVertical';
import ViewProduct from '../components/ViewProduct';
import ShowAll from '../components/ShowAll';

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

export default function DrawerApp() {
  return (
    <Drawer.Navigator initialRouteName="Notifications">
      <Drawer.Screen name="Home" component={HomeScreens} />
      <Drawer.Screen name="Notifications" component={ViewProduct} />
    </Drawer.Navigator>
  );
}
