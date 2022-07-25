export const colorToRGB = (colorStr: string, opt: number) => {
  let finallyCor = '#f7bd19';
  let color1: number;
  let color2: number;
  let color3: number;
  if (colorStr.charAt(0) === '#') {
    colorStr = colorStr.substring(1);
    if (colorStr.length === 3) {
      colorStr = colorStr[0] + colorStr[0] + colorStr[1] + colorStr[1] + colorStr[2] + colorStr[2];
    } else if (colorStr.length === 8) {
      colorStr = colorStr.substring(0, 6);
    }
    if (/^[0-9a-fA-F]{6}$/.test(colorStr)) {
      color1 = parseInt(colorStr.substring(0, 2), 16);
      color2 = parseInt(colorStr.substring(2, 4), 16);
      color3 = parseInt(colorStr.substring(4, 6), 16);
      finallyCor = `rgba(${color1},${color2},${color3},${opt})`;
    }
  }
  return finallyCor;
};
