import { id } from "./bookingMovie";
import { theater } from "./bookingTheater";
import "./bookingDate";
import "./bookingTime";

export default function BookingInfo({ id, theater }) {
  return (
    <div className="w-[100%] bg-[#1d1d1c]">
      <div className="infoMovie text-[#fff]">
        id: {id}
        theter: {theater}
      </div>
    </div>
  );
}
