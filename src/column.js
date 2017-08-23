import React, { Component } from 'react';
import { convertStyleToProps, generateRowColumnSizeStyle } from './utils';

export default class Column extends Component {

    itemStyle;

    updateStyle() {

        let direction = 'column';

        React.Children.forEach(this.props.children, (component) => {
            if (component && (component.type === Column)) {
                direction = 'row';
            }
        });

        // Default values
        this.itemStyle = {

            display: 'flex',
            flexDirection: direction,

            ...convertStyleToProps(this.props),
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
    width: '1*'
};