import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Poppins, sans-serif;
    max-width: 1300px;
    margin: 0 auto; /* Center the body horizontally */
  }
  
  /* Set default background color */
  body {
    background-color: #151f29; /* A dark gray color as an example */
  }

  /* Define text colors */
  p, span, h1, h2, h3, h4, h5, h6, input, button, label, a{
    color: #fff; /* Main text color (white) */
  }

  /* Alternative text color */
  .text-secondary {
    color: #f2f2f2; /* Light gray */
  }

  /* Text colors for specific purposes */
  .text-error {
    color: #f44336; /* Red */
  }
  .text-warning {
    color: #ff9800; /* Orange */
  }
  .text-info {
    color: #2196f3; /* Blue */
  }
  .text-success {
    color: #4caf50; /* Green */
  }

  /* ... other global styles (spacing, etc.) */
`;
