import { FC } from 'react';

export interface PaginationButtonProps {
  onClick?: () => void;
  pageNumber?: string | number;
  disabled?: boolean;
}
const PaginationButton: FC<PaginationButtonProps> = ({
  pageNumber,
  ...props
}) => {
  return (
    <button type="button" {...props}>
      {pageNumber}
    </button>
  );
};

export default PaginationButton;
