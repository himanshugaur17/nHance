import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import CustomButtonGroup from "./customButtonGroup";
import FormDropDownField from "./formDropDownField";
import FormTextField from "./formTextField";
const BasicInfo = () => {
  return (
    <SafeAreaView className="flex-1">

      <View className="space-y-8 flex-1 items-center top-40">
        <Text className="font-pmedium text-2xl">Profile</Text>
        {/* <Avatar
          rounded
          icon={{ name: "user", type: "font-awesome" }}
          onPress={() => console.log("upload photo!")}
          activeOpacity={0.7}
          size="medium"
          showEditButton
        /> */}
        <View className="w-full">
         <FormTextField
          title="Name"
          placeholder="Name"
          handleChangeText={(value) => console.log("text updated")}
        />
        </View>
        <View className="w-full">
        <FormTextField
          title="Age"
          placeholder="25"
          handleChangeText={(value) => console.log("age updated")}
        />
        </View>
        <View className="w-full">
        <FormDropDownField
          title={"Region:"}
          dropDownList={[
            { label: "India", value: "IN" },
            { label: "Hongkong", value: "HK" },
          ]}
          defaultValue={{ label: "India", value: "IN" }}
        />
        </View>
        <View className="w-full">
        <CustomButtonGroup
          buttonList={["Male", "Female"]}
          defaultSelectedButton={0}
        />
        </View>
        {/* <CustomButtonGroup
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
        />  */
        }
      </View>

    </SafeAreaView>
  );
};

export default BasicInfo;
