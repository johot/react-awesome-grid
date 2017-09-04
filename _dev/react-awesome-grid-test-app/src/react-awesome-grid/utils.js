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
        let marginValues = props.margin.split(' ');

        finalStyle = {
            ...finalStyle,
            marginTop: parseInt(marginValues[0], 10),
            marginRight: parseInt(marginValues[1], 10),
            marginBottom: parseInt(marginValues[2], 10),
            marginLeft: parseInt(marginValues[3], 10),
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