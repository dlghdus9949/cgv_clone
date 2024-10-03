import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { BookingContext } from "./bookingContext";

export default function BookingInfo({ navigateTo }) {
  const buttonImage = `${process.env.PUBLIC_URL}/image/tnb_buttons.png`;
  const {
    selectedMovie,
    selectedDate,
    selectedTheater,
    selectedTime,
    selectedSeats,
    selections,
    totalAmount,
    setTotalAmount,
  } = useContext(BookingContext);

  const isSelectedTheater = selectedTheater;
  const isSelectedSeats = selectedSeats.length > 0;
  const isSelectedPeople = Object.values(selections).some((count) => count > 0);

  const navigate = useNavigate();
  const location = useLocation();

  // 선택된 영화, 극장, 날짜, 시간 체크
  const isAllSelectedInContainer =
    selectedMovie && selectedDate && selectedTheater && selectedTime;

  // 선택된 좌석 수와 인원 체크
  const isAllSelectedInSeatPage = isSelectedSeats && isSelectedPeople;

  // 금액 계산
  const prices = {
    일반: 15000,
    청소년: 13000,
    경로: 12000,
    우대: 10000,
  };

  useEffect(() => {
    const calculatedAmount =
      selections.일반 * prices.일반 +
      selections.청소년 * prices.청소년 +
      selections.경로 * prices.경로 +
      selections.우대 * prices.우대;

    setTotalAmount(calculatedAmount); // 계산된 totalAmount 저장
  }, [selections]);

  // 클릭 핸들러
  const onClickSeat = () => {
    // 빨간색 화살표일 때만 navigate 실행
    if (isRedArrow) {
      navigate(navigateTo, {
        state: {
          selectedMovie,
          selectedDate,
          selectedTheater,
          selectedTime,
        },
      });
    }
  };

  const countSelectedSeats = () => {
    return Object.keys(selections).reduce((total, type) => {
      return total + selections[type];
    }, 0);
  };

  const requiredSeatsCount = countSelectedSeats();

  // 경로와 선택 상태에 따른 backgroundPosition 설정
  let backgroundPosition = "0 -220px"; // 기본 값 (회색 화살표)

  // 빨간색 화살표 상태 결정
  let isRedArrow = false;

  if (location.pathname === "/bookingSeat" && isAllSelectedInSeatPage) {
    backgroundPosition = "-150px -330px"; // 결제선택 (빨간색 화살표)
    isRedArrow = true;
  } else if (location.pathname === "/ticket" && isAllSelectedInContainer) {
    backgroundPosition = "-150px -220px"; // 좌석선택 (빨간색 화살표)
    isRedArrow = true;
  } else if (location.pathname === "/bookingSeat") {
    backgroundPosition = "0 -330px"; // 결제선택 (회색 화살표)
  }

  return (
    <div className="bg-[#1d1d1c] w-full h-[128px] flex items-center">
      <div className="w-[996px] my-0 mx-auto flex justify-between">
        {/* left */}
        <div className="flex w-[700px] justify-between items-center ml-4">
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
          {!isSelectedTheater ? (
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
          {!isSelectedSeats || !isSelectedPeople ? (
            <p className="text-[#999] text-[22px] font-bold">좌석선택</p>
          ) : (
            <div className="text-[#fff] text-[14px]">
              <p className="flex">
                좌석명
                <ul className="ml-2 font-extrabold">
                  {selections.일반 > 0 && <li>일반 {selections.일반}명</li>}
                  {selections.청소년 > 0 && (
                    <li>청소년 {selections.청소년}명</li>
                  )}
                  {selections.경로 > 0 && <li>경로 {selections.경로}명</li>}
                  {selections.우대 > 0 && <li>우대 {selections.우대}명</li>}
                </ul>
              </p>
              <p>
                좌석번호
                <span className="font-extrabold ml-2">
                  {selectedSeats.join(", ") || " "}
                </span>
              </p>
            </div>
          )}

          {!isSelectedSeats || !isSelectedPeople ? (
            <p className="text-[#999] text-[22px] font-bold">결제</p>
          ) : (
            <div className="text-[#fff] text-[14px]">
              <p className="font-extrabold">
                {Object.keys(selections).map((type) =>
                  selections[type] > 0
                    ? `${prices[type].toLocaleString()}원 X ${selections[type]}`
                    : null
                )}
              </p>
              <p className="text-red-500 text-[22px] font-bold">
                {totalAmount.toLocaleString()}원
              </p>
            </div>
          )}
        </div>

        {/* right */}
        <div
          className="btn_img"
          onClick={onClickSeat}
          style={{
            backgroundImage: `url(${buttonImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: backgroundPosition, // 선택 상태에 따라 backgroundPosition 변경
            overflow: "hidden",
            textIndent: "-1000px",
            width: "106px",
            height: "108px",
            cursor: isRedArrow ? "pointer" : "default", // 빨간색 화살표일 때만 클릭 가능하도록
          }}
        ></div>
      </div>
    </div>
  );
}
