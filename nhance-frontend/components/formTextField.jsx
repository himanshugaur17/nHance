import React from "react";
import { KeyboardAvoidingView, Text, TextInput, View } from "react-native";

const FormTextField = ({
  title,
  placeholder,
  secureEntry,
  handleChangeText,
}) => {
  return (
    <KeyboardAvoidingView>
    <View className="space-x-4 px-3 flex-row">
      <Text className="text-black-200 font-pmedium text-base pt-4 pl-2 w-1/5">
        {title}
      </Text>

      <TextInput
        onChangeText={handleChangeText}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        secureTextEntry={secureEntry}
        className="flex-1 h-16 bg-gray-50 border-2 border-red-300 rounded-2xl focus:border-primary
    text-black font-psemibold text-base px-4 pb-2"
      />
    </View>
    </KeyboardAvoidingView>
  );
};

export default FormTextField;
