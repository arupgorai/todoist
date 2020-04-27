import React from 'react';
import { render } from 'react-dom'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import theme from './utils/theme';
import GlobalStyles from './utils/global';
import App from './App';
import store from './store';


render(
    <Provider store={store}>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <>
                    <GlobalStyles />
                    <App />
                </>
            </ThemeProvider>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);