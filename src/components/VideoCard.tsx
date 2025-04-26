import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

export const VideoCard = ({ title }: { title: string }) => {
  const imagePath = (() => {
    switch (title) {
      case "React Native":
        return require("../../src/assets/thumbnails/React_Native_thumbnail.webp");
      case "React":
        return require("../../src/assets/thumbnails/React_thumbnail.png");
      case "JavaScript":
        return require("../../src/assets/thumbnails/JavaScript_thumbnail.png");
      case "TypeScript":
        return require("../../src/assets/thumbnails/TypeScript_thumbnail.png");
    }
  })();

  return (
    <Pressable>
      <Image
        style={{ width: 185, height: 120, borderRadius: 10, margin: 5 }}
        contentFit="fill"
        source={imagePath}
      />
      <View>
        <Text>{title} in 100 seconds</Text>
        <Text className="text-right">12.12.2012</Text>
      </View>
    </Pressable>
  );
};
