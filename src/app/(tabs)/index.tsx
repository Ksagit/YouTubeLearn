import { useVideosQuery } from "@/app/queries";
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { TopBar } from "@/components/TopBar";
import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const {
    isPending: isReactNativePending,
    isError: isReactNativeError,
    data: reactNativeVideos,
  } = useVideosQuery("React Native");
  const {
    isPending: isReactPending,
    isError: isReactError,
    data: reactVideos,
  } = useVideosQuery("React");
  const {
    isPending: isTypeScriptPending,
    isError: isTypeScriptError,
    data: typeScriptVideos,
  } = useVideosQuery("TypeScript");
  const {
    isPending: isJavaScriptPending,
    isError: isJavaScriptError,
    data: javaScriptVideos,
  } = useVideosQuery("JavaScript");

  console.log(reactNativeVideos);
  return (
    <SafeAreaView className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <TopBar search={search} setSearch={setSearch} />
        <CategoryCarousel title="React Native" />
        <CategoryCarousel title="React" />
        <CategoryCarousel title="TypeScript" />
        <CategoryCarousel title="JavaScript" />
      </ScrollView>
    </SafeAreaView>
  );
}
