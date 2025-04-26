import Svg, { Path } from "react-native-svg";

export const SearchIcon = ({ color }: { color: string }) => (
  <Svg width={32} height={32} fill="none">
    <Path
      stroke={color ? color : "#2B2D42"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.06 21.081 28 28m-4-14c0 5.523-4.477 10-10 10S4 19.523 4 14 8.477 4 14 4s10 4.477 10 10Z"
    />
  </Svg>
);
