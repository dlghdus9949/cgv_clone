import BookingDate from "./bookingDate";
import BookingInfo from "./bookingInfo";
import BookingMovie from "./bookingMovie";
import BookingNav from "./bookingNav";
import BookingTheater from "./bookingTheater";
import BookingTime from "./bookingTime";

export default function BookingLayout() {
  return (
    <div className="h-[100vh]">
      <div className="container my-0 mx-auto w-[996px] z-1">
        <BookingNav />
        <div className="flex justify-center bg-[#F2F0E4] mt-[20px]">
          <BookingMovie />
          <BookingTheater />
          <BookingDate />
          <BookingTime />
        </div>
      </div>
      <BookingInfo />
    </div>
  );
}
