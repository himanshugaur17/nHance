import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import CustomButtonGroup from "./customButtonGroup";
import FormDropDownField from "./formDropDownField";
import FormTextField from "./formTextField";
const BasicInfo = () => {
  return (
    <SafeAreaView>
      <View className="justify-center space-y-2 flex-1 flex-col">
        <Text className="font-pmedium text-base">Profile</Text>
        <Avatar
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          onPress={() => console.log("upload photo!")}
          activeOpacity={0.7}
          size="medium"
          showEditButton
        />
        <FormTextField
          title="Name"
          placeholder="Name"
          handleChangeText={(value) => console.log("text updated")}
        />
        <CustomButtonGroup
          buttonList={["Male", "Female"]}
          defaultSelectedButton={0}
        />
        <FormTextField
          title="Age"
          placeholder="25"
          handleChangeText={(value) => console.log("age updated")}
        />
        <FormDropDownField
          title={"Region:"}
          dropDownList={[
            { label: "India", value: "IN" },
            { label: "Hongkong", value: "HK" },
          ]}
          defaultValue={{ label: "India", value: "IN" }}
        />
      </View>
    </SafeAreaView>
  );
};

export default BasicInfo;
