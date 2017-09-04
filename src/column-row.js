import React, { Component } from 'react';
import { convertStyleToProps, generateRowColumnSizeStyle } from './utils';
// ***React-Native*** import { View } from 'react-native';
import Align from './align'
import Column from './column'
import Row from './row'

export default class ColumnRow extends Component {

    itemStyle;

    updateStyle(type) {

        let direction = type;

        React.Children.forEach(this.props.children, (component) => {
            if (component && (component.type === Column)) {
                direction = 'row';
            } else if (component && (component.type === Row)) {
                direction = 'column';
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
        if (type === 'column') {

            if (this.props.width) {
                let generatedStyle = generateRowColumnSizeStyle(this.props.width);
                // Append
                this.itemStyle = { ...generatedStyle, ...this.itemStyle };
            }

        } else {

            if (this.props.height) {
                let generatedStyle = generateRowColumnSizeStyle(this.props.height);
                // Append
                this.itemStyle = { ...generatedStyle, ...this.itemStyle };
            }
        }
    }

    render() {
        this.updateStyle(this.props.type);

        // Wrap in Align block?
        if (this.props.horizontalContentAlignment || this.props.verticalContentAlignment) {
            return <div style={this.itemStyle}>
                <Align horizontalAlignment={this.props.horizontalContentAlignment || "left"} verticalAlignment={this.props.verticalContentAlignment || "top"}>
                    {this.props.children}
                </Align>
            </div>
        } else {
            return <div style={this.itemStyle}>
                {this.props.children}
            </div>
        }
    }
}