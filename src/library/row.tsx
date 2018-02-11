import * as React from "react";
import ColumnRow, { VerticalContentAlignment, HorizontalContentAlignment } from "./column-row";

export interface RowProps {
  style?: any;
  height?: string | number;
  verticalContentAlignment?: VerticalContentAlignment;
  horizontalContentAlignment?: HorizontalContentAlignment;
}

export default class Row extends React.Component<RowProps> {
  static defaultProps = {
    height: "auto"
  };

  render() {
    return (
      <ColumnRow
        type="row"
        style={this.props.style}
        height={this.props.height}
        verticalContentAlignment={this.props.verticalContentAlignment}
        horizontalContentAlignment={this.props.horizontalContentAlignment}
      >
        {this.props.children}
      </ColumnRow>
    );
  }
}
