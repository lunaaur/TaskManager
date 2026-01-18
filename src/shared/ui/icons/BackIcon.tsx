import React from 'react';
import Svg, { Path } from 'react-native-svg';


export const BackIcon = ({ width, height, color }: any) => {
  return (
    <Svg
      width={width || 17}
      height={height || 12}
      viewBox={`0 0 ${height ? height : 17} ${width ? width : 12}`}
      fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.28159 6.64537C-0.097594 6.25402 -0.0938262 5.62936 0.292893 5.24264L5.24264 0.292893C5.63316 -0.0976311 6.26633 -0.0976311 6.65685 0.292893C7.04738 0.683417 7.04738 1.31658 6.65685 1.70711L3.41416 4.9498H15.0313C15.5836 4.9498 16.0313 5.39752 16.0313 5.9498C16.0313 6.50209 15.5836 6.9498 15.0313 6.9498H3.41427L6.65691 10.1924C7.04743 10.583 7.04743 11.2161 6.65691 11.6067C6.26638 11.9972 5.63322 11.9972 5.24269 11.6067L0.292945 6.65691C0.289123 6.65309 0.285338 6.64924 0.28159 6.64537Z"
        fill={color || 'black'}
      />
    </Svg>
  );
};
