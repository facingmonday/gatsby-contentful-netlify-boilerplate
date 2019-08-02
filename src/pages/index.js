import React, { Component, PureComponent, Fragment } from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import HeroCarousel from '../components/hero-carousel';
import IconBlock from '../components/icon-block';
import Icon from '../components/icon';
import BlockSet from '../components/block-set';

import { Page, Section } from '../components/layout';
import SectionHeading from '../components/section-heading';
import ImageTextColumn from '../components/image-text-column';

class Home extends Component {
  constructor(props) {
    super(props);
    
  }
  
  state = {}

  static propTypes = {
    data: PropTypes.object,
  }

  static defaultProps = {
    data: {
      page: {}
    }
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
        <HeroCarousel
          images={[
            require('../assets/images/blog/blog-4.jpg')
          ]}
        />
        <Section>
          <SectionHeading
            title={'Welcome to the Gatsby boilerplate'}
            subtitle={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo ante et cursus egestas. Phasellus ornare metus est, at posuere arcu eleifend in. Mauris molestie libero vel nisl malesuada dapibus. Cras rutrum porttitor bibendum. Vivamus hendrerit nibh vel urna mollis tincidunt nec mollis magna.'}
          />
        </Section>
        <Section>
          <BlockSet
            xs={12}
            sm={6}
            md={4}
          >
            <IconBlock
              title={'Consulting'}
              description={'We like to consult'}
              iconName={'tshirt'}
            />
            <IconBlock
              title={'Photography'}
              description={'We provide all kinds of services'}
              iconName={'photo-camera'}
            />
            <IconBlock
              title={'Video'}
              description={'We provide all kinds of services'}
              iconName={'video-camera'}
            />
            <IconBlock
              title={'Web'}
              description={'Website Design'}
              iconName={'website'}
            />
            <IconBlock
              title={'Apps'}
              description={'Mobile Apps'}
              iconName={'mobile-app'}
            />
            <IconBlock
              title={'Social'}
              description={'We provide all kinds of services'}
              iconName={'network'}
            />
          </BlockSet>
        </Section>
        <ImageTextColumn
          image={require('../assets/images/blog/blog-1.jpg')}
          heading={'Here is a phone app'}
          body={'Fusce sed consectetur dolor. Phasellus sit amet commodo tortor. Quisque volutpat, mi ut volutpat aliquam, lorem lacus sollicitudin neque, quis facilisis libero libero vel justo. Donec felis dui, dignissim quis metus id, ullamcorper porta tortor. Phasellus orci nisl, finibus quis mattis quis, cursus et sem.'}
          cta={{
            label: 'More',
            href: '/about'
          }}
        />
        <ImageTextColumn
          right
          image={require('../assets/images/blog/blog-2.jpg')}
          heading={'Get a website'}
          body={'Mauris ullamcorper magna tortor, id hendrerit odio malesuada id. Donec suscipit arcu nec erat rutrum, quis pharetra nibh venenatis. Aliquam erat volutpat. Praesent in urna volutpat, blandit ex quis, pellentesque purus.'}
          cta={{
            label: 'More',
            href: '/about'
          }}
        />
      </Page>
    );
  }
}

export default Home;

// export const query = graphql`
//   query Home {
//     page: contentfulPageHome {
      
//     }
//   }
// `;
