// BookingContainer.jsx
import React, { useState } from "react";
import BookingMovie from "./bookingMovie";
import BookingDate from "./bookingDate";
import BookingTheater from "./bookingTheater";
import BookingTime from "./bookingTime";
import BookingInfo from "./bookingInfo";

export default function BookingContainer() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTheaterSelect = (theater) => {
    setSelectedTheater(theater); // 선택된 극장 저장
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[996px] flex justify-center bg-[#F2F0E4] mt-[20px]">
        <BookingMovie onMovieSelec={setSelectedMovie} />
        <BookingTheater onTheaterSelect={setSelectedTheater} />
        <BookingDate onDateSelect={handleDateSelect} />
        <BookingTime onTimeSelect={setSelectedTime} />
      </div>
      <div className="w-full">
        <BookingInfo
          selectedMovie={selectedMovie}
          selectedDate={selectedDate}
          selectedTheater={selectedTheater}
          selectedTime={selectedTime}
        />
      </div>
    </div>
  );
}
