import React from 'react';
import {FlatList, Text, View, StyleSheet, ImageBackground} from 'react-native';
import {Card, Tile} from 'react-native-elements';

const ActivityPrice = () => {
  return (
    <View>
      <Text style={style.title}>test</Text>
    </View>
  );
};

const ProductCard = (props) => {
  const {imgUrl, description} = props;
  return (
    <View style={style.imgContainer}>
      <ImageBackground
        source={require('../122431657_3910131275687542_1993352085136364773_o.jpg')}
        style={style.img}
        resizeMode={'cover'}>
        <View>
          <Text style={style.textTitle}>Stitch Detail Tunic Dress</Text>
          <Text style={style.subTitle}>$80.00</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    color: 'black',
  },
  img: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imgContainer: {
    borderRadius: 20,
    width: 240,
    height: 300,
    overflow: 'hidden',
    marginHorizontal: 10,
  },
  textTitle: {
    width: '70%',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 10,
    color: '#fff',
  },
  subTitle: {
    fontSize: 15,
    color: '#fff',
    marginHorizontal: 10,
    marginBottom: 10,
  },
  cartImage: {
    flex: 1,
  },
});

export default ProductCard;
