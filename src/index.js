import React from 'react';
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components';

import theme from './utils/theme';
import GlobalStyles from './utils/global';
import App from './App';


render(
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyles />
            <App />
        </>
    </ThemeProvider>,
    document.getElementById('root')
);