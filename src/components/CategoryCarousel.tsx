import { ScrollView, Text, View } from "react-native";

export const CategoryCarousel = ({ title }: { title: string }) => {
  return (
    <View className="mx-2">
      <View className="flex-row items-center justify-between">
        <Text className="text-primary text-xl font-semibold">{title}</Text>
        <Text className="text-primary underline">Show more</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Text>qweqweqw</Text>
      </ScrollView>
    </View>
  );
};
