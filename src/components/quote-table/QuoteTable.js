import React, { Component } from 'react';
import s from './QuoteTable.scss';
import Table from '../table';
import Image from '../image';
import { calculateEstimates } from '../../util';

class QuoteTable extends Component {
  columns = {
    thumbnail: {
      label: '',
      render: (url) => <Image style={{width: '30px'}} src={url} />
    },
    12: {
      label: '12'
    },
    24: {
      label: '24'
    },
    36: {
      label: '36'
    },
    48: {
      label: '48'
    },
    72: {
      label: '72'
    },
    144: {
      label: '144'
    },
  }

  quoteTableData = () => {
    return this.props.lineItems
      .filter(lineItem => lineItem.colorsFront || lineItem.colorsBack)
      .map(lineItem => {
        return {
          thumbnail: (lineItem.thumbnail) ? lineItem.thumbnail.file.url : null,
          12: calculateEstimates(12, lineItem),
          24: calculateEstimates(24, lineItem),
          36: calculateEstimates(36, lineItem),
          48: calculateEstimates(48, lineItem),
          72: calculateEstimates(72, lineItem),
          144: calculateEstimates(144, lineItem),
        }
      })
    ;
  }

  render() {
    return (
      <div className={s.quoteTable__container}>
        <Table
          columns={this.columns}
          data={this.quoteTableData()}
        />
      </div>
    )
  }
}

export default QuoteTable;
