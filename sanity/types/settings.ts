import { LuSettings} from "react-icons/lu";
import { SchemaTypeDefinition } from "sanity";

export default {
    name: 'settings',
    type: 'document',
    title: 'Settings',
    icon: LuSettings,
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title',
      }
    ]
  } as SchemaTypeDefinition