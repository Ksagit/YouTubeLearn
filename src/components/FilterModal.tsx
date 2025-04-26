import { Modal, Pressable, Text, View } from "react-native";

export const FilterModal = ({
  isOpen,
  setIsOpen,
  setFilter,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setFilter: (filter: string) => void;
}) => {
  return (
    <Modal transparent visible={isOpen} onRequestClose={() => setIsOpen(false)}>
      <View className="flex-1 items-center justify-center bg-black/50">
        <View className="h-96 w-80 items-center justify-center rounded-xl bg-secondary">
          <Text className="text-2xl font-bold text-white">
            Sort records by:
          </Text>
          <Pressable
            className="w-full p-4"
            onPress={() => {
              setFilter("Upload date: latest");
              setIsOpen(false);
            }}
          >
            <Text className="text-lg font-semibold text-white">
              Upload date: latest
            </Text>
          </Pressable>
          <Pressable
            className="w-full p-4"
            onPress={() => {
              setFilter("Upload date: oldest");
              setIsOpen(false);
            }}
          >
            <Text className="text-lg font-semibold text-white">
              Upload date: oldest
            </Text>
          </Pressable>
          <Pressable
            className="w-full p-4"
            onPress={() => {
              setFilter("Most popular");
              setIsOpen(false);
            }}
          >
            <Text className="text-lg font-semibold text-white">
              Most popular
            </Text>
          </Pressable>
          <Pressable
            className="mt-4 w-48 items-center rounded-lg bg-primary p-4"
            onPress={() => setIsOpen(false)}
          >
            <Text className="text-lg font-bold text-white">Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};
