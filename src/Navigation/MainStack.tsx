import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Auth/Login';
import Vault from '../Screens/UnAuth/Vault/Vault';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

const screens = [
  {
    name: 'BottomTab',
    component : BottomTab
  }
];

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="BottomTab">
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

export default MainStack;