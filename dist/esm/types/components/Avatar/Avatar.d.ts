import React from "react";
import "./avatar.css";
export interface AvatarProps {
    name: string;
    height: number;
    width: number;
    backgroundColor: string;
    color: string;
    borderRadius: number;
    borderWidth: number;
    borderColor: string;
    style?: {
        [key: string]: string | number;
    };
    splitWith?: string;
}
declare const Avatar: ({ name, height, width, backgroundColor, color, borderRadius, borderWidth, borderColor, style, splitWith, }: AvatarProps) => React.JSX.Element;
export default Avatar;
