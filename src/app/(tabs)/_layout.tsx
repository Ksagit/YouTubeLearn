import { colors } from "@/app/utils";
import { HomeIcon } from "@/assets/svgs/HomeIcon";
import { SearchIcon } from "@/assets/svgs/SearchIcon";
import { Tabs } from "expo-router";

export default function ProtectedLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.secondary },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.white,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
