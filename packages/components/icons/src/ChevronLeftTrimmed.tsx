import React, { Fragment } from 'react';

import { generateIcon } from './generateIcon';

export const ChevronLeftTrimmed = generateIcon({
  name: 'ChevronLeftTrimmed',
  path: (
    <Fragment>
      <path d="M5.6 5.6L4.5 4.5 0 9l4.5 4.5 1.1-1.1L2.1 9l3.5-3.4z" />
      <path d="M0 0h5.6v18H0V0z" fill="none" />
    </Fragment>
  ),
  viewBox: '0 0 5.6 18',
});
