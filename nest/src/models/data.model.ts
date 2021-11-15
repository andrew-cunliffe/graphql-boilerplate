export interface DataList<T> {
    list: T[];
    skip: number;
    limit: number;
    total: number;
}
