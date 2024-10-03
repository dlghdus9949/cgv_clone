import React, { useContext } from "react";
import BookingMovie from "./bookingMovie";
import BookingDate from "./bookingDate";
import BookingTheater from "./bookingTheater";
import BookingTime from "./bookingTime";
import BookingInfo from "./bookingInfo";
import { BookingContext } from "./bookingContext";

export default function BookingContainer() {
  const {
    selectedMovie,
    setSelectedMovie,
    posterPath,
    setPosterPath,
    selectedDate,
    setSelectedDate,
    selectedTheater,
    setSelectedTheater,
    selectedTime,
    setSelectedTime,
  } = useContext(BookingContext);

  const handleMovieSelect = (title, posterPath) => {
    setSelectedMovie(title, posterPath);
  };

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleTheaterSelect = (theater) => {
    setSelectedTheater(theater);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[996px] flex justify-center bg-[#F2F0E4] mt-[20px]">
        <BookingMovie onMovieSelec={handleMovieSelect} />
        <BookingTheater onTheaterSelect={handleTheaterSelect} />
        <BookingDate onDateSelect={handleDateSelect} />
        <BookingTime onTimeSelect={handleTimeSelect} />
      </div>
      <div className="w-full">
        <BookingInfo
          selectedMovie={selectedMovie}
          selectedDate={selectedDate}
          selectedTheater={selectedTheater}
          selectedTime={selectedTime}
          navigateTo="/bookingSeat"
        />
      </div>
    </div>
  );
}
