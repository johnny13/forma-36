import { css } from '@emotion/core';
import React, { forwardRef } from 'react';
import { Primitive } from '@contentful/f36-core';
import type {
  CommonProps,
  ComponentVariant,
  Simplify,
} from '@contentful/f36-core';
import type { ComponentType, ReactElement } from 'react';
import tokens from '@contentful/f36-tokens';

type IconVariant = Simplify<ComponentVariant | 'muted' | 'white'>;

const styles = {
  large: css({
    height: '32px',
    width: '32px',
  }),
  medium: css({
    height: '24px',
    width: '24px',
  }),
  negative: css({
    fill: tokens.colorNegative,
  }),
  positive: css({
    fill: tokens.colorPositive,
  }),
  root: css({
    display: 'inline-block',
    fill: tokens.colorBlueBase,
  }),
  secondary: css({
    fill: tokens.colorContrastMid,
  }),
  small: css({
    height: '18px',
    width: '18px',
  }),
  tiny: css({
    height: '16px',
    width: '16px',
  }),
  trimmed: css({
    width: 'auto',
  }),
  warning: css({
    fill: tokens.colorWarning,
  }),
  white: css({
    fill: tokens.colorWhite,
  }),
};

type AsOrChildren =
  | {
      as: ComponentType;
      children?: never;
    }
  | {
      as?: never;
      children: ReactElement | ReactElement[];
    };

export type IconInternalProps = {
  /**
   * The name prop is used to check if "trimmed" styling should be applied,
   * which sets the `width` to `auto`.
   */
  name?: string;
  size?: 'large' | 'medium' | 'small' | 'tiny';
  /**
   *
   */
  variant?: IconVariant;
  /**
   * SVG view-box attribute
   */
  viewBox?: `${number} ${number} ${number} ${number}`;
} & AsOrChildren;

export type IconProps = IconInternalProps &
  CommonProps &
  React.SVGAttributes<SVGSVGElement>;

export const Icon = forwardRef<SVGSVGElement, IconProps>(function Icon(
  {
    as,
    children,
    name,
    variant = 'primary',
    size = 'small',
    testId = 'cf-ui-icon',
    viewBox = '0 0 24 24',
    ...otherProps
  },
  forwardedRef,
) {
  const style = css`
    ${styles.root};
    ${variant ? styles[variant] : ''};
    ${size ? styles[size] : ''};
    ${name && name.toLowerCase().includes('trimmed') ? styles.trimmed : ''};
  `;

  const shared: any = {
    css: style,
    ref: forwardedRef,
    testId,
  };

  if (as && typeof as !== 'string') {
    return <Primitive {...otherProps} {...shared} as={as} />;
  }

  return (
    <Primitive
      height="1em"
      viewBox={viewBox}
      width="1em"
      {...otherProps}
      as="svg"
      {...shared}
    >
      {children}
    </Primitive>
  );
});
