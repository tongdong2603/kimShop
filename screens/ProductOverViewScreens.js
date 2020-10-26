import React from 'react';
import {FlatList, Text, View} from 'react-native';
import HeaderComponent from '../components/Header';

const ProductOverViewScreens = ({navigation}) => {
  return (
    <View>
      <HeaderComponent openDrawer={navigation} />
    </View>
  );
};

export default ProductOverViewScreens;
