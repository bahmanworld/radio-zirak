import { LuAlbum, LuCircleDot, LuClapperboard, LuDisc, LuDisc2, LuFilm } from "react-icons/lu";
import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'video',
    type: 'document',
    title: 'Video',
    icon: LuClapperboard,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        default_value: Math.random()
      }
    ]
  } as SchemaTypeDefinition