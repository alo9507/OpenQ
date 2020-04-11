interface RGB {
  b: number;
  g: number;
  r: number;
}

function rgbToYIQ({ r, g, b }: RGB): number {
  return (r * 299 + g * 587 + b * 114) / 1000;
}
function hexToRgb(hex: string): RGB | undefined {
  if (!hex || hex === undefined || hex === "") {
    return undefined;
  }

  const result: RegExpExecArray | null = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    hex
  );

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : undefined;
}

function contrast(
  colorHex: string | undefined,
  threshold: number = 128
): string {
  if (colorHex === undefined) {
    return "#000";
  }

  const rgb: RGB | undefined = hexToRgb(colorHex);

  if (rgb === undefined) {
    return "#000";
  }

  return rgbToYIQ(rgb) >= threshold ? "#000" : "#fff";
}

function lightenDarkenColor(col, amt) {
  var num = parseInt(col, 16);
  var r = (num >> 16) + amt;
  var b = ((num >> 8) & 0x00ff) + amt;
  var g = (num & 0x0000ff) + amt;
  var newColor = g | (b << 8) | (r << 16);
  return newColor.toString(16);
}

export { contrast, lightenDarkenColor };
