import type { Genre, Platform } from "@/types/entities";
import { create } from "zustand";

interface GameQuery {
  genre?: Genre | null;
  platform?: Platform | null;
  sort?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenre: (genre: Genre) => void;
  setPlatform: (platform: Platform) => void;
  setSortOrder: (sort: string) => void;

  // why not this? because we have different logic for each (like search)
  // setGameQuery: (gameQuery: GameQuery) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  // for search text we should clear other filters
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setGenre: (genre) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genre } })),
  setPlatform: (platform) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platform } })),
  setSortOrder: (sort) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sort } })),
}));

export default useGameQueryStore;
