import { Stack } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
const RootLayout = () => {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
      <StatusBar backgroundColor="#161622" barStyle="light-content" />
    </>
  );
};

export default RootLayout;
