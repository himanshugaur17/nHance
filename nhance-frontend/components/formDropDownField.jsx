import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Text, View } from "react-native";
const FormDropDownField = ({ title, defaultValue, dropDownList }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  return (
    <View className="space-x-4 px-3 flex-row">
      <Text className="text-black-200 font-pmedium text-base">{title}</Text>
      <View
        className="w-full h-16 bg-gray-100 border-2 rounded-2xl focus:border-primary text-black
      font-psemibold text-base pl-2 pb-2"
      >
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          {dropDownList.map(({ label, value }) => (
            <Picker.Item label={label} value={value} />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default FormDropDownField;
