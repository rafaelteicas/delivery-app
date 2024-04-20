import React from 'react';

import {createText} from '@shopify/restyle';

import {Theme} from '@theme';

const SRText = createText<Theme>();
type SRTextType = React.ComponentProps<typeof SRText>;

interface TextProps extends SRTextType {}

export function Text({children, ...textProps}: TextProps) {
  return <SRText {...textProps}>{children}</SRText>;
}
