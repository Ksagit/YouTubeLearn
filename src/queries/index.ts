import { YouTubeSearchSchema } from "@/schemas";
import { useQuery } from "@tanstack/react-query";

export const useVideosQuery = (search: string) => {
  return useQuery({
    queryKey: ["search", search],
    queryFn: async () => {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(search)}&part=snippet&type=video&key=${process.env.EXPO_PUBLIC_YOUTUBE_DATA_API_KEY}`,
      );
      if (!response.ok) {
        throw new Error("YouTube API request failed");
      }
      console.log(response);
      const data = await response.json();
      return YouTubeSearchSchema.parse(data);
    },
    gcTime: Infinity,
    retry: false,
    staleTime: Infinity,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });
};
