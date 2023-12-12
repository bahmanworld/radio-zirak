import { SchemaTypeDefinition } from "sanity";
import { LuMusic } from "react-icons/lu";
import ListPicker from "../components/ListPicker";

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
      components: {
        input: ListPicker
      }
    },
  ],
} as SchemaTypeDefinition;
