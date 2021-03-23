import React, { Fragment } from 'react';

import { generateIcon } from './generateIcon';

export const HeadingTrimmed = generateIcon({
  name: 'HeadingTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h8.4v18H0V0z" fill="none" />
      <path d="M6.3 3.8v4.1H2.1V3.8H0V14.2h2.1V9.7h4.2v4.5h2.1V3.8z" />
    </Fragment>
  ),
  viewBox: '0 0 8.4 18',
});
