import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

export const SuccessIcon = ({ width = 20, height = 20}: {width: number, height: number}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 23 20" fill="none">
      <Circle cx={10.75} cy={10} r={10} fill="none" />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.899 12.828a.997.997 0 01-.735-.292l-2.121-2.122A1 1 0 119.457 9l1.414 1.414 2.122-2.121a1 1 0 111.414 1.414l-2.828 2.829a.996.996 0 01-.68.292z"
        fill="#FFFFFF"
      />
    </Svg>
  );
};
