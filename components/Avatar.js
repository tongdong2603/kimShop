import React from 'react';
import {Header, Icon, Avatar} from 'react-native-elements';
import {FlatList, Text, View, StyleSheet} from 'react-native';

const AvatarComponent = (props) => {
  const {imgUrl} = props;
  return (
    <View style={style.avatar}>
      <Avatar
        rounded
        size={60}
        icon={{name: 'home'}}
        containerStyle={{backgroundColor: '#deeeff'}}
      />
      <Text>Men</Text>
    </View>
  );
};

const style = StyleSheet.create({
  avatar: {
    alignItems: 'center',
    margin: 10,
    marginHorizontal: 10,
  },
});

export default AvatarComponent;
