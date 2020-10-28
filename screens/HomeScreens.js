import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import HeaderComponent from '../components/Header';
import {ImgUrl, PRODUCTS} from '../dummyData/data';
import AvatarComponent from '../components/Avatar';
import ProductCard from '../components/ProductCard';

const HomeScreens = ({navigation}) => {
  return (
    <View style={style.container}>
      <HeaderComponent openDrawer={navigation} />
      <FlatList
        data={ImgUrl}
        renderItem={AvatarComponent}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
      <FlatList
        data={PRODUCTS}
        renderItem={ProductCard}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreens;
