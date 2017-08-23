import React, { Component } from 'react';

// Returns a style based on props
function xamlify(props) {
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
      marginLeft: marginValues[0] + "px",
      marginTop: marginValues[1] + "px",
      marginRight: marginValues[2] + "px",
      marginBottom: marginValues[3] + "px"
    }
  }

  if (props.backgroundColor) {
    finalStyle = { ...finalStyle, backgroundColor: props.backgroundColor };
  }

  return finalStyle;
}

function generateRowColumnSizeStyle(widthOrHeight) {
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
      flexBasis: number + 'px',
      overflow: 'hidden'
    };
  }

  return itemStyle;
}

export class Grid extends Component {

  itemStyle;

  updateStyle() {

    let direction = 'column';

    React.Children.forEach(this.props.children, (component) => {
      //debugger;
      if (component && (component.type === Column)) {
        direction = 'row';
      }
    });

    this.itemStyle = { display: 'flex', flexDirection: direction, flex: '1' };

    this.itemStyle = {
      ...xamlify(this.props),
      ...this.itemStyle,
      ...this.props.style
    };
  }
  render() {
    this.updateStyle();

    return <div style={this.itemStyle}>
      {this.props.children}
    </div >
  }
}

export class Row extends Component {

  itemStyle;

  updateStyle() {

    // Default style
    this.itemStyle = { display: 'flex', flexDirection: 'row' };

    this.itemStyle = {
      ...xamlify(this.props),
      ...this.itemStyle,
      ...this.props.style
    };

    // Setup style based on width property
    if (this.props.height) {

      let generatedStyle = generateRowColumnSizeStyle(this.props.height);

      // Append
      this.itemStyle = { ...generatedStyle, ...this.itemStyle };
    }
  }
  render() {
    this.updateStyle();

    return <div style={this.itemStyle}>
      {this.props.children}
    </div >
  }
}

Row.defaultProps = {
  height: 'auto'
};

export class Column extends Component {

  itemStyle;

  updateStyle() {

    // Default values
    this.itemStyle = {

      display: 'flex',
      flexDirection: 'column',

      ...xamlify(this.props),
      ...this.itemStyle,
      ...this.props.style
    };

    // Setup style based on width property
    if (this.props.width) {

      let generatedStyle = generateRowColumnSizeStyle(this.props.width);

      // Append
      this.itemStyle = { ...generatedStyle, ...this.itemStyle };
    }
  }

  render() {
    this.updateStyle();

    return <div style={this.itemStyle}>
      {this.props.children}
    </div >
  }
}

Column.defaultProps = {
  width: 'auto'
};

export class View extends Component {

  itemStyle;

  componentWillMount() {

    this.itemStyle = {
      ...xamlify(this.props),
      ...this.props.style,
      ...this.itemStyle
    }

    if (this.props.horizontalAlignment === "right") {
      // Right
      let addedStyle = { marginLeft: 'auto' };
      this.itemStyle = { ...this.itemStyle, ...addedStyle };
    } else if (this.props.horizontalAlignment === "left") {
      // Left
      let addedStyle = { marginRight: 'auto' };
      this.itemStyle = { ...this.itemStyle, ...addedStyle };
    } else if (this.props.horizontalAlignment === "center") {
      // Center
      let addedStyle = { marginLeft: 'auto', marginRight: 'auto' };
      this.itemStyle = { ...this.itemStyle, ...addedStyle };
    } else if (this.props.horizontalAlignment === "stretch") {
      // Stretch
      let addedStyle = { flex: 1 };
      this.itemStyle = { ...this.itemStyle, ...addedStyle };
    }

    if (this.props.verticalAlignment === "bottom") {
      // Bottom
      let addedStyle = {
        alignSelf: 'flex-end'
      };
      this.itemStyle = { ...this.itemStyle, ...addedStyle };
    } else if (this.props.verticalAlignment === "top") {
      // Top
      let addedStyle = {
        alignSelf: 'flex-start'
      };
      this.itemStyle = { ...this.itemStyle, ...addedStyle };
    } else if (this.props.verticalAlignment === "center") {
      // Center
      let addedStyle = {
        alignSelf: 'center'
      };
      this.itemStyle = { ...this.itemStyle, ...addedStyle };
    } else if (this.props.verticalAlignment === "stretch") {
      // Stretch
      let addedStyle = {
        alignSelf: 'stretch'
      };
      this.itemStyle = { ...this.itemStyle, ...addedStyle };
    }
  }

  render() {
    // This will fill any previous flex container but override the flex direction
    // to make sure we always use row which is what left/right top/bottom is based on
    return <div style={{ flex: '1', display: 'flex', flexDirection: 'row' }}>
      <div style={this.itemStyle}>
        {this.props.children}
      </div>
    </div>
  }
}