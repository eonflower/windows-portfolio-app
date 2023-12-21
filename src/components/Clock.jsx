import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function Clock(){
  const [date, setDate] = useState(new Date());

  const formattedDate = format(new Date(date), 'hh:mmbb');
  
  function refreshClock() {
    setDate(date);
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span>
      {formattedDate}
    </span>
  );
}
export default Clock;