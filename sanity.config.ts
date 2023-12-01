/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { StructureResolver, deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";

import { theme } from "./sanity/theme2";
import { structure } from "./sanity/structure";

export default defineConfig({
  basePath: "/studio",
  title: "Radio Zirak • Studio",
  subtitle: "yes",
  projectId,
  dataset,
  theme,
  schema,
  plugins: [
    deskTool({
      structure: structure as StructureResolver,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
