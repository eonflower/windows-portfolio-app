import { useState, useEffect } from 'react';
import { format } from 'date-fns';

function Clock() {
  const [date, setDate] = useState(new Date());

  const formattedDate = format(date, 'hh:mmaaa');

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <span>
      {formattedDate}
    </span>
  );
}

export default Clock;
