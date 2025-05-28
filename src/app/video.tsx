import { useVideosQuery } from "@/queries";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView, Text, View, ActivityIndicator } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import { useState, useCallback } from "react";
import { colors } from "@/utils";

export default function VideoPage() {
  const { etag, title, videoId: paramVideoId } = useLocalSearchParams<{
    etag?: string;
    title?: string;
    videoId?: string;
  }>();

  const { data, isLoading, isError } = useVideosQuery(title || "");
  const [playing, setPlaying] = useState(false);
  const [loadingVideo, setLoadingVideo] = useState(true);

  let selectedVideo;
  let videoIdToPlay = paramVideoId;

  if (!videoIdToPlay && data?.items) {
    selectedVideo = data.items.find((video) => video.etag === etag);
    videoIdToPlay = selectedVideo?.id?.videoId;
  }

  const onStateChange = useCallback((state: string) => {
    if (state === "ended") {
      setPlaying(false);
    }
    if (state === "buffering" || state === "unstarted") {
      setLoadingVideo(true);
    } else {
      setLoadingVideo(false);
    }
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color={colors.primary} />
        <Text className="mt-2">Loading video details...</Text>
      </SafeAreaView>
    );
  }

  if (isError || !videoIdToPlay) {
    return (
      <SafeAreaView className="flex-1 justify-center items-center bg-white p-4">
        <Text className="text-red-500 text-lg font-bold mb-2">Error loading video or video ID not found.</Text>
        <Text className=" text-center">Please ensure you have a valid video ID to play.</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 ">
        <View className="w-full aspect-video bg-black">
          <YoutubeIframe
            height={300}
            play={playing}
            videoId={videoIdToPlay}
            onChangeState={onStateChange}
          />
        </View>
        <View className="p-4">
          <Text className="text-base mb-1">
            {selectedVideo?.snippet.channelTitle}
          </Text>
          <Text className="text-2xl font-bold mb-2">
            {selectedVideo?.snippet.title}
          </Text>
          <Text className="text-sm leading-5">
            {selectedVideo?.snippet.description}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}