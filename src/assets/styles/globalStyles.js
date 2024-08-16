/** @jsxImportSource @emotion/react */
import { Global, css } from '@emotion/react';

const globalStyles = css`
  main {
    padding: 0px 130px;
    
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
`;

const GlobalStyles = () => (
  <Global styles={globalStyles} />
);

export default GlobalStyles;