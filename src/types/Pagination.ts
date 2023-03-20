export interface IPagination<T> {
  count: number;
  next: string;
  previous: string;
  total_pages: number;
  results: T[]
}