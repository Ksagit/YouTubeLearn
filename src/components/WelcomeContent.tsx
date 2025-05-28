import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const WelcomeContent = () => {
  return (
    <View className="items-center gap-y-6">
      <Text className="text-center text-2xl font-bold text-white">
        Welcome to the best YouTube-based learning application!
      </Text>
      <Link href="/(tabs)" asChild>
        <Pressable className="w-96 items-center rounded-2xl bg-primary py-4">
          <Text className="rounded-md text-2xl font-bold text-white">
            Log in as guest
          </Text>
        </Pressable>
      </Link>
    </View>
  );
};
