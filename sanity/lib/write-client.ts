import "server-only" // This is required to ensure the server-only code is not bundled for the client

import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, token } from '../env'

export const writeClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token,
})

if (!writeClient.config().token) {
  throw new Error("Write token not found.");
}