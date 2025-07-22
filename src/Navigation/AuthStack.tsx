import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Auth/Login';

const Stack = createNativeStackNavigator();
 
const screens = [
  {
    name: 'Login',
    component : Login
  }
];

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      {screens.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={{
              headerShown: false,
            }}
          />   
        );
      })}
    </Stack.Navigator>
  );
};

export default AuthStack;