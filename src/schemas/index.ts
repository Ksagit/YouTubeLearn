import { z } from "zod";

export type YouTubeSearchResponse = z.infer<typeof YouTubeSearchSchema>;

export const YouTubeSearchSchema = z.object({
  kind: z.literal("youtube#searchListResponse"),
  etag: z.string(),
  nextPageToken: z.string().optional(),
  prevPageToken: z.string().optional(),
  regionCode: z.string().optional(),
  pageInfo: z.object({
    totalResults: z.number().int(),
    resultsPerPage: z.number().int(),
  }),
  items: z.array(
    z.object({
      kind: z.literal("youtube#searchResult"),
      etag: z.string(),
      id: z.object({
        kind: z.string(),
        videoId: z.string().optional(),
        channelId: z.string().optional(),
        playlistId: z.string().optional(),
      }),
      snippet: z.object({
        publishedAt: z.string().datetime(),
        channelId: z.string(),
        title: z.string(),
        description: z.string(),
        thumbnails: z.record(
          z.object({
            url: z.string().url(),
            width: z.number().int().positive().optional(),
            height: z.number().int().positive().optional(),
          }),
        ),
        channelTitle: z.string(),
        liveBroadcastContent: z.string(),
      }),
    }),
  ),
});
