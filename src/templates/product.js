import { graphql } from 'gatsby';
import Product from '../routes/product/Product';

export default Product

// export const query = graphql`
//   query ProductPage($slug: String!) {
//     page: contentfulProduct(slug: { eq: $slug }) {
//       title
//       slug
//       images {
//         file {
//           fileName
//           url
//           contentType
//           details {
//             size
//             image {
//               width
//               height
//             }
//           }
//         }
//       }
//       lineItems {
//         thumbnail {
//           file {
//             fileName
//             url
//             contentType
//             details {
//               size
//               image {
//                 width
//                 height
//               }
//             }
//           }
//         }
//         item
//         small
//         medium
//         large
//         xLarge
//         xxLarge
//         priceEach
//         total
//         baseShirtPrice
//         colorsFront
//         colorsBack
//       }
//       subtotal
//       tax
//       total
//       taxExempt
//     }
//   }
// `;
