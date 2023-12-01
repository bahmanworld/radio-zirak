
import { LuShapes, LuUser } from "react-icons/lu";
import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'genre',
    type: 'document',
    title: 'Genre',
    icon: LuShapes,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        default_value: Math.random()
      }
    ]
  } as SchemaTypeDefinition