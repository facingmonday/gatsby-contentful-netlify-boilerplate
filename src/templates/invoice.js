import { graphql } from 'gatsby';
import Invoice from '../routes/invoice/Invoice';

export default Invoice

export const query = graphql`
  query InvoicePage($slug: String!) {
    page: contentfulInvoice(slug: { eq: $slug }) {
      title
      slug
      images {
        file {
          fileName
          url
          contentType
          details {
            size
            image {
              width
              height
            }
          }
        }
      }
      lineItems {
        thumbnail {
          file {
            fileName
            url
            contentType
            details {
              size
              image {
                width
                height
              }
            }
          }
        }
        item
        small
        medium
        large
        xLarge
        xxLarge
        priceEach
        total
        baseShirtPrice
        colorsFront
        colorsBack
      }
      subtotal
      tax
      total
      taxExempt
    }
  }
`;
