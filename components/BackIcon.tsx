import { width } from "./OpenGraphImage";
interface BackIconProps {
  isHovered?: boolean;
  width?: number;
  height?: number;
}

export function BackIcon(props: BackIconProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      //   fill={props.isHovered ? "#f3bb2a" : "#000000"}
      width={props.width?.toString() + "px" || "50px"}
      height={props.height?.toString() + "px" || "50px"}
      className="hover:scale-110"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill="#000000"
          d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        ></path>
        <path
          fill="#000000"
          d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        ></path>
      </g>
    </svg>
  );
}
