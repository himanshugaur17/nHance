import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
const BasicInfo = () => {
  return (
    <SafeAreaView>
      <View className="justify-center space-y-2">
        <Text className="font-pmedium text-base">Profile</Text>
        <Avatar
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          onPress={() => console.log("upload photo!")}
          activeOpacity={0.7}
          size="medium"
          showEditButton
        />
      </View>
    </SafeAreaView>
  );
};

export default BasicInfo;
