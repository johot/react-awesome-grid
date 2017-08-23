import React, { Component } from 'react';
import Column from './column'
import { convertStyleToProps } from './utils';

export default class Grid extends Component {

    itemStyle;

    updateStyle() {

        let direction = 'column';

        React.Children.forEach(this.props.children, (component) => {
            if (component && (component.type === Column)) {
                direction = 'row';
            }
        });

        this.itemStyle = { display: 'flex', flexDirection: direction, flex: '1' };

        this.itemStyle = {
            ...convertStyleToProps(this.props),
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