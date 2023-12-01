import { LuGalleryVertical, LuGalleryVerticalEnd, LuLibrary } from "react-icons/lu";
import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'playlist',
    type: 'document',
    title: 'Playlist',
    icon: LuLibrary,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        default_value: Math.random()
      }
    ]
  } as SchemaTypeDefinition