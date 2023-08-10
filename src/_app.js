import React from 'react';

// Override console.warn to suppress specific warning
const originalConsoleWarn = console.warn;

console.warn = function (...args) {
  const warningMessage = args[0];

  // Check if the warning message includes the text you want to suppress
  if (typeof warningMessage === 'string' && warningMessage.includes('Icon: Support for defaultProps')) {
    // Do nothing to suppress this specific warning
    return;
  }

  // If the warning is not the one you want to suppress, log it as usual
  originalConsoleWarn.apply(console, args);
};

function MyApp({ Component, pageProps }) {
  // Custom logic for your _app component
  return <Component {...pageProps} />;
}

export default MyApp;
