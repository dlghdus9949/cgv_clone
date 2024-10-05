import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router";
import { BookingContext } from "./bookingContext";
import DefaultModal from "./defaultModal";

export default function BookingInfo({ navigateTo, onClick }) {
  const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
  const buttonImage = `${process.env.PUBLIC_URL}/image/tnb_buttons.png`;
  const {
    selectedMovie,
    posterPath,
    selectedDate,
    selectedTheater,
    selectedTime,
    selectedSeats,
    selections,
    totalAmount,
    setTotalAmount,
  } = useContext(BookingContext);

  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  // 모달을 여는 함수
  const openModal = () => {
    setIsModalOpen(true);
  };

  const isSelectedMovie = selectedMovie && posterPath;
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

  const handleClick = () => {
    onClickSeat();
    openModal();
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
  } else if (location.pathname === "/bookingDefault") {
    backgroundPosition = "0 -550px";
  }

  return (
    <div className="bg-[#1d1d1c] w-full h-[128px] flex items-center">
      <div className="w-[996px] my-0 mx-auto flex justify-between">
        {/* left */}
        <div className="flex w-[700px] justify-between items-center ml-4">
          {/* 영화 선택 */}
          {isSelectedMovie ? (
            <div className="flex w-[175px]">
              <img
                src={`${IMG_BASE_URL}${posterPath}`}
                alt={selectedMovie}
                className="w-[70px] h-auto object-cover mr-2"
              />
              <p className="text-[#fff] text-[14px] pt-2 font-extrabold flex align-start">
                {selectedMovie}
              </p>
            </div>
          ) : (
            <>
              {/* 영화가 선택되지 않았을 때 기본 텍스트 표시 */}
              <p className="text-[#999] text-[22px] font-bold">영화선택</p>
            </>
          )}

          {/* 극장, 날짜, 시간 선택 상태에 따라 다른 텍스트 표시 */}
          {!isSelectedTheater ? (
            <p className="text-[#999] text-[22px] font-bold">극장선택</p>
          ) : (
            <div className="text-[#fff] text-[14px] ">
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
            <p className="text-[#999] text-[22px] font-bold mr-8">결제</p>
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
          onClick={handleClick}
          style={{
            backgroundImage: `url(${buttonImage})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: backgroundPosition, // 선택 상태에 따라 backgroundPosition 변경
            overflow: "hidden",
            textIndent: "-1000px",
            width: location.pathname === "/bookingDefault" ? "220px" : "106px",
            height: "108px",
            cursor: isRedArrow ? "pointer" : "default", // 빨간색 화살표일 때만 클릭 가능하도록
          }}
        ></div>

        {/* 모달 */}
        <DefaultModal
          isOpen={isModalOpen}
          closeModal={() => setIsModalOpen(false)}
        >
          <div className=" px-[40px] pt-[45px] pb-[20px]">
            <div className="flex">
              {/* 예매정보 */}
              <div className="w-[422px] h-[257px] border-r border-[#bebebd] border-y-2 border-[#bebebd]">
                <h5 className="h-[35px] pl-[23px] border-b border-[#bebebd] font-bold bg-[#eeeeec] leading-[35px]">
                  예매정보
                  <span className="text-[#666] text-[11px] pl-4">
                    결제하시기 전 예매내역을 다시 한번 확인해 주세요.
                  </span>
                </h5>
                <div className="flex pt-[20px] pb-[40px] ml-4">
                  <div>
                    <img
                      src={`${IMG_BASE_URL}${posterPath}`}
                      alt={selectedMovie}
                      className="w-[110px] mr-[19px] h-auto object-cover mr-2"
                    />
                  </div>
                  <table className="w-[270px]">
                    <tbody>
                      <tr className="text-[12px]">
                        <th className="w-[50px] font-normal text-left">
                          영화명
                        </th>
                        <td className="font-bold">{selectedMovie}</td>
                      </tr>
                      <tr className="text-[12px]">
                        <th className="w-[50px] font-normal text-left">극장</th>
                        <td className="font-bold">{selectedTheater}</td>
                      </tr>
                      <tr className="text-[12px]">
                        <th className="w-[50px] font-normal text-left">일시</th>
                        <td className="font-bold">
                          {selectedDate
                            ? selectedDate.toLocaleDateString()
                            : ""}
                        </td>
                      </tr>

                      <tr className="text-[12px]">
                        <th className="w-[50px] font-normal text-left">인원</th>
                        <td className="font-bold">
                          {selections.일반 > 0 && (
                            <span>일반 {selections.일반}명</span>
                          )}
                          {selections.청소년 > 0 && (
                            <span>청소년 {selections.청소년}명</span>
                          )}
                          {selections.경로 > 0 && (
                            <span>경로 {selections.경로}명</span>
                          )}
                          {selections.우대 > 0 && (
                            <span>우대 {selections.우대}명</span>
                          )}
                        </td>
                      </tr>
                      <tr className="text-[12px]">
                        <th className="w-[50px] font-normal text-left">좌석</th>
                        <td className="font-bold">
                          {selectedSeats.join(", ")}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {/* 결제정보 */}
              <div className="w-[422px] h-[257px] border-r border-[#bebebd] border-y-2 border-[#bebebd]">
                <h5 className="h-[35px] pl-[23px] border-b border-[#bebebd] font-bold bg-[#eeeeec] leading-[35px]">
                  결제정보
                  <span className="text-[#666] text-[11px] pl-4">
                    결제하기 버튼을 클릭하시면 결제가 완료됩니다.
                  </span>
                </h5>
                <div className="flex pt-[20px] pb-[40px]">
                  <table className="w-[270px] ml-4">
                    <tbody>
                      <tr className="text-[12px]">
                        <th className="w-[50px] font-normal text-left">
                          결제수단
                        </th>
                        <td className="font-bold text-[#c62424] text-[16px] font-extrabold">
                          {totalAmount.toLocaleString()}
                          <span className="text-[12px] text-[#888]">원</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* 규정 */}
            <div className="w-full py-[15px] text-[12px] text-[#333] ml-4">
              <ul className="space-y-[3px] mb-2">
                <li>
                  - 인터넷 예매는 온라인상으로 영화상영 시간 20분 전 까지 취소
                  가능하며 20분 이후에는 현장에서 취소를 하셔야 합니다.
                </li>
                <li>
                  - 현장 취소를 하는 경우 상영시간 이전까지만 가능하며 영화 상영
                  시작 시간 이후 취소/환불/결제수단 변경은 불가합니다.
                </li>
                <li>
                  - 입장 지연에 따른 관람 불편을 최소화하기 위해 본 영화는 10분
                  후 상영이 시작됩니다.
                </li>
              </ul>
              <a href="#" className="underline text-[#207cca] font-bold">
                {"> "}예약취소 및 환불규정 안내
              </a>
            </div>
            {/* 약관동의 */}
            <div className="flex bg-[#eeeeec] py-4 border-y-2 border-[#bebebd]">
              {/* 결제대행서비스 약관에 모두 동의 */}
              <div className="border-r border-[#bebebd] w-[50%] pl-4">
                <div className="flex items-center mb-2">
                  <input type="checkbox" />
                  <span className="ml-2 font-extrabold text-[12px] ">
                    결제대행서비스 약관에 모두 동의
                  </span>
                </div>
                <div className="ml-2">
                  <div className="flex items-center ">
                    <input type="checkbox" />
                    <span className="ml-2 text-[12px] w-[300px]">
                      전자금융거래 이용약관
                    </span>
                    <a
                      href="#"
                      className="underline text-[#207cca] font-bold text-[12px]"
                    >
                      전문확인
                    </a>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" />
                    <span className="ml-2  text-[12px] w-[300px]">
                      개인정보 수집 이용약관
                    </span>
                    <a
                      href="#"
                      className="underline text-[#207cca] font-bold text-[12px]"
                    >
                      전문확인
                    </a>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" />
                    <span className="ml-2  text-[12px] w-[300px]">
                      개인정보 제공 및 위탁 안내 약관
                    </span>
                    <a
                      href="#"
                      className="underline text-[#207cca] font-bold text-[12px]"
                    >
                      전문확인
                    </a>
                  </div>
                </div>
              </div>
              {/* 상기 결제 내역을 모두 확인 했습니다 */}
              <div className="w-[50%] pl-4">
                <div className="flex items-center mb-2">
                  <input type="checkbox" />
                  <span className="ml-2 font-extrabold text-[12px] ">
                    상기 결제 내역을 모두 확인 했습니다
                  </span>
                </div>
              </div>
            </div>
          </div>
        </DefaultModal>
      </div>
    </div>
  );
}
