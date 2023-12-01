
import { LuUser } from "react-icons/lu";
import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'artist',
    type: 'document',
    title: 'Artist',
    icon: LuUser,
    fields: [
      {
        name: 'image',
        type: 'image',
        title: 'Image',
      },
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        value: Math.random()
      }
    ]
  } as SchemaTypeDefinition