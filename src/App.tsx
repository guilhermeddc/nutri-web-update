import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import Routes from './routes';

import NavBar from './components/Navbar';
import Whatsapp from './components/Whatsapp';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes />
      <Whatsapp />
      <Footer />

      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
