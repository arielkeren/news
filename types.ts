export interface IMultimedia {
  url: string;
  format: string;
  height: number;
  width: number;
  type: string;
  subtype: string;
  caption: string;
  copyright: string;
}

export interface IArticle {
  section: string;
  subsection: string;
  title: string;
  abstract: string;
  url: string;
  uri: string;
  byline: string;
  item_type: string;
  updated_date: string;
  created_date: string;
  published_date: string;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: IMultimedia[];
  short_url: string;
}

export interface IAPIResponse {
  copyright: string;
  last_updated: string;
  num_results: number;
  results: IArticle[];
  section: string;
  status: string;
}

export type SectionType =
  | "arts"
  | "automobiles"
  | "books"
  | "business"
  | "fashion"
  | "food"
  | "health"
  | "home"
  | "insider"
  | "magazine"
  | "movies"
  | "nyregion"
  | "obituaries"
  | "opinion"
  | "politics"
  | "realestate"
  | "science"
  | "sports"
  | "sundayreview"
  | "technology"
  | "theater"
  | "t-magazine"
  | "travel"
  | "upshot"
  | "us"
  | "world";
