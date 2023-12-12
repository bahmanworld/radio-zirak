import { createClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "./env";

export const sanity = createClient({
  apiVersion: apiVersion,
  dataset: dataset,
  projectId: projectId,
});
