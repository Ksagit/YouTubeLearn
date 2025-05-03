import { VideoType } from "@/schemas";
import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export const VideoCard = ({
  title,
  video,
  large,
}: {
  title: string;
  video: VideoType;
  large?: boolean;
}) => {
  const formattedDate = new Date(video.snippet.publishedAt).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "short", day: "numeric" },
  );

  return (
    <Pressable
      className="items-center"
      onPress={() =>
        router.navigate({
          pathname: "/video",
          params: { etag: video.etag, title: title },
        })
      }
    >
      <Image
        source={video.snippet.thumbnails.medium.url}
        style={{
          width: large
            ? video.snippet.thumbnails.medium.width + 50
            : video.snippet.thumbnails.medium.width,
          height: video.snippet.thumbnails.medium.height,
          borderRadius: 10,
          margin: 5,
        }}
        contentFit="fill"
      />
      <View>
        <Text className={large ? "w-[26rem]" : "w-[22rem]"} numberOfLines={1}>
          {video.snippet.title}
        </Text>
        <Text className="text-right text-gray-500">{formattedDate}</Text>
      </View>
    </Pressable>
  );
};
