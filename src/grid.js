import React, { Component } from 'react';
import Column from './column'
import { convertStyleToProps } from './utils';
import BaseElement from './base-element';

// ***React-Native*** import { View } from 'react-native';

export default class Grid extends Component {

    itemStyle;

    updateStyle() {

        let direction = 'column';

        React.Children.forEach(this.props.children, (component) => {
            if (component && (component.type === Column)) {
                direction = 'row';
            }
        });

        this.itemStyle = { display: 'flex', flexDirection: direction, flex: 1 };

        this.itemStyle = {
            ...convertStyleToProps(this.props),
            ...this.itemStyle,
            ...this.props.style
        };
    }
    render() {
        this.updateStyle();
        
        return <BaseElement style={this.itemStyle}>
            {this.props.children}
        </BaseElement>
    }
}