import { SearchIcon } from "@/assets/svgs/SearchIcon";
import { TextInput, View } from "react-native";

export const SearchBar = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (text: string) => void;
}) => {
  return (
    <View className="border-primary mx-4 flex-1 flex-row items-center justify-center rounded-xl border-2 p-2">
      <SearchIcon />
      <TextInput
        className="flex-1 rounded-r-xl py-2"
        value={search}
        onChangeText={(newSearch) => setSearch(newSearch)}
      />
    </View>
  );
};
