import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './assets/fonts/Pixel.ttf';
import Countdown from "react-countdown";
import * as CountdownPage from './pages/Countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
      return <App />;
  } else {
      return <CountdownPage.default days={days} hours={hours} minutes={minutes} seconds={seconds} />;
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Countdown
          date={new Date('February 14, 2024 18:00:00')  }
          renderer={renderer}
      />
  </React.StrictMode>
);

