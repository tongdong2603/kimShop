import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  Avatar,
  Title,
  Text,
  TouchableRipple,
  Switch,
  Caption,
  Paragraph,
  Drawer,
} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const DrawerContent = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={style.drawerContent}>
          <View style={style.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPkwYQuTYcqB7wnAvzApNYO2MLl_Llz4RyyA&usqp=CAU',
                }}
                size={50}
              />
              <View style={{flexDirection: 'column', marginLeft: 15}}>
                <Title style={style.title}>Tống Đồng</Title>
                <Caption style={style.caption}>@aikon</Caption>
              </View>
            </View>
            <View style={style.row}>
              <View style={style.section}>
                <Paragraph style={[style.paragraph, style.caption]}>
                  80
                </Paragraph>
                <Caption style={style.caption}>Following</Caption>
              </View>
              <View style={style.section}>
                <Paragraph style={[style.paragraph, style.caption]}>
                  100
                </Paragraph>
                <Caption style={style.caption}>Followers</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section>
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="home-outline" color={color} size={size} />
              )}
              label="Home"
              onPress={() => props.navigation.navigate('Home')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="notification-clear-all" color={color} size={size} />
              )}
              label="Notifications"
              onPress={() => props.navigation.navigate('Notifications')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account" color={color} size={size} />
              )}
              label="Profiles"
              onPress={() => props.navigation.navigate('Notifications')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="diamond-stone" color={color} size={size} />
              )}
              label="Diamond"
              onPress={() => props.navigation.navigate('Notifications')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="wrench-outline" color={color} size={size} />
              )}
              label="Settings"
              onPress={() => props.navigation.navigate('Notifications')}
            />
            <DrawerItem
              icon={({color, size}) => (
                <Icon name="account-check-outline" color={color} size={size} />
              )}
              label="Support"
              onPress={() => props.navigation.navigate('Notifications')}
            />
          </Drawer.Section>
          <Drawer.Section title="Preference">
            <TouchableRipple>
              <View style={style.preference}>
                <Text>Dark Theme</Text>
                <Switch />
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={style.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-to-app" color={color} size={size} />
          )}
          label="Support"
          onPress={() => props.navigation.navigate('Notifications')}
        />
      </Drawer.Section>
    </View>
  );
};

const style = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopWidth: 1,
    borderTopColor: '#f4f4f4',
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});

export default DrawerContent;
