import React from "react";
import { IconProps } from "./type";

const Icon: React.ComponentFactory = (props: IconProps, ref) => {
  const {
    children,
    width = '1em',
    height = '1em'
    
  } = props
  return <svg ref={ref} width={width} height={height}>{children}</svg>
}