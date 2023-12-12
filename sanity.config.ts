/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { StructureResolver, deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

import { theme } from "./sanity/theme/theme1";
import { structure } from "./sanity/structure";
import { LuAccessibility } from "react-icons/lu";

export const workspace1Config =  defineConfig({
  name: 'studio',
  basePath: "/studio/cms",
  title: "Radio Zirak • CMS",
  icon: LuAccessibility,
  projectId,
  dataset,
  theme,
  schema,
  plugins: [
    deskTool({
      structure: structure as StructureResolver,
    }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
