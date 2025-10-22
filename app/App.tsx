import { Redirect } from "expo-router";
import React from "react";
import "../global.css";

export default function App() {
  return (
    // <View className="flex-1 items-center justify-center ">
    //   <Text className="text-xl  text-blue-500">
    //     Welc to Nativewvvvvvvvvvvvvvvvvvvvvvvvnd!
    //   </Text>
    //   <Text className="text-xl font-work-black  text-blue-500">
    //     Welc to Nativewvvvvvvvvvvvvvvvvvvvvvvvnd!
    //   </Text>
    //   <Text className="text-xl font-work-light  text-blue-500">
    //     Welc to Nativewvvvvvvvvvvvvvvvvvvvvvvvnd!
    //   </Text>
    //   <Text className="text-xl  font-work-medium  text-blue-500">
    //     Welc to Nativewvvvvvvvvvvvvvvvvvvvvvvvnd!
    //   </Text>
    // </View>
    <Redirect href="/home" />
  );
}
