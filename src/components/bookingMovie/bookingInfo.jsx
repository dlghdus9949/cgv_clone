import React from "react";
import "./bookingMovie.css";

export default function BookingInfo({
  selectedMovie,
  selectedDate,
  selectedTheater,
  selectedTime,
}) {
  const isSelected = selectedTheater || selectedDate || selectedTime;

  return (
    <div className="bg-[#1d1d1c] w-full h-[128px] flex items-center">
      <div className="w-[996px] my-0 mx-auto flex justify-between">
        {/* left */}
        <div className="flex w-[500px] justify-between items-center ml-4">
          {/* 영화 선택 */}
          <p
            className={
              selectedMovie
                ? "text-[#fff]"
                : "text-[#999] text-[22px] font-bold"
            }
          >
            {selectedMovie ? selectedMovie : "영화선택"}
          </p>

          {/* 극장, 날짜, 시간 선택 상태에 따라 다른 텍스트 표시 */}
          {!isSelected ? (
            <p className="text-[#999] text-[22px] font-bold">극장선택</p>
          ) : (
            <div className="text-[#fff] text-[14px]">
              <p>
                극장
                <span className="font-extrabold ml-2">
                  {selectedTheater || " "}
                </span>
              </p>
              <p>
                일시
                <span className="font-extrabold ml-2">
                  {selectedDate ? selectedDate.toLocaleDateString() : " "}
                </span>
              </p>
              <p>
                시간
                <span className="font-extrabold ml-2">
                  {selectedTime || " "}
                </span>
              </p>
            </div>
          )}

          {/* 좌석 선택 및 결제 */}

          <p className="text-[#999] text-[22px] font-bold">좌석선택</p>

          <p className="text-[#999] text-[22px] font-bold">결제</p>
        </div>
        {/* right */}
        <div className="btn_img"></div>
      </div>
    </div>
  );
}
