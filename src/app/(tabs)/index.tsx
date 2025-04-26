import { CategoryCarousel } from "@/components/CategoryCarousel";
import { TopBar } from "@/components/TopBar";
import { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";

export default function HomePage() {
  const [search, setSearch] = useState("");

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
