import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Vault from "../Screens/UnAuth/Vault/Vault";
import Password from "../Screens/UnAuth/Password/Password";
import Notes from "../Screens/UnAuth/Notes/Notes";
import Setting from "../Screens/UnAuth/Settings/Setting";
import {
  Shield,
  Lock,
  FileText,
  Settings,
} from "lucide-react-native"; 
import { Platform } from "react-native";
import { Colors } from "../../utils/Colors";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Vault"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#007AFF",
        tabBarInactiveTintColor: "#8e8e93",
        tabBarLabelStyle: { fontSize: 12 },
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          marginBottom: Platform.OS === 'ios'? 20 : 0,
          backgroundColor: Colors.white
        },
        tabBarIcon: ({ color, size, focused }) => {
          const iconProps = { color, size: 22, strokeWidth: focused ? 2.5 : 1.5 };

          switch (route.name) {
            case "Vault":
              return <Shield {...iconProps} />;
            case "Passwords":
              return <Lock {...iconProps} />;
            case "Notes":
              return <FileText {...iconProps} />;
            case "Settings":
              return <Settings {...iconProps} />;
            default:
              return null;
          }
        },
      })}
    >
      <Tab.Screen name="Vault" component={Vault} />
      <Tab.Screen name="Passwords" component={Password} />
      <Tab.Screen name="Notes" component={Notes} />
      <Tab.Screen name="Settings" component={Setting} />
    </Tab.Navigator>
  );
};

export default BottomTab;
