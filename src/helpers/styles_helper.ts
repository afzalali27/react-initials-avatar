import { AVATAR_STYLES } from "./constants";

type StyleProp = "height" | "width" | "fontSize" | "backgroundColor" | "color" | "borderRadius" | "borderWidth" | "borderColor";

export const safe_style = (prop: StyleProp, value: any, unit: string = '') => {
  return value ? `${value}${unit}` : AVATAR_STYLES[prop];
}
