import { type SchemaTypeDefinition } from "sanity";
import music from "./types/music";
import artist from "./types/artist";
import album from "./types/album";
import playlist from "./types/playlist";
import genre from "./types/genre";
import ads from "./types/ads";
import video from "./types/video";
import layout from "./types/layout";
import settings from "./types/settings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [music, album, playlist, video, artist, genre, layout, ads, settings],
};
