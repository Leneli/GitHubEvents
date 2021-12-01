import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen, DetailsScreen } from '../screens';

const Stack = createStackNavigator();

export const Navigator = () => (
  <NavigationContainer>
      <Stack.Navigator initialRouteName="Main" screenOptions={{ headerBackTitleVisible: false }}>
        <Stack.Screen name="Main" component={MainScreen} options={{ title: 'GitHub Events' }} />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={({ route }) => ({ title: route.params.title })} />
      </Stack.Navigator>
    </NavigationContainer>
);