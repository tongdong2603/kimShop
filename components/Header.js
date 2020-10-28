import React from 'react';
import {StyleSheet} from 'react-native';
import {Header, Icon} from 'react-native-elements';

const HeaderComponent = (props) => {
  const {openDrawer} = props;
  return (
    <Header
      backgroundColor="#fff"
      placement="center"
      leftComponent={
        <Icon
          name="options-outline"
          type="ionicon"
          onPress={() => openDrawer.toggleDrawer()}
        />
      }
      centerComponent={{text: 'MY TITLE', style: {color: 'black'}}}
      rightComponent={{icon: 'home', color: 'black'}}
    />
  );
};
export default HeaderComponent;
