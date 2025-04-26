import { SearchIcon } from "@/assets/svgs/SearchIcon";
import { router } from "expo-router";
import { Pressable, TextInput, View } from "react-native";

export const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (text: string) => void;
}) => {
  return (
    <View className="mx-4 flex-1 flex-row items-center justify-center rounded-xl border-2 border-primary p-2">
      <Pressable
        onPress={() =>
          router.navigate({
            pathname: "/(tabs)/search",
            params: { search: search },
          })
        }
      >
        <SearchIcon />
      </Pressable>
      <TextInput
        className="flex-1 rounded-r-xl py-2"
        value={search}
        onChangeText={(newSearch) => setSearch(newSearch)}
      />
    </View>
  );
};
