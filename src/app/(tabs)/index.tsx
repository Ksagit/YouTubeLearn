import { useVideosQuery } from "@/queries";
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { SearchBar } from "@/components/TopBar";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const {
    isPending: isReactNativePending,
    isError: isReactNativeError,
    data: reactNativeVideos,
  } = useVideosQuery("React Native");
  // The remaining queries are commented out to conserve the YT Data API usage quota
  // const {
  //   isPending: isReactPending,
  //   isError: isReactError,
  //   data: reactVideos,
  // } = useVideosQuery("React");
  // const {
  //   isPending: isTypeScriptPending,
  //   isError: isTypeScriptError,
  //   data: typeScriptVideos,
  // } = useVideosQuery("TypeScript");
  // const {
  //   isPending: isJavaScriptPending,
  //   isError: isJavaScriptError,
  //   data: javaScriptVideos,
  // } = useVideosQuery("JavaScript");

  return (
    <SafeAreaView className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <SearchBar search={search} setSearch={setSearch} />
        {reactNativeVideos ? (
          <CategoryCarousel title="React Native" videos={reactNativeVideos} />
        ) : null}
        {/* {reactVideos ? (
          <CategoryCarousel title="React" videos={reactVideos} />
        ) : null}
        {typeScriptVideos ? (
          <CategoryCarousel title="TypeScript" videos={typeScriptVideos} />
        ) : null}
        {javaScriptVideos ? (
          <CategoryCarousel title="JavaScript" videos={javaScriptVideos} />
        ) : null} */}
      </ScrollView>
    </SafeAreaView>
  );
}
