import React, { Component } from 'react';
import { convertStyleToProps, generateRowColumnSizeStyle } from './utils';

export default class Row extends Component {

    itemStyle;

    updateStyle() {

        let direction = 'row';

        React.Children.forEach(this.props.children, (component) => {
            if (component && (component.type === Row)) {
                direction = 'column';
            }
        });

        // Default style
        this.itemStyle = { display: 'flex', flexDirection: direction };

        this.itemStyle = {
            ...convertStyleToProps(this.props),
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