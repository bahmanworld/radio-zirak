
import { LuGlasses, LuMegaphone, LuShapes, LuUser } from "react-icons/lu";
import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'ads',
    type: 'document',
    title: 'Ads',
    icon: LuMegaphone,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        default_value: Math.random()
      }
    ]
  } as SchemaTypeDefinition