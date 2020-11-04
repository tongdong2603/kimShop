import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';

const ShowAll = (props) => {
  const {navigation} = props;
  return (
    <View style={style.container}>
      <View style={style.wrapTitle}>
        <Text style={style.title}>Feature Products</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <View style={style.wrapSubTitle}>
          <Text style={style.subTitle}>Show All</Text>
          <Text style={style.subTitle}>></Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', //'row', 'row-reverse', 'column', 'column-reverse'
    justifyContent: 'space-between', //"flex-start", 'flex-end', 'center', space-between, space-around, space-evenly
    alignItems: 'flex-end',
  },
  wrapTitle: {
    marginHorizontal: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
  },
  wrapSubTitle: {
    flexDirection: 'row', //'row', 'row-reverse', 'column', 'column-reverse'
  },
  subTitle: {
    alignItems: 'flex-start',
    marginHorizontal: 10,
    fontSize: 17,
  },
});

export default ShowAll;
