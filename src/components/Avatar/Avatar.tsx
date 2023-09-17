import React from "react";
import "./avatar.css"

export interface AvatarProps{
  name: string;
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

const Avatar = ( {name}: AvatarProps) => {
  return <span className="avatar">{extractInitials(name)}</span>
}

export default Avatar;