"use client";

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { NextStudio } from "next-sanity/studio";

import project from "@/sanity/schemas/project";
import about from "@/sanity/schemas/about";
import contact from "@/sanity/schemas/contact";
import siteSettings from "@/sanity/schemas/siteSettings";

const config = defineConfig({
  name: "premier-construction",
  title: "Premier Construction CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [project, about, contact, siteSettings],
  },
});

export default function StudioPage() {
  return <NextStudio config={config} />;
}
