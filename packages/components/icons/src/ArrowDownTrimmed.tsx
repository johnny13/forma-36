import React, { Fragment } from 'react';

import { generateIcon } from './generateIcon';

export const ArrowDownTrimmed = generateIcon({
  name: 'ArrowDownTrimmed',
  path: (
    <Fragment>
      <path d="M0 10l5 5 5-5H0z" />
      <path d="M0 0h10v24H0V0z" fill="none" />
    </Fragment>
  ),
  viewBox: '0 0 10 24',
});
