import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EditTaskScreen, HomeScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';

export type RootStackParamList = {
  Home: undefined;
  EditTask: { taskId: number };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="EditTask" component={EditTaskScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
