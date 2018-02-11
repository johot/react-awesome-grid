import * as React from "react";
import ColumnRow, { VerticalContentAlignment, HorizontalContentAlignment } from "./column-row";

export interface GridProps {
  style?: any;
  verticalContentAlignment?: VerticalContentAlignment;
  horizontalContentAlignment?: HorizontalContentAlignment;
}

export default class Grid extends React.Component<GridProps> {
  _root: any;

  setNativeProps = (nativeProps: any) => {
    this._root.setNativeProps(nativeProps);
  };

  render() {
    return (
      <ColumnRow
        type="column"
        style={{ height: "100%", ...this.props.style }}
        verticalContentAlignment={this.props.verticalContentAlignment}
        horizontalContentAlignment={this.props.horizontalContentAlignment}
      >
        {this.props.children}
      </ColumnRow>
    );
  }
}
