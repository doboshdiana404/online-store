import { Category } from '@/redux/services/category';

export interface CheckboxListProps {
  title: string;
  list: Omit<Category, 'description' | 'imageName'>[];
  searchName?: string;
}
