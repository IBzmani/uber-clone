import { Text } from "react-native";
import React, { useState, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { router } from "expo-router";
import Swiper from "react-native-swiper";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { onboarding } from "@/constants";

const Onboarding = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <SafeAreaView className="flex h-full items-center justify-between bg-white">
      <TouchableOpacity
        onPress={() => {
          router.replace("/(auth)/sign-up" as never);
        }}
        className="w-full flex justify-end items-end p-5"
      >
        <Text className="text-black text-md font-JakartaExtraBold">Skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full"></View>
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] mx-1 rounded-full"></View>
        }
        onIndexChanged={(index) => {
          setActiveIndex(index);
        }}
      >
        {onboarding.map((item) => {
          return (
            <View key={item.id} className="flex items-center justify-center">
              <View className="w-full h-[400px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </View>
              <View className="w-full px-5">
                <Text className="text-black text-2xl font-JakartaExtraBold text-center">
                  {item.title}
                </Text>
                <Text className="text-black text-base font-JakartaRegular text-center">
                  {item.description}
                </Text>
              </View>
            </View>
          );
        })}
      </Swiper>
    </SafeAreaView>
  );
};

export default Onboarding;
