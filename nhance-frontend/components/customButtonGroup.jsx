import { ButtonGroup } from "@rneui/themed";
import React, { useState } from "react";
import { Text, View } from "react-native";
const CustomButtonGroup = ({
  buttonList,
  defaultSelectedButton,
  additionalStyle,
}) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  buttonList = ["Male", "Female"];
  return (
    <View className="space-x-4 px-3 flex-row">
      <Text className="text-black-200 font-pmedium text-base">Gender</Text>
      <ButtonGroup
        buttons={buttonList}
        selectedIndex={selectedButtonIndex}
        onPress={(value) => selectedButtonIndex(value)}
        buttonContainerStyle={{
          height: "100%",
          flex: 1,
          ...additionalStyle,
        }}
        containerStyle={{
          paddingBottom: 8,
          paddingHorizontal: 8,
          height: 64,
          flex: 1,
        }}
        buttonStyle={{ borderWidth: 2, borderColor: "pink", borderRadius: 10 }}
        selectedButtonStyle={{ backgroundColor: "#FF3131" }}
        selectedTextStyle={{ color: "white" }}
        textStyle={{ color: "#FF3131" }}
      />
    </View>
  );
};

export default CustomButtonGroup;
