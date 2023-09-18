export const breakpointGenerator = (
  fontSizeArray: [number, number, number]
) => {
  return {
    fontSize: `${fontSizeArray[0]}px`,
    "@media (min-width:600px)": {
      fontSize: `${fontSizeArray[0]}px`,
    },
    "@media (min-width:900px)": {
      fontSize: `${fontSizeArray[1]}px`,
    },
    "@media (min-width:1200px)": {
      fontSize: `${fontSizeArray[2]}px`,
    },
    "@media (min-width:1344px)": {
      fontSize: `${fontSizeArray[2]}px`,
    },
  };
};
