import CustomButton from "@/components/shared/CustomButton/CustomButton";
import { Link, router } from "expo-router";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {
  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/profile")}
          className="mb-2"
          color="secondary"
        >
          Profile
        </CustomButton>

        <CustomButton
          onPress={() => router.push("/setting")}
          className="mb-2"
          color="tertiary"
        >
          Ajustes
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton variant="text-only" className="mb-10" color="primary">
            Productos
          </CustomButton>
        </Link>

        {/* <Link className="mb-5" href="/products">
          Productos{' '}
        </Link>
        <Link className="mb-5" href="/profile">
          Perfil{' '}
        </Link>
        <Link className="mb-5" href="/settings">
          Ajustes{' '}
        </Link> */}
      </View>
    </SafeAreaView>
  );
}

export default Home;
