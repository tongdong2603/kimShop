import React from 'react';
import {View, StyleSheet, ImageBackground, Text} from 'react-native';
import {Icon} from 'react-native-elements';

const ViewProduct = (props) => {
  return (
    <View style={style.card}>
      <View style={style.resizeImg}>
        <ImageBackground
          source={{
            uri:
              'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/everlane-cotton-linen-blazer-1555357950.jpg?crop=1xw:1xh;center,top&resize=480:*',
          }}
          resizeMode={'cover'} //'cover' | 'contain' | 'stretch' | 'repeat' | 'center'
          style={style.img}>
          <Icon
            name="heart"
            color="#00aced"
            type="font-awesome"
            style={{marginRight: 10}}
          />
        </ImageBackground>
      </View>
      <View>
        <Text style={style.titleProduct}>T-Shirt with Mountain Jacket</Text>
        <Text style={style.subPrice}>$80.00</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {},
  img: {
    width: '100%',
    height: '100%',
    alignItems: 'flex-end', //'flex-start' | 'flex-end' | 'center' | 'stretch' | 'space-between' | 'space-around'
  },
  resizeImg: {
    width: '100%',
    height: '90%',
  },
  card: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
  },
  titleProduct: {
    marginTop: 0,
    fontStyle: 'normal', //'normal' | 'italic'
    fontWeight: 'bold', //'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'
    marginHorizontal: 10,
  },
  subPrice: {
    marginHorizontal: 10,
  },
});

export default ViewProduct;
