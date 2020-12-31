export interface PaginationResponse<T> {
    list?: T[];
    totalRecords?: number;
    totalPages?: number;
    startPage?: number;
    endPage?: number;
}
