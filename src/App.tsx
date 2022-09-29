import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { defaultHero } from './utils/constants';

const App = () => {
  const [hero, setHero] = useState(defaultHero);

  return (
    <div className="container-fluid">
      <Header hero={hero} />
      <Main changeHero={setHero} />
      <Footer />
    </div>
  );


}

export default App;
