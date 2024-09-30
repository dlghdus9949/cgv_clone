import BookingNav from "./bookingNav";
import BookingContainer from "./bookingContainer";
import FixedBtn from "../fixedBtn";

export default function BookingLayout() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full">
        <BookingNav />
        <BookingContainer />
      </div>
      <FixedBtn />
    </div>
  );
}
