import React, { Component, PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Page, Section } from '../../components/layout';
import s from './Products.scss';

class Products extends Component {
  constructor(props) {
    super(props);
    
  }
  
  state = {}

  static propTypes = {
    data: PropTypes.object.isRequired,
  }

  render() {
    const { page } = this.props.data;
    return (
      <Page className={s.products}>
        <Helmet
          title={page.pageTitle}
          meta={[
            { name: 'description', content: page.metaDescription },
          ]}
        />
        
      </Page>
    );
  }
}

export default Products;
