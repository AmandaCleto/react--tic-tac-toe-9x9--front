import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/global';
import lightTheme from './themes/light';
import Panel from './pages/panel';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Panel />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);