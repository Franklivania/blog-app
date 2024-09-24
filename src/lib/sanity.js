import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient ({
  projectId: process.env.NEXT_PROJECT_ID || "qyw74es2",
  apiVersion: "2024-01-01",
  dataset: "production",
  useCdn: false
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}