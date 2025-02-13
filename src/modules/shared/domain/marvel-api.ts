export interface MarvelResponse<T> {
  code: number;
  status: string;
  data: MarvelDataResponse<T>;
  etag: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
}

export interface MarvelDataResponse<T> {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: T[];
}
