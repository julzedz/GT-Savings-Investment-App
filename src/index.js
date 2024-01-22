import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import theme from './theme';

// const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        {/* <QueryClientProvider client={queryClient}> */}
        <App />
        {/* </QueryClientProvider> */}
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
