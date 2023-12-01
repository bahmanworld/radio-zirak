import { SchemaTypeDefinition } from "sanity";
import { LuMusic } from "react-icons/lu";

export default {
  name: "music",
  type: "document",
  title: "Music",
  icon: LuMusic,
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      default_value: Math.random(),
    },
  ],
} as SchemaTypeDefinition;
