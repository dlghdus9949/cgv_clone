import "./bookingMovie.css";

export default function BookingTime() {
  return (
    <div className="border-r-2 border-y-2">
      {/* 시간 */}
      <div className="section4 w-[330px]">
        <div className="head bg-[#333]  flex justify-center">
          <h3 className="text-[#fff] font-bold">시간</h3>
        </div>
      </div>

      {/* body */}
      <div>
        {/* time option */}
        <div className="time-option h-[30px] mt-[15px] ml-[20px] flex border-b-2 border-[#cfcdc3]">
          <span className="morning">모닝</span>
          <span className="night">심야</span>
        </div>
        {/* time list */}
      </div>
    </div>
  );
}
