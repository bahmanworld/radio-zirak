import { LuUsers } from "react-icons/lu";
import { SchemaTypeDefinition } from "sanity";

export default {
  name: "artist",
  type: "document",
  title: "Artist",
  icon: LuUsers,
  fields: [
    {
      name: "image",
      type: "image",
      title: "Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "bio",
      type: "text",
      title: "bio",
    },
    {
      name: "birthdate",
      type: "date",
      title: "Birth Date",
    },
  ],
} as SchemaTypeDefinition<"image">;
