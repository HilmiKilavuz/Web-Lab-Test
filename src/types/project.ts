// Kategori literal tipler (union)
export type Category = "frontend" | "fullstack" | "backend";

// Sıralama seçenekleri
export type SortField = "year" | "title";
export type SortOrder = "asc" | "desc";

// Proje veri modeli (interface + readonly + optional fields)
export interface Project {
  readonly id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: Category;
  featured: boolean;
  image: string;
  demoUrl?: string;
  sourceUrl?: string;
}

// Filtre durumunu tutan arayüz
export interface FilterState {
  search: string;
  category: Category | "all";
  sortField: SortField;
  sortOrder: SortOrder;
}
