import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function LandingPage() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-red-500">
      <Text className="text-4xl">YouTube Learn</Text>
      <Link href="(tabs)/">Log in as guest</Link>
    </SafeAreaView>
  );
}
