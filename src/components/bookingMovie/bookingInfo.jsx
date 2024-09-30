import React, { useContext } from "react";
import "./bookingMovie.css";
import { useNavigate } from "react-router";
import { BookingContext } from "./bookingContext";

export default function BookingInfo() {
  const buttonImage = `${process.env.PUBLIC_URL}/image/tnb_buttons.png`;
  const {
    selectedMovie,
    selectedDate,
    selectedTheater,
    selectedTime,
    selectedSeats, // 좌석 정보 가져오기
    selections, // 인원 정보 가져오기
  } = useContext(BookingContext);

  const isSelectedTheater = selectedTheater;
  const isSelectedSeats = selectedSeats.length > 0; // 좌석 선택 여부 확인
  const isSelectedPeople = Object.values(selections).some((count) => count > 0); // 인원 선택 여부 확인

  const navigate = useNavigate();

  // 금액 계산
  const prices = {
    일반: 15000,
    청소년: 13000,
    경로: 12000,
    우대: 10000,
  };

  const totalAmount =
    selections.일반 * prices.일반 +
    selections.청소년 * prices.청소년 +
    selections.경로 * prices.경로 +
    selections.우대 * prices.우대;

  const onClickSeat = () => {
    navigate(`/bookingSeat`, {
      state: {
        selectedMovie,
        selectedDate,
        selectedTheater,
        selectedTime,
      },
    });
  };

  // 선택된 좌석의 총 수를 카운트하는 함수
  const countSelectedSeats = () => {
    return Object.keys(selections).reduce((total, type) => {
      return total + selections[type];
    }, 0);
  };

  const requiredSeatsCount = countSelectedSeats();

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
            backgroundImage: `url(${buttonImage})`, // props로 받은 이미지 설정
            backgroundRepeat: "no-repeat", // no-repeat 적용
            // backgroundPosition: "0 -330px", // 기존 background-position 적용
            backgroundPosition:
              selectedSeats.length === requiredSeatsCount // 선택된 좌석 수가 필요한 좌석 수와 일치하는지 확인
                ? "-150px -330px" // 조건 충족 시
                : "0 -330px", // 기본값
            overflow: "hidden", // overflow 적용
            textIndent: "-1000px", // text-indent 적용
            width: "106px", // width 적용
            height: "108px", // height 적용
          }}
        >
          {/* 버튼에 들어갈 텍스트는 감추기 위해 필요하다면 넣어두세요 */}
        </div>
      </div>
    </div>
  );
}
