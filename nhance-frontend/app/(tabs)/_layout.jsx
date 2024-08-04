import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const TabLayout = () => {
  const tabBarIconCmp = ({ focused, color, size, iconName }) => {
    return (
      <View className="bg-red-100" style={{ backgroundColor: "yellow" }}>
        <Text className="text-2xl text-red-400">Hp\opmm</Text>
        <FontAwesome size={28} color="yellow" name={iconName} />
      </View>
    );
  };
  return (
    <Tabs
      screenOptions={{ tabBarShowLabel: false, tabBarActiveTintColor: "red" }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused, color, size }) =>
            tabBarIconCmp(focused, color, size, "home"),
        }}
      />
      <Tabs.Screen
        name="meal"
        options={{
          title: "Meal",
          tabBarIcon: ({ focused, color, size }) =>
            tabBarIconCmp(focused, color, size, "food-bank"),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
