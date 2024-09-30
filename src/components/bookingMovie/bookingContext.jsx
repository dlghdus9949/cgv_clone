import React, { createContext, useState } from "react";

// Context 생성
export const BookingContext = createContext();

// Context Provider 컴포넌트
export const BookingProvider = ({ children }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selections, setSelections] = useState({
    일반: 0,
    청소년: 0,
    경로: 0,
    우대: 0,
  });

  return (
    <BookingContext.Provider
      value={{
        selectedMovie,
        setSelectedMovie,
        selectedDate,
        setSelectedDate,
        selectedTheater,
        setSelectedTheater,
        selectedTime,
        setSelectedTime,
        selectedSeats,
        setSelectedSeats,
        selections,
        setSelections,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
