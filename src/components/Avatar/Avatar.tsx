import React from "react";
import "./avatar.css"
import { safe_style } from "../../helpers/styles_helper";

export interface AvatarProps{
  name: string;
  height: number;
  width: number;
  backgroundColor: string;
  color: string;
  borderRadius: number;
  borderWidth: number;
  borderColor: string;
}

const extractInitials = (name: String): String => {
  if (!name) return "?";
  let initials = "";
  const nameParts = name.trim().split(" ");
  for(const part of nameParts){
    initials += part[0].toUpperCase();
  }
  return initials;
}

const Avatar = ( {name, height, width, backgroundColor, color, borderRadius, borderWidth, borderColor}: AvatarProps) => {
  const styles = {
    height: safe_style('height', height, 'px'),
    width: safe_style('width', width, 'px'),
    fontSize: safe_style('fontSize', (height || 0)/2, 'px'),
    backgroundColor: safe_style('backgroundColor', backgroundColor),
    color: safe_style('color', color),
    borderRadius: safe_style('borderRadius', borderRadius, '%'),
    borderWidth: safe_style('borderWidth', borderWidth, 'px'),
    borderColor: safe_style('borderColor', borderColor),
    borderStyle: `${borderWidth ? 'solid' : 'none'}`
  }

  return <span className="avatar" style={styles}>{extractInitials(name)}</span>
}

export default Avatar;