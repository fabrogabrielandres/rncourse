import { Link } from "expo-router";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function Home() {
  return (
    <SafeAreaView className="px-10">
      <Link className="mt-10 " href={"/profile"}>
        profile
      </Link>
      <Link className="mt-10 " href={"/setting"}>
        setting
      </Link>
      <Link className="mt-10 " href={"/products"}>
        Home
      </Link>
    </SafeAreaView>
  );
}

export default Home;
