import React, { Component } from 'react';
import ColumnRow from './column-row'

export default class Row extends Component {

    render() {
        return <ColumnRow type="row" {...this.props} />
    }
}

Row.defaultProps = {
    height: 'auto'
};