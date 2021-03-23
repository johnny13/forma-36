import React, { Fragment } from 'react';

import { generateIcon } from './generateIcon';

export const HorizontalRuleTrimmed = generateIcon({
  name: 'HorizontalRuleTrimmed',
  path: (
    <Fragment>
      <path d="M0 0h12.6v18H0V0z" fill="none" />
      <path d="M0 8.4h12.6v1.3H0z" />
    </Fragment>
  ),
  viewBox: '0 0 12.6 18',
});
