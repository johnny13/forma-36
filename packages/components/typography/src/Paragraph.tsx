import React from 'react';
import tokens from '@contentful/f36-tokens';
import {
  PolymorphicComponent,
  PolymorphicComponentWithRef,
} from '@contentful/f36-core';
import type { HeadingInternalProps, HeadingProps } from './Heading';
import { Heading } from './Heading';

const DEFAULT_TAG = 'p';

export type ParagraphProps<E extends React.ElementType> = HeadingProps<E>;

const Paragraph: PolymorphicComponentWithRef<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = ({ children, ...otherProps }, ref: typeof otherProps.ref) => {
  return (
    <Heading
      as={DEFAULT_TAG}
      testId="cf-ui-paragraph"
      css={{
        fontWeight: tokens.fontWeightNormal,
        color: tokens.colorTextMid,
        fontSize: tokens.fontSizeM,
        lineHeight: tokens.lineHeightM,
      }}
      {...otherProps}
      ref={ref}
    >
      {children}
    </Heading>
  );
};

export const _Paragraph: PolymorphicComponent<
  HeadingInternalProps,
  typeof DEFAULT_TAG
> = React.forwardRef(Paragraph);

_Paragraph.displayName = 'Paragraph';

export { _Paragraph as Paragraph };
