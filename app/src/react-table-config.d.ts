import {
  UseSortByColumnProps,
  UseGlobalFiltersInstanceProps,
  UseGlobalFiltersOptions,
} from "react-table";

declare module "react-table" {
  export interface TableInstance<D extends object = {}>
    extends UseGlobalFiltersInstanceProps<D> {}
  export interface TableOptions<D extends object = {}>
    extends UseGlobalFiltersOptions<D> {}

  export interface ColumnInstance<D extends object = {}>
    extends UseSortByColumnProps<D> {}
}
