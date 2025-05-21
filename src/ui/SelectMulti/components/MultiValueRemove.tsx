import { components, MultiValueRemoveProps } from 'react-select';

import { Option } from '../types';

export const MultiValueRemove = (props: MultiValueRemoveProps<Option>) => {
  return (
    <>
      <components.MultiValueRemove {...props}>
        <div>
          <img src="/close.svg" width={15} height={15} />
        </div>
      </components.MultiValueRemove>
    </>
  );
};
