import { graphql } from 'gatsby';
import Header from '../components/header/Header';

export default Header;

// export const query = graphql`
//   query Header {
//     nav: contentfulNavigation {
//       links: footerLinks {
//         ...navGroup
//       }
//       rightHeading: footerRightTitle
//       rightText: footerRightBody {
//         text: footerRightBody
//       }
//       subLinks: footerSubLinks {
//         ...navLink
//       }
//       socialLinks {
//         ...navLink
//       }
//     }
//   }
// `;
