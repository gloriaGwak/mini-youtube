import React from 'react';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Header from './components/Header';
import YoutubeApiProvider from './context/YoutubeApiContext';
import DarkModeProvider from './context/DarkModeContext';
import Footer from './components/Footer';
import './App.css';

const queryClient = new QueryClient();

export default function App() {
  
  return (
    <DarkModeProvider>
      <div className='wrap'>
        <Header />
          <YoutubeApiProvider>
              <QueryClientProvider client={queryClient}>
              {/* <ReactQueryDevtools initialIsOpen={true} /> */}
                  <Outlet />
              </QueryClientProvider>
          </YoutubeApiProvider>
          <Footer />
      </div>
    </DarkModeProvider>
  )
}