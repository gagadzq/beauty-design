import React from "react";

export interface IconBaseProps extends React.HTMLProps<HTMLSpanElement> {
  rotate?: number;
  spin?: boolean;
}

export type IconProps = React.HTMLAttributes<SVGAElement> & IconBaseProps;
