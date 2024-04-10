/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Image, StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BrowseScreen from './Browse';
import AddScreen from './Add';
import ProfileScreen from './Profile';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: {
            borderRadius: 20,
            bottom: 10,
            height: 69,
            marginHorizontal: 10,
            backgroundColor: 'white',
            borderTopWidth: 0,
          },
        }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                style={styles.icon}
                source={
                  focused
                    ? require('../../../assets/icons/home-filled.png')
                    : require('../../../assets/icons/home.png')
                }
              />
            ),
            tabBarLabel: 'Browse',
          }}
          name="Browse"
          component={BrowseScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../../../assets/icons/add-filled.png')
                    : require('../../../assets/icons/add.png')
                }
                style={styles.icon}
              />
            ),
            tabBarLabel: 'Add',
          }}
          name="Add"
          component={AddScreen}
        />
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({focused}) => (
              <Image
                source={
                  focused
                    ? require('../../../assets/icons/person-filled.png')
                    : require('../../../assets/icons/person.png')
                }
                style={styles.icon}
              />
            ),
            tabBarLabel: 'Profile',
          }}
          name="Profile"
          component={ProfileScreen}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: 30,
    width: 30,
  },
});

export default HomeScreen;
