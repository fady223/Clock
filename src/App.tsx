
import React, {useEffect, useState} from 'react';
import "./style.css"


function App() {
  const [date, setDate] = useState(new Date());

  const currentDate : any = {
    hours:  date.getHours() < 10 ? '0' + date.getHours() : date.getHours(),
    minutes: date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes(),
    seconds: date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  }
  const fullTime : any = currentDate.hours + ':' + currentDate.minutes + ':' + currentDate.seconds;

  useEffect(() => {
    let timerId = setInterval(() => tick(), 1000 );
    return () => clearInterval(timerId);
  })
  const tick = () => {
    setDate(new Date);
  }
  return (
    <div className="app">
      <div className="clock-frame">
        <p>{fullTime}</p>
      </div>
    </div>
  );
}

export default App;
