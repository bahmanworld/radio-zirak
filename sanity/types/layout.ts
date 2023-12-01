
import { LuGlasses, LuLayoutDashboard, LuMegaphone, LuShapes, LuUser } from "react-icons/lu";
import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'layout',
    type: 'document',
    title: 'Layout',
    icon: LuLayoutDashboard,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
        default_value: Math.random()
      }
    ]
  } as SchemaTypeDefinition