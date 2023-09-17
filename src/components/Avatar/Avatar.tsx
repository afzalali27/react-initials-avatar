import React from "react";
import "./avatar.css"

export interface AvatarProps{
  name: string;
}

const Avatar = ( {name}: AvatarProps) => {
  return <span className="avatar">{name}</span>
}

export default Avatar;