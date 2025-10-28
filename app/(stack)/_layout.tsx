import { Stack } from "expo-router";
import React from "react";

const StackLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="home/index" options={{ title: "Home" }} />
      <Stack.Screen name="products/index" options={{ title: "Products" }} />
      <Stack.Screen name="profile/index" options={{ title: "Profile" }} />
      <Stack.Screen name="setting/index" options={{ title: "Setting" }} />
      <Stack.Screen
        name="products/[id]"
        initialParams={{ id: "default-id" }} // Set a default value for [id]
        options={({ route }) => ({
          title: `Product ${((route.params as { id?: string })?.id) ?? "default-id"}`, // Use the id parameter in options
        })}
      />
    </Stack>
  );
};

export default StackLayout;
