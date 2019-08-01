import React, { Component, PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Page, Section } from '../../components/layout';

class Product extends Component {
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
      <Page>
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

export default Product;
