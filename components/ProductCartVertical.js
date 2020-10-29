import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

const ProductCartVertical = (props) => {
  const {imgUrl, description} = props;
  return (
    <View style={style.container}>
      <TouchableOpacity
        onPress={() => {
          console.log('test');
        }}>
        <View style={style.imgContainer}>
          <ImageBackground
            source={{
              uri:
                'https://levica.vn/wp-content/uploads/2017/12/wechat-fashion-main.jpg',
            }}
            style={style.img}
            resizeMode={'cover'}
          />
        </View>
      </TouchableOpacity>
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
    borderRadius: 15,
    width: '100%',
    height: 175,
    overflow: 'hidden',
    marginRight: 100,
  },
  container: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  cartImage: {
    flex: 1,
  },
});

export default ProductCartVertical;
