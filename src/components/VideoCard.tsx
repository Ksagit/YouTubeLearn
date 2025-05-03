import { VideoType } from "@/schemas";
import { Image } from "expo-image";
import { Pressable, Text, View } from "react-native";

export const VideoCard = ({ video }: { video: VideoType }) => {
  const formattedDate = new Date(video.snippet.publishedAt).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" },
  );
  console.log(video);
  return (
    <Pressable className="items-center">
      <Image
        source={video.snippet.thumbnails.medium.url}
        style={{
          width: video.snippet.thumbnails.medium.width,
          height: video.snippet.thumbnails.medium.height,
          borderRadius: 10,
          margin: 5,
        }}
        contentFit="fill"
      />
      <View>
        <Text className="w-[22rem]" numberOfLines={1}>
          {video.snippet.title}
        </Text>
        <Text className="text-right text-gray-500">{formattedDate}</Text>
      </View>
    </Pressable>
  );
};
