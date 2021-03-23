import React from 'react';
import tokens from '@contentful/f36-tokens';
import {
  PolymorphicComponent,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import type { HeadingInternalProps, HeadingProps } from './Heading';
import { Heading } from './Heading';

const DEFAULT_TAG = 'h2';

export type SubheadingProps<E extends React.ElementType> = HeadingProps<E>;

const _Subheading: PolymorphicComponentWithRef<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = ({ children, ...otherProps }, ref) => {
  return (
    <Heading
      as={DEFAULT_TAG}
      testId="cf-ui-subheading"
      css={{
        fontSize: tokens.fontSizeL,
        lineHeight: tokens.lineHeightL,
      }}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Heading>
  );
};

export const Subheading: PolymorphicComponent<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(_Subheading);
