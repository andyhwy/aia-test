/**
 * @format
 * @flow strict-local
 */

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StatusBar, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Colors} from '../styles';
import {IconSizes, TextSizes} from '../styles/dimensions';
import {layouts} from '../styles/layouts';
import Dashboard from './Dashboard';
import Rewards from './Rewards';
import Settings from './Settings';

const Tab = createBottomTabNavigator();

export default function Home(navigation, route) {
  return (
    <View style={layouts.container}>
      <StatusBar backgroundColor={Colors.aiaRed} barStyle={'dark-content'} />
      <Tab.Navigator
        tabBarOptions={{
          showIcon: true,
          style: {borderTopWidth: 0},
        }}>
        <Tab.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            tabBarIcon: (tabInfo) => (
              <Icon
                name="home"
                size={
                  tabInfo.focused
                    ? IconSizes.tabIconSizeFocused
                    : IconSizes.tabIconSizeNormal
                }
                color={tabInfo.focused ? Colors.aiaRed : Colors.coolGrey9}
              />
            ),
            tabBarLabel: (tabInfo) =>
              tabInfo.focused || (
                <Text
                  style={{
                    fontSize: TextSizes.extraSmallText,
                    color: Colors.coolGrey9,
                  }}>
                  Home
                </Text>
              ),
          }}
        />
        <Tab.Screen
          name="Rewards"
          component={Rewards}
          options={{
            tabBarIcon: (tabInfo) => (
              <Icon
                name="medal"
                size={
                  tabInfo.focused
                    ? IconSizes.tabIconSizeFocused
                    : IconSizes.tabIconSizeNormal
                }
                color={tabInfo.focused ? Colors.aiaRed : Colors.coolGrey9}
              />
            ),
            tabBarLabel: (tabInfo) =>
              tabInfo.focused || (
                <Text
                  style={{
                    fontSize: TextSizes.extraSmallText,
                    color: Colors.coolGrey9,
                  }}>
                  Rewards
                </Text>
              ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: (tabInfo) => (
              <Icon
                name="cog"
                size={
                  tabInfo.focused
                    ? IconSizes.tabIconSizeFocused
                    : IconSizes.tabIconSizeNormal
                }
                color={tabInfo.focused ? Colors.aiaRed : Colors.coolGrey9}
              />
            ),
            tabBarLabel: (tabInfo) =>
              tabInfo.focused || (
                <Text
                  style={{
                    fontSize: TextSizes.extraSmallText,
                    color: Colors.coolGrey9,
                  }}>
                  Settings
                </Text>
              ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}
