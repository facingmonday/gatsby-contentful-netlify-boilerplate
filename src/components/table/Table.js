import React, { Component } from 'react';
import s from './Table.scss';
import TableRow from './TableRow';
import TableHeader from './TableHeader';

class Table extends Component {
  render() {
    const { showIndex, data } = this.props;
    const columns = (showIndex) ? { ...this.props.columns, "0": { label: ""} } : this.props.columns;
    console.log('columns', columns);
    return (
      <table border={1} className={s.table}>
        <thead>
          { Object.keys(columns).map((key) => (<th key={key}>{columns[key].label}</th>) )}
        </thead>
        <tbody>
          {data.map((rowData, rowIndex) => {
            return (
              <tr>
                {
                  Object.keys(columns).map((key, i) => {
                    if(key === '0') {
                      return <td>{rowIndex + 1}</td>
                    }
                    return <td>{(rowData[key] && columns[key].render) ? (columns[key].render(rowData[key])) : rowData[key]}</td>
                }) }
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

export default Table;
