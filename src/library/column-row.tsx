import * as React from "react";
import Column from "./column_";
import Row from "./row_";

export type VerticalContentAlignment = "center" | "top" | "bottom" | "flex-start" | "flex-end" | "space-around" | "space-between";
export type HorizontalContentAlignment = "center" | "left" | "right" | "flex-start" | "flex-end" | "space-around" | "space-between";
export type ColumnRowType = "row" | "column";

export interface ColumnRowProps {
  type: ColumnRowType;
  style?: any;
  width?: string | number;
  height?: string | number;
  verticalContentAlignment?: VerticalContentAlignment;
  horizontalContentAlignment?: HorizontalContentAlignment;
}

export default class ColumnRow extends React.Component<ColumnRowProps> {
  render() {
    const generatedStyle = this.generateStyle();

    return <div style={generatedStyle}>{this.props.children}</div>;
  }

  private generateContentAlignmentStyle(): any {
    let generatedStyle = {};

    if (this.props.verticalContentAlignment) {
      let contentAlignmentValue = "";

      switch (this.props.verticalContentAlignment) {
        case "center":
          contentAlignmentValue = "center";
          break;
        case "top":
          contentAlignmentValue = "flex-start";
          break;
        case "bottom":
          contentAlignmentValue = "flex-end";
          break;
        default:
          contentAlignmentValue = this.props.verticalContentAlignment;
      }

      if (this.props.type === "column") {
        generatedStyle = { ...generatedStyle, justifyContent: contentAlignmentValue };
      } else {
        generatedStyle = { ...generatedStyle, alignItems: contentAlignmentValue };
      }
    }

    if (this.props.horizontalContentAlignment) {
      let contentAlignmentValue = "";

      switch (this.props.horizontalContentAlignment) {
        case "center":
          contentAlignmentValue = "center";
          break;
        case "left":
          contentAlignmentValue = "flex-start";
          break;
        case "right":
          contentAlignmentValue = "flex-end";
          break;
        default:
          contentAlignmentValue = this.props.horizontalContentAlignment;
      }

      if (this.props.type === "column") {
        generatedStyle = { ...generatedStyle, alignItems: contentAlignmentValue };
      } else {
        generatedStyle = { ...generatedStyle, justifyContent: contentAlignmentValue };
      }
    }

    return generatedStyle;
  }

  private generateRowColumnSizeStyle(widthOrHeight: string | number) {
    let widthOrHeightNumber = parseInt(widthOrHeight.toString(), 10);
    let itemStyle;

    // If the value is "*" we treat it as "1*"
    if (isNaN(widthOrHeightNumber)) {
      widthOrHeightNumber = 1;
    }

    if (widthOrHeight.toString().endsWith("*")) {
      // Star (%)
      itemStyle = {
        flexGrow: widthOrHeightNumber,
        flexBasis: 0,
        overflow: "hidden"
      };
    } else if (widthOrHeight === "auto") {
      // Auto
      itemStyle = {
        flexBasis: "auto",
        overflow: "hidden"
      };
    } else {
      // Pixel
      itemStyle = {
        flexBasis: widthOrHeightNumber,
        overflow: "hidden"
      };
    }

    return itemStyle;
  }

  private generateStyle(): any {
    let direction = this.props.type;
    let innerRowOrColumns: boolean = false;

    React.Children.forEach(this.props.children, component => {
      if (component && (component as any).type === Column) {
        direction = "row";
        innerRowOrColumns = true;
      } else if (component && (component as any).type === Row) {
        direction = "column";
        innerRowOrColumns = true;
      }
    });

    if (this.props.verticalContentAlignment && innerRowOrColumns) {
      console.error("A " + this.props.type + " that uses vertical content alignment has child row/columns. This will cause unexcpected rendering issues and should be avoided.");
    }

    if (this.props.horizontalContentAlignment && innerRowOrColumns) {
      console.error("A " + this.props.type + " that uses horizontal content alignment has child row/columns. This will cause unexcpected rendering issues and should be avoided.");
    }

    // Default values
    let generatedStyle = {
      display: "flex",
      flexDirection: direction,
      ...this.props.style
    };

    // Setup style based on width property
    if (this.props.type === "column") {
      if (this.props.width) {
        const rowColSizeStyle = this.generateRowColumnSizeStyle(this.props.width);
        // Append
        generatedStyle = { ...generatedStyle, ...rowColSizeStyle };
      }

      // Add any content alignment styles
      const contentAlignmentStyle = this.generateContentAlignmentStyle();
      generatedStyle = { ...generatedStyle, ...contentAlignmentStyle };
    } else {
      if (this.props.height) {
        const rowColSizeStyle = this.generateRowColumnSizeStyle(this.props.height);
        // Append
        generatedStyle = { ...generatedStyle, ...rowColSizeStyle };
      }

      // Handle content align
      // Add any content alignment styles
      const contentAlignmentStyle = this.generateContentAlignmentStyle();
      generatedStyle = { ...generatedStyle, ...contentAlignmentStyle };
    }

    return generatedStyle;
  }
}

// Column.defaultProps = {
//     width: '1*'
// };
