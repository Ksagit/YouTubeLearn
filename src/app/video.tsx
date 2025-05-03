import { useVideosQuery } from "@/queries";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function VideoPage() {
  const { etag, title } = useLocalSearchParams<{
    etag: string;
    title: string;
  }>();
  const { data } = useVideosQuery(title);
  const selectedVideo = data?.items.find((video) => video.etag === etag);

  return (
    <SafeAreaView className="flex-1">
      <View>
        <Text>{selectedVideo?.snippet.channelTitle}</Text>
        <Text>{selectedVideo?.snippet.title}</Text>
        <Text>{selectedVideo?.snippet.description}</Text>
      </View>
    </SafeAreaView>
  );
}
