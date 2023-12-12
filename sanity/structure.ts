import { Text } from "@sanity/ui";
import { LuSettings } from "react-icons/lu";
import {
  StructureBuilder,
  StructureContext,
  StructureResolver,
  StructureResolverContext,
} from "sanity/desk";

export const structure: StructureResolver = (S: StructureBuilder, context: StructureResolverContext) => {

  const types = context.schema.getTypeNames()
  console.log('types:', types)

  return S.list()
    .id("cms")
    .title("CMS • Collections")
    .items([
      ...S.documentTypeListItems().filter(
        (type) =>
          !["settings", "artist", "genre", "ads", "layout"].includes(
            type.getId() as string
          )
      ),
      S.divider(),
      S.documentTypeListItem("artist"),
      S.documentTypeListItem("genre"),
      S.divider(),
      S.documentTypeListItem("layout"),
      S.documentTypeListItem("ads"),
      S.divider(),
      S.listItem()
        .title("Settings")
        .icon(LuSettings)
        .child(S.document().schemaType("settings").documentId("settings")),
    ]);
};
