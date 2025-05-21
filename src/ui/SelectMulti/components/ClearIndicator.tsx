import { ClearIndicatorProps } from 'react-select';

import { Option } from '../types';

export const ClearIndicator = (props: ClearIndicatorProps<Option, true>) => {
  const {
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div {...restInnerProps} ref={ref}>
      <div style={{ paddingTop: '2px' }}>
        <img src="/close.svg" width={20} height={20} />
      </div>
    </div>
  );
};
