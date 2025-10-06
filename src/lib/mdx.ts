import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface ProjectData {
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  area?: string;
  coverImage?: string;
  description?: string;
  images?: string[];
  content?: string;
}

const contentDir = path.join(process.cwd(), "content", "portfolio");

export function getAllProjects(): ProjectData[] {
  // Verifica se o diretório existe
  if (!fs.existsSync(contentDir)) {
    return [];
  }
  
  const files = fs.readdirSync(contentDir);
  return files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(content);
      return { slug: file.replace(".md", ""), ...data } as ProjectData;
    });
}

export function getProjectBySlug(slug: string): ProjectData {
  const filePath = path.join(contentDir, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`Project not found: ${slug}`);
  }
  
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
  
  return {
    slug,
    ...data,
    content,
  } as ProjectData;
}
