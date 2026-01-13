import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';

export const VisibleIcon = () => {
  return (
    <Svg width="25px" height="25px" viewBox="0 0 24 24" fill="none">
      <G
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M15 12c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3z" />
        <Path d="M12 19.27c3.53 0 6.82-1.829 9.11-4.994.9-1.24.9-3.323 0-4.562C18.82 6.549 15.53 4.72 12 4.72c-3.53 0-6.82 1.829-9.11 4.994-.9 1.24-.9 3.323 0 4.562C5.18 17.441 8.47 19.27 12 19.27z" />
      </G>
    </Svg>
  );
};
