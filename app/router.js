import React from "react";
import { Platform, StatusBar } from "react-native";
import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createSwitchNavigator
} from "react-navigation";
import { FontAwesome } from "react-native-vector-icons";

import SignUp from "./screens/SignUp";
import SignIn from "./screens/SignIn";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import KeyPair from "./screens/KeyPair";
import FriendRef from "./screens/FriendRef";

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
};

export const SignedOut = createStackNavigator({
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      title: "Sign Up",
      header: null,
      animationEnabled: true,
      headerStyle
    } 
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      title: "Sign In",
      header: null,
      animationEnabled: true,
      headerStyle
    }
  },
  KeyPair: {
    screen: KeyPair,
    navigationOptions: {
      title: "Key Pair",
      header: null,
      animationEnabled: true,
      headerStyle
    }
  },
  FriendRef: {
    screen: FriendRef,
    navigationOptions: {
      title: "Friend Reference",
      header: null,
      animationEnabled: true,
      headerStyle
    }
  }
});

export const SignedIn = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="home" size={30} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user" size={30} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: '#7C2289'
      }
    }
  }
);

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn,
      },
      SignedOut: {
        screen: SignedOut
      },
      KeyPair: {
        screen: KeyPair
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};
