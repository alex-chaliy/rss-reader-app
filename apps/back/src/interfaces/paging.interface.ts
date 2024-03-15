export interface PagedData<DataType> {
  data: DataType;
  offsetStart: number; // from 0
  offsetEnd: number;
  message?: string;
  pageNumber?: number;
}