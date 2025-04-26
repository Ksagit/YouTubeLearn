import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const WelcomeMessage = () => {
  return (
    <View className="items-center gap-y-6">
      <Text className="text-center text-2xl font-bold text-white">
        Welcome to the best YouTube-based learning application!
      </Text>
      <Link href="(tabs)/" asChild>
        <Pressable className="bg-primary w-96 items-center rounded-2xl py-4">
          <Text className="rounded-md text-2xl font-bold text-white">
            Log in as guest
          </Text>
        </Pressable>
      </Link>
      <View className="flex-row flex-wrap items-center justify-center">
        <Text className="text-white">By continuing you agree with the </Text>
        {/* This link would redirect a user to the ToS page */}
        <Link href="" className="text-primary underline">
          Terms of Service
        </Link>
        <Text className="text-white"> and the </Text>
        {/* This link would redirect a user to the Privacy Policy page */}
        <Link href="" className="text-primary underline">
          Privacy Policy
        </Link>
      </View>
    </View>
  );
};
