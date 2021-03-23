import React, { forwardRef } from 'react';
import type { ReactElement } from 'react';

import { Icon } from './Icon';
import type { IconProps } from './Icon';

export type GenerateIconParameters = {
  name?: string;
  path: ReactElement;
  // props?: Partial<IconProps>;
  props?: Omit<IconProps, 'as' | 'children' | 'name' | 'viewBox'>;
  viewBox?: IconProps['viewBox'];
};

export function generateIcon({
  name,
  path,
  props,
  viewBox,
}: GenerateIconParameters) {
  const Component = forwardRef<SVGSVGElement, GenerateIconParameters['props']>(
    function (otherProps, forwardedRef) {
      return (
        <Icon
          {...props}
          {...otherProps}
          name={name}
          ref={forwardedRef}
          viewBox={viewBox}
        >
          {path}
        </Icon>
      );
    },
  );

  if (name) {
    Component.displayName = name;
  }

  return Component;
}
