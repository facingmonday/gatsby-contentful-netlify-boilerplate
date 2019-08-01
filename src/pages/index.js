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
            require('../assets/images/home/1.jpg')
          ]}
        />
        <Section>
          <SectionHeading
            title={'Welcom to Magic City Media'}
            subtitle={'Meeting your needs on a wide variety of media platforms including print, web, video, photography, and much more.'}
          />
        </Section>
        <Section>
          <BlockSet
            xs={12}
            sm={6}
            md={4}
          >
            <IconBlock
              title={'T-Shirt Printing'}
              description={'We print shirts'}
              iconName={'tshirt'}
            />
            <IconBlock
              title={'Photography'}
              description={'We print shirts'}
              iconName={'photo-camera'}
            />
            <IconBlock
              title={'Video'}
              description={'We print shirts'}
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
              description={'We print shirts'}
              iconName={'network'}
            />
          </BlockSet>
        </Section>
        <ImageTextColumn
          image={require('../assets/images/heros/shirts.jpg')}
          heading={'Custom Printed T-Shirts'}
          body={'Got an idea for a custom t-shirt or other great gear? Have an event you want to commemorate? We have options for men, women, children, infants and pets. Choose your style, choose your color and get ready to have some fun. At Big Frog, creativity is celebrated in a big way, every day!'}
          cta={{
            label: 'More',
            href: '/shirts'
          }}
        />
        <ImageTextColumn
          right
          image={require('../assets/images/heros/shirts.jpg')}
          heading={'Custom Printed T-Shirts'}
          body={'Got an idea for a custom t-shirt or other great gear? Have an event you want to commemorate? We have options for men, women, children, infants and pets. Choose your style, choose your color and get ready to have some fun. At Big Frog, creativity is celebrated in a big way, every day!'}
          cta={{
            label: 'More',
            href: '/shirts'
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
