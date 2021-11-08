import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { ThemeProvider } from 'styled-components';
import lightTheme from './themes/light';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
