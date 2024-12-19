import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Header from './components/Header';
import YoutubeApiProvider from './context/YoutubeApiContext';
import './App.css';

const queryClient = new QueryClient();

export default function App() {
  
  return (
    <div className='wrap'>
      <Header />
      <YoutubeApiProvider>
          <QueryClientProvider client={queryClient}>
          {/* <ReactQueryDevtools initialIsOpen={true} /> */}
              <Outlet />
          </QueryClientProvider>
      </YoutubeApiProvider>
  </div>
  )
}