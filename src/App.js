import Container from './components/Container';
import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';  


function App() {

  return (
    <div>

  <WeatherProvider>
      <Container></Container>
      </WeatherProvider>



    </div>
  );
}

export default App;
    