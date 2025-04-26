import { SettingsIcon } from "@/assets/svgs/SettingsIcon";
import { CategoryCarousel } from "@/components/CategoryCarousel";
import { SearchBar } from "@/components/SearchBar";
import { Link } from "expo-router";
import { useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <SafeAreaView className="flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="mx-2 flex-row items-center">
          <SearchBar search={search} setSearch={setSearch} />
          {/* This would redirect a user to the settings page */}
          <Link href="">
            <SettingsIcon />
          </Link>
        </View>
        <CategoryCarousel title="React Native" />
        <CategoryCarousel title="React" />
        <CategoryCarousel title="TypeScript" />
        <CategoryCarousel title="JavaScript" />
      </ScrollView>
    </SafeAreaView>
  );
}
