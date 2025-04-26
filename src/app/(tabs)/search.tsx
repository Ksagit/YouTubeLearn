import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SerachPage() {
  const { search } = useLocalSearchParams<{ search: string }>();

  return (
    <SafeAreaView className="flex-1">
      <Text>{search}</Text>
    </SafeAreaView>
  );
}
