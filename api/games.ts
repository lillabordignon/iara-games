// /api/games.ts
import { readFileSync } from "fs";
import { join } from "path";

// cache simples em memória entre invocações
let cache: unknown | null = null;

export default function handler(_req: any, res: any) {
  try {
    if (!cache) {
      const file = readFileSync(join(process.cwd(), "data", "games.json"), "utf-8");
      cache = JSON.parse(file);
    }
    res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate=300");
    res.status(200).json(cache);
  } catch (e) {
    res.status(500).json({ error: "Failed to load games.json" });
  }
}
