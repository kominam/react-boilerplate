import React from 'react';
import Helmet from 'react-helmet';

// This component is used to manage document head
// Usage:
//   const Head = (
//   <>
//     <title>Your title</title>
//   <>
//   );
//
//   export default withHead(Head)(YourComponentHere)

const withHead = (Head) => (Component) => (props) =>(
  <>
  <Helmet>
    <Head />
  </Helmet>
  <Component {...props} />
  </>
);    
 
export default withHead;