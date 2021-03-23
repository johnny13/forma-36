import React, { Fragment } from 'react';

import { generateIcon } from './generateIcon';

export const ArrowUp = generateIcon({
  name: 'ArrowUp',
  path: (
    <Fragment>
      <path d="M7 14l5-5 5 5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </Fragment>
  ),
});
