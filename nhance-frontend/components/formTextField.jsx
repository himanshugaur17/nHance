import React from "react";
import { Text, TextInput, View } from "react-native";

const FormTextField = ({
  title,
  placeholder,
  secureEntry,
  handleChangeText,
}) => {
  return (
    <View className="space-x-4 px-3 flex-row">
      <Text className="text-black-200 font-pmedium text-base">Name</Text>
      <TextInput
        onChangeText={handleChangeText}
        placeholder="Name"
        placeholderTextColor="#7b7b8b"
        secureTextEntry={secureEntry}
        className="w-full h-16 bg-gray-100 border-2 rounded-2xl focus:border-primary
    text-black font-psemibold text-base px-2 pb-2"
      />
    </View>
  );
};

export default FormTextField;
