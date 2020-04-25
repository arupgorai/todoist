import React from 'react';
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from './utils/theme';
import GlobalStyles from './utils/global';
import App from './App';


render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />
                <App />
            </>
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById('root')
);