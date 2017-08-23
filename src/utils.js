// Returns a style based on props
export function convertStyleToProps(props) {
  let finalStyle = {};

  // width
  if (props.width) {
    finalStyle = { ...finalStyle, width: props.width };
  }

  // height
  if (props.height) {
    finalStyle = { ...finalStyle, height: props.height };
  }

  // margin
  if (props.margin) {
    let marginValues = props.margin.split(" ");

    finalStyle = {
      ...finalStyle,
      marginLeft: marginValues[0],
      marginTop: marginValues[1],
      marginRight: marginValues[2],
      marginBottom: marginValues[3]
    }
  }

  if (props.backgroundColor) {
    finalStyle = { ...finalStyle, backgroundColor: props.backgroundColor };
  }

  return finalStyle;
}

export function generateRowColumnSizeStyle(widthOrHeight) {
  let number = parseInt(widthOrHeight, 10);
  let itemStyle = {};

  if (widthOrHeight.endsWith("*")) {
    // Star (%)
    itemStyle = {
      ...itemStyle,
      flexGrow: number,
      flexBasis: 0,
      overflow: 'hidden'
    };
  } else if (widthOrHeight === 'auto') {
    // Auto
    itemStyle = {
      ...itemStyle,
      flexBasis: 'auto',
      overflow: 'hidden'
    };
  }
  else {
    // Pixel
    itemStyle = {
      ...itemStyle,
      flexBasis: number,
      overflow: 'hidden'
    };
  }

  return itemStyle;
}