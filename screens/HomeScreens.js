import React from 'react';
import {FlatList, Text, View, StyleSheet, ScrollView} from 'react-native';
import HeaderComponent from '../components/Header';
import {ImgUrl, PRODUCTS, fashion, products} from '../dummyData/data';
import AvatarComponent from '../components/Avatar';
import ProductCard from '../components/ProductCard';
import ProductCartVertical from '../components/ProductCartVertical';
import ViewProduct from '../components/ViewProduct';

const HomeScreens = ({navigation}) => {
  return (
    <ScrollView>
      <View style={style.container}>
        <HeaderComponent openDrawer={navigation} />
        <View style={{height: 'auto'}}>
          <FlatList
            data={ImgUrl}
            renderItem={AvatarComponent}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View>
          <FlatList
            data={PRODUCTS}
            renderItem={ProductCard}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View>
          <FlatList
            data={fashion}
            renderItem={ProductCartVertical}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <View style={{height: 'auto'}}>
          <FlatList
            data={products}
            renderItem={ViewProduct}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreens;
