import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import App4 from "./app4/home";

import { Ionicons } from "@expo/vector-icons";

const A4 = createStackNavigator({
  home: {
    screen: App4,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(A4);
