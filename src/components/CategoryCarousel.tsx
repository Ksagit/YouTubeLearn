import { VideoCard } from "@/components/VideoCard";
import { YouTubeSearchResponse } from "@/schemas";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

export const CategoryCarousel = ({
  title,
  videos,
}: {
  title: string;
  videos: YouTubeSearchResponse;
}) => {
  return (
    <>
      <View className="mx-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-xl font-semibold text-primary">{title}</Text>
          <Pressable
            onPress={() =>
              router.navigate({
                pathname: "/(tabs)/search",
                params: { search: title },
              })
            }
          >
            <Text className="text-primary underline">Show more</Text>
          </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {videos.items.map((video) => (
            <VideoCard title={title} video={video} key={video.etag} />
          ))}
        </ScrollView>
      </View>
      <View className="h-0.5 bg-primary" />
    </>
  );
};
