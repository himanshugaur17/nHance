import { ButtonGroup } from "@rneui/themed";
import React, { useState } from "react";
import { KeyboardAvoidingView, Text, View } from "react-native";
const CustomButtonGroup = ({
  buttonList,
  defaultSelectedButton,
  additionalStyle,
}) => {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
  return (
    <KeyboardAvoidingView>
      <View className="space-x-4 px-3 flex-row">
        <Text className="text-black-200 font-pmedium text-base pt-6 pl-2 w-1/5">
          Gender
        </Text>
        <ButtonGroup
          buttons={buttonList}
          selectedIndex={selectedButtonIndex}
          onPress={(value) => setSelectedButtonIndex(value)}
          buttonContainerStyle={{
            height: "100%",
            width: "100%",

            ...additionalStyle,
          }}
          containerStyle={{
            height: 64,
            flex: 1,
          }}
          buttonStyle={{ borderColor: "pink" }}
          selectedButtonStyle={{ backgroundColor: "#FF3131" }}
          selectedTextStyle={{ color: "white" }}
          textStyle={{ color: "#FF3131" }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default CustomButtonGroup;
