import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Text, View } from "react-native";
const FormDropDownField = ({ title, defaultValue, dropDownList }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  return (
    <View className="space-x-4 px-3 flex-row">
      <Text className="text-black-200 font-pmedium text-base pt-4 pl-2 w-1/5">
        {title}
      </Text>
      <View
        className="flex-1 h-16 bg-gray-50 border-2 border-red-300 rounded-2xl focus:border-primary
    text-black font-psemibold text-base px-2 pb-2"
      >
        <Picker
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
          style={{ marginLeft: -10 }}
        >
          {dropDownList.map(({ label, value }) => (
            <Picker.Item
              label={label}
              value={value}
              style={{ paddingLeft: 0 }}
            />
          ))}
        </Picker>
      </View>
    </View>
  );
};

export default FormDropDownField;
