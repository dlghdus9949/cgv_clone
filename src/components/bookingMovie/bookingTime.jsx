import "./bookingMovie.css";
import { useState } from "react";

export default function BookingTime({ onTimeSelect }) {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    if (onTimeSelect) {
      onTimeSelect(time); // 선택된 시간을 부모 컴포넌트로 전달
    }
  };

  const timeList = ["9:20", "12:10", "15:30", "17:15", "20:20", "23:50"];

  return (
    <div className="border-r-2 border-y-2">
      {/* 시간 */}
      <div className="section4 w-[330px]">
        <div className="head bg-[#333] flex justify-center">
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

        <div className="flex flex-col pt-4 px-8 space-y-8 ml-16">
          {timeList.map((time) => (
            <div key={time} className="flex h-auto items-center h-[40px]">
              <div
                onClick={() => handleTimeClick(time)}
                className={`border-2 border-slate-700 rounded w-[60%] h-[40px] flex justify-center items-center text-[18px] font-bold cursor-pointer transition-all duration-300 ${
                  selectedTime === time ? "bg-[#333333] text-white" : ""
                }`}
              >
                {time}
              </div>
              {/* 9:20과 23:50에만 이미지 추가 */}
              {time === "9:20" && (
                <div alt="icon" className="morning w-[20px] h-[20px] ml-4" />
              )}
              {time === "23:50" && (
                <div alt="icon" className="night w-[20px] h-[20px] ml-4" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
