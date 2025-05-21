import { useMemo } from 'react';

import { useGetAllCategoriesQuery } from '@/redux/services/category';

export const useAttributesOptions = () => {
  const { data: categories = [] } = useGetAllCategoriesQuery(undefined);

  const { categoriesOptions, nameToIdMap } = useMemo(() => {
    const options: string[] = [];
    const map: Record<string, string> = {};

    categories.forEach(({ id, name }) => {
      options.push(name);
      map[name] = id;
    });

    return { categoriesOptions: options, nameToIdMap: map };
  }, [categories]);

  return { categoriesOptions, nameToIdMap };
};
