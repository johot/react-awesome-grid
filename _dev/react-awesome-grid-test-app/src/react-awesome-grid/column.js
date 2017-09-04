import React, { Component } from 'react';
import ColumnRow from './column-row'

export default class Column extends Component {

    render() {
        return <ColumnRow type="column" {...this.props} />
    }
}

Column.defaultProps = {
    width: '1*'
};