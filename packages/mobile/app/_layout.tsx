import "@/globals.css";
import "expo-dev-client";

import { Slot, useRouter } from "expo-router";
import { useShareIntent } from "expo-share-intent";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { View } from "react-native";

import { Providers } from "@/lib/providers";

export default function RootLayout() {
  const router = useRouter();
  const { hasShareIntent, shareIntent, resetShareIntent } = useShareIntent();

  useEffect(() => {
    if (hasShareIntent) {
      router.replace({
        pathname: "sharing",
        params: { shareIntent: JSON.stringify(shareIntent) },
      });
      resetShareIntent();
    }
  }, [hasShareIntent]);
  return (
    <Providers>
      <View className="h-full w-full bg-white">
        <Slot />
        <StatusBar style="auto" />
      </View>
    </Providers>
  );
}
