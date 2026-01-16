// CalendarComponent.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styles
import   "./Calenda.css"

export default function CalendarComponent() {
  const [date, setDate] = useState(new Date());

  // Handle date change
  const onChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Calendar
        onChange={onChange}
        value={date}
        minDate={new Date(2020, 0, 1)} // Optional: restrict past dates
        maxDate={new Date(2030, 11, 31)} // Optional: restrict future dates
      />
      <p style={{ marginTop: '10px' }}>
        Selected Date: <strong>{date.toDateString()}</strong>
      </p>
    </div>
  );
}
