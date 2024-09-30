import React, { useState, useEffect, useContext } from "react";
import BookingInfo from "./bookingInfo";
import BookingNav from "./bookingNav";
import { useLocation } from "react-router-dom";
import { BookingContext } from "./bookingContext";

const rows = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
];
const seatsPerRow = 13;

export default function BookingSeat() {
  const buttonImage = `${process.env.PUBLIC_URL}/image/tnb_buttons.png`;

  const {
    selectedMovie,
    selectedDate,
    selectedTheater,
    selectedTime,
    setSelectedSeats,
    selections,
    setSelections,
  } = useContext(BookingContext);

  const [seats, setSeats] = useState(
    Array(14)
      .fill()
      .map(() => Array(13).fill(false))
  );
  const [selectedCount, setSelectedCount] = useState(0);
  // 인원 상태 (일반, 청소년, 경로, 우대) 및 좌석 수 제한 계산
  // const [selections, setSelections] = useState({
  //   일반: 0,
  //   청소년: 0,
  //   경로: 0,
  //   우대: 0,
  // });

  // 총 인원 계산
  const totalSelected = Object.values(selections).reduce((a, b) => a + b, 0);

  // 인원 선택 처리
  const handleSelection = (category, value) => {
    const currentTotal = Object.values(selections).reduce((a, b) => a + b, 0);
    if (currentTotal + (value - selections[category]) > 8) return; // 최대 8명까지 가능
    setSelections({
      ...selections,
      [category]: value,
    });
  };

  // 페이지 이동 후에도 상태 유지 (localStorage 사용)
  useEffect(() => {
    const savedSeats = JSON.parse(localStorage.getItem("seats"));
    const savedSelections = JSON.parse(localStorage.getItem("selections"));

    // console.log("Loaded seats from localStorage: ", savedSeats);
    // console.log("Loaded selections from localStorage: ", savedSelections);

    if (savedSeats) setSeats(savedSeats);
    if (savedSelections) setSelections(savedSelections);
  }, []);

  useEffect(() => {
    // console.log("Saving seats to localStorage: ", seats);
    // console.log("Saving selections to localStorage: ", selections);

    localStorage.setItem("seats", JSON.stringify(seats));
    localStorage.setItem("selections", JSON.stringify(selections));
  }, [seats, selections]);

  const toggleSeat = (rowIndex, seatIndex) => {
    // 인원 제한
    if (selectedCount >= totalSelected && !seats[rowIndex][seatIndex]) return;

    // 좌석 상태 업데이트
    const newSeats = [...seats];
    newSeats[rowIndex][seatIndex] = !newSeats[rowIndex][seatIndex];

    // 선택한 좌석 수 업데이트
    setSeats(newSeats);
    setSelectedCount(
      newSeats[rowIndex][seatIndex] ? selectedCount + 1 : selectedCount - 1
    );

    // 선택된 좌석 정보 업데이트
    const selectedSeatInfo = [];
    newSeats.forEach((row, rowIdx) => {
      row.forEach((seat, seatIdx) => {
        if (seat) selectedSeatInfo.push(`${rows[rowIdx]}${seatIdx + 1}`);
      });
    });
    setSelectedSeats(selectedSeatInfo);
  };

  // // 인원 선택 처리
  // const handleSelection = (category, value) => {
  //   const currentTotal = Object.values(selections).reduce((a, b) => a + b, 0);
  //   if (currentTotal + (value - selections[category]) > 8) return; // 최대 8명까지 가능
  //   setSelections({
  //     ...selections,
  //     [category]: value,
  //   });
  // };

  // 각 카테고리별 인원 선택 버튼 생성
  const renderButtons = (category) => {
    return (
      <ul className="flex">
        {[...Array(9).keys()].map((value) => (
          <li
            key={value}
            className={`w-[20px] h-[20px] ml-1 border flex justify-center items-center ${
              selections[category] === value ? "bg-black text-white" : ""
            }`}
          >
            <a
              href="#"
              className="w-[16px] h-[16px] flex items-center justify-center"
              onClick={() => handleSelection(category, value)}
            >
              {value}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="flex text-left flex-col items-center">
      <BookingNav />
      <div className="section4 w-[996px] mt-4">
        <div className="head my-0 mx-auto bg-[#333] flex justify-center">
          <h3 className="text-[#fff] font-bold">인원/좌석</h3>
        </div>
        {/* 인원, 좌석 */}
        <div className="flex bg-[#f2f0e5] w-[996px]">
          {/* 인원 */}
          <div className="w-[50%] border h-[120px] flex justify-evenly items-center">
            {/* 인원 선택 */}
            <div className="">
              {/* 일반 */}
              <div className="flex">
                <span className="w-[55px] h-[22px] leading-[22px] text-[#666] text-[13px]">
                  일반
                </span>
                {renderButtons("일반")}
              </div>
              {/* 청소년 */}
              <div className="flex">
                <span className="w-[55px] h-[22px] leading-[22px] text-[#666] text-[13px]">
                  청소년
                </span>
                {renderButtons("청소년")}
              </div>
              {/* 경로 */}
              <div className="flex">
                <span className="w-[55px] h-[22px] leading-[22px] text-[#666] text-[13px]">
                  경로
                </span>
                {renderButtons("경로")}
              </div>
              {/* 우대 */}
              <div className="flex">
                <span className="w-[55px] h-[22px] leading-[22px] text-[#666] text-[13px]">
                  우대
                </span>
                {renderButtons("우대")}
              </div>
            </div>
            {/* 안내 */}
            <div className="flex flex-col h-[100%] justify-evenly">
              <div className="text-red-600 text-[12px]">
                * 최대 8명 선택 가능
              </div>
              <button className="border bg-[#926f60] text-[12px] text-[#fff] font-bold rounded">
                관람 할인 안내
              </button>
            </div>
          </div>
          {/* 좌석 정보 */}
          <div className="w-[50%] border">좌석 선택 정보</div>
        </div>
      </div>
      {/* 좌석 */}
      <div className="p-[30px] w-[996px] bg-[#f2f0e5] flex">
        <div className="flex flex-col w-[871px] justify-center items-center">
          <h2 className="h-[28px] w-[600px] text-center border bg-[#999999] text-[#fff] font-extrabold">
            SCREEN
          </h2>
          <div className="seat-selection mt-8">
            {rows.map((row, rowIndex) => (
              <div key={row} className="flex justify-center">
                <span className="w-[20px]">{row}</span>
                <div className="flex justify-center">
                  {Array(seatsPerRow)
                    .fill()
                    .map((_, seatIndex) => (
                      <button
                        key={seatIndex}
                        className={`w-[20px] h-[23px] text-[10px] text-[#fff] font-bold border ${
                          seats[rowIndex][seatIndex]
                            ? "bg-[#ad1712]" // 선택된 좌석 배경색
                            : "bg-[#999999]"
                        }`}
                        onClick={() => toggleSeat(rowIndex, seatIndex)}
                        disabled={seats[rowIndex][seatIndex] === "reserved"}
                      >
                        {seatIndex + 1}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 좌석타입 */}
        <div className="w-[125px]">
          <div className="flex items-center">
            <div className="w-[20px] h-[20px] bg-[#ad1712] mr-2"></div>
            <span>선택</span>
          </div>
          <div className="flex items-center">
            <div className="w-[20px] h-[20px] bg-[#bbb] mr-2 "></div>
            <span>예매완료</span>
          </div>
          <div className="flex items-center">
            <img
              src={`${process.env.PUBLIC_URL}/image/Not_Selectable.png`}
              className="w-[20px] h-[20px] bg-red-500 mr-2"
              alt=""
            />
            <span>선택불가</span>
          </div>
          <div className="flex items-center">
            <div className="w-[20px] h-[20px] bg-green-700 mr-2"></div>
            <span>장애인석</span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <BookingInfo
          selectedMovie={selectedMovie}
          selectedDate={selectedDate}
          selectedTheater={selectedTheater}
          selectedTime={selectedTime}
          navigateTo="/bookingDefault"
        />
      </div>
    </div>
  );
}
