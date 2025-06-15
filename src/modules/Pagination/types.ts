export interface PaginationProps {
  totalItems: number;
  skip: number;
  take: number;
  onClick: (arg: boolean) => void;
}
