import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { VideoCard } from "@/components/VideoCard";
import { Pressable, ScrollView, Text, View } from "react-native";
import { FilterModal } from "@/components/FilterModal";
import { useVideosQuery } from "@/queries";

export default function SerachPage() {
  const { search } = useLocalSearchParams<{ search: string }>();
  const { data: searchedVideos } = useVideosQuery(search);
  const [isOpen, setIsOpen] = useState(false);
  const [filter, setFilter] = useState("Most Popular");

  return (
    <SafeAreaView className="flex-1">
      <FilterModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setFilter={setFilter}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Pressable
          className="flex-row items-center justify-end p-3"
          onPress={() => {
            setIsOpen(true);
          }}
        >
          <Text className="">Sort by: </Text>
          <Text className="text-primary">{filter}</Text>
        </Pressable>
        <View className="flex-1 items-center gap-y-4">
          {searchedVideos?.items.map((video) => (
            <VideoCard
              title={search}
              video={video}
              large={true}
              key={video.etag}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
