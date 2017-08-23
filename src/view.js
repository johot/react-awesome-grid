import React, { Component } from 'react';
import { convertStyleToProps } from './utils';

export default class View extends Component {

    itemStyle;

    componentWillMount() {

        this.itemStyle = {
            ...convertStyleToProps(this.props),
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