import React from "react";
import "./avatar.css";
import { safe_style } from "../../helpers/styles_helper";

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

const extractInitials = (str: String, splitWith: string = " "): String => {
  if (!str.trim()) return "?";
  let initials = "";
  const strParts = str
    .trim()
    .split(splitWith)
    .filter((p) => p);
  for (const part of strParts) {
    initials += part[0].toUpperCase();
  }
  return initials;
};

const Avatar = ({
  name,
  height,
  width,
  backgroundColor,
  color,
  borderRadius,
  borderWidth,
  borderColor,
  style = {},
  splitWith = " ",
}: AvatarProps) => {
  const styles = {
    height: safe_style("height", height, "px"),
    width: safe_style("width", width, "px"),
    fontSize: safe_style("fontSize", (height || 0) / 2, "px"),
    backgroundColor: safe_style("backgroundColor", backgroundColor),
    color: safe_style("color", color),
    borderRadius: safe_style("borderRadius", borderRadius, "%"),
    borderWidth: safe_style("borderWidth", borderWidth, "px"),
    borderColor: safe_style("borderColor", borderColor),
    borderStyle: `${borderWidth ? "solid" : "none"}`,
    minWidth: "fit-content",
    ...style,
  };

  return (
    <span className="avatar" style={styles}>
      {extractInitials(name, splitWith)}
    </span>
  );
};

export default Avatar;
