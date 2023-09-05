/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Start from './views/Start';
import AboutUs from './views/AboutUs';
import {aboutParams} from './types/aboutParam';

const Stack = createNativeStackNavigator();

const App = (): JSX.Element => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Start"
          screenOptions={{
            headerBackTitle: 'Atras',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#F4511E',
            },
            headerTintColor: '#FFF',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen
            name="About Us"
            component={AboutUs}
            options={({route}) => ({
              title: (route.params as aboutParams).clienteId.toString(),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
