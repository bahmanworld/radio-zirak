import { LuAlbum, LuCircleDot, LuDisc, LuDisc2 } from "react-icons/lu";
import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'album',
    type: 'document',
    title: 'Album',
    icon: LuDisc2,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        default_value: Math.random()
      }
    ]
  } as SchemaTypeDefinition