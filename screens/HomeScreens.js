import React from 'react';
import {FlatList, Text, View, StyleSheet, ScrollView} from 'react-native';
import HeaderComponent from '../components/Header';
import {ImgUrl, PRODUCTS, fashion, products} from '../dummyData/data';
import AvatarComponent from '../components/Avatar';
import ProductCard from '../components/ProductCard';
import ProductCartVertical from '../components/ProductCartVertical';
import ViewProduct from '../components/ViewProduct';
import ShowAll from '../components/ShowAll';
import {TabMaterialBottom} from '../navigation/navigation';

const HomeScreens = ({navigation}) => {
  return (
    //<TabMaterialBottom>
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
        <View>
          <View style={{marginTop: 10}}>
            <ShowAll navigation={navigation} />
          </View>
          <View style={{height: 400}}>
            <FlatList
              data={products}
              renderItem={ViewProduct}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
        <View>
          <View style={{marginTop: 10}}>
            <ShowAll></ShowAll>
          </View>
          <View style={{height: 400}}>
            <FlatList
              data={products}
              renderItem={ViewProduct}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </View>
    </ScrollView>
    //</TabMaterialBottom>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreens;
