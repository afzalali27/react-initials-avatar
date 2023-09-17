import React from "react";
import "./avatar.css";
export interface AvatarProps {
    name: string;
}
declare const Avatar: ({ name }: AvatarProps) => React.JSX.Element;
export default Avatar;
