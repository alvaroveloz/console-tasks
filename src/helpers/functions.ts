import colors from "colors/safe";

const BLANK_DEFAULT = 60;
const SPACE = ' ';
export const fillSpace = (text: string) => {
  return colors.bgBlue(SPACE.repeat(BLANK_DEFAULT - text.length))
}
