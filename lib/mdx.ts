import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { mdxComponents } from "@/components/mdx";

const CONTENT_PATH = path.join(process.cwd(), "lib/content");

export interface DocMeta {
  title: string;
  emoji: string;
}

export async function getDocContent(slug: string) {
  const filePath = path.join(CONTENT_PATH, slug, "docs.mdx");

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf-8");

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  return content;
}

export function getDocSlugs(): string[] {
  if (!fs.existsSync(CONTENT_PATH)) {
    return [];
  }

  return fs.readdirSync(CONTENT_PATH).filter((dir) => {
    const docsPath = path.join(CONTENT_PATH, dir, "docs.mdx");
    return fs.existsSync(docsPath);
  });
}
