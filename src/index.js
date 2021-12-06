import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {theme} from './theme'
import {BrowserRouter as Router, 
  Routes, 
  Route} from 'react-router-dom'
  import {Provider, useSelector} from 'react-redux'
import {store} from './components/lib/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
