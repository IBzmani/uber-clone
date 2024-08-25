import { Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";

const Onboarding = () => {
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up" as never);
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text>Skip</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Onboarding;
