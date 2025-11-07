import { useState, useEffect } from "react";
import type { Game } from "../types/Game";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/games")
      .then((res) => res.json())
      .then((data: Game[]) => setGames(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { games, loading, error };
}
