import BookingNav from "./bookingNav";
import FixedBtn from "../fixedBtn";
import { useState, useContext, useEffect } from "react";
import "./bookingMovie.css";
import BookingInfo from "./bookingInfo";
import { BookingContext } from "./bookingContext";

export default function BookingDefault() {
  // 각 STEP의 토글 상태를 관리
  const [isStep1Open, setIsStep1Open] = useState(false);
  const [isStep2Open, setIsStep2Open] = useState(false);
  const [isStep3Open, setIsStep3Open] = useState(false);

  // STEP 1.
  const [selectedCoupon, setSelectedCoupon] = useState(null); // 선택된 쿠폰 상태
  const handleCouponClick = (coupon) => {
    setSelectedCoupon(coupon); // 클릭한 쿠폰으로 상태 업데이트
  };

  // 결제방식
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  // 결제 방식 선택 시 호출되는 함수
  const handlePaymentMethodChange = (method) => {
    setSelectedPaymentMethod(method);
  };

  const {
    selectedMovie,
    setSelectedMovie,
    selectedDate,
    setSelectedDate,
    selectedTheater,
    setSelectedTheater,
    selectedTime,
    setSelectedTime,
    selectedSeats,
    setSelectedSeats,
  } = useContext(BookingContext);

  const { totalAmount } = useContext(BookingContext);

  const [selectedPayment, setSelectedPayment] = useState("네이버페이");

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value); // 선택된 결제 수단 업데이트
  };

  // 스크롤
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <BookingNav />
      <div className="w-[996px] bg-[#F2F0E4] mt-4">
        <div className="ticketPayment float-left w-[774px] min-h-[600px]">
          {/* STEP 1 */}
          <div className="w-[744px] mt-[5px] mb-[30px]">
            <div className="h-[33px] leading-[33px] text-[#e0e0e0] bg-[#333] flex justify-between mb-[3px]">
              <h2 className="h-[100%] text-[17px] font-extrabold flex items-center ml-4">
                STEP 1.
              </h2>
              <a href="#" className="refresh mr-[12px] pr-[24px]">
                <span className="text-[#e6e6e6] text-[12px] font-extrabold">
                  다시하기
                </span>
              </a>
            </div>
            <div className="flex justify-between h-[43px] bg-[#dfded6] text-[#333]">
              <h4 className="h-[100%] text-[17px] font-extrabold flex items-center ml-4">
                할인쿠폰
              </h4>
              <button
                onClick={() => setIsStep1Open(!isStep1Open)} // 클릭 시 상태 변경
                style={{
                  width: "43px",
                  height: "43px",
                  background: `url(/image/step3_bullets.png)`, // 같은 이미지 경로
                  backgroundPosition: isStep1Open ? "0 -43px" : "0 0", // 열기/닫기 상태에 따라 다르게 위치 설정
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                }}
              />
            </div>
            {isStep1Open && (
              <div className="">
                {/* STEP 1 내용 */}
                <div className="border-2 border-[#dfded6]">
                  <div className="flex justify-center items-center h-[31px] bg-[#f9f8f3] border-b border-[#dfded6]">
                    <p className="text-[14px] font-bold text-[#666]">
                      선택 불가능한 할인쿠폰 항목은 비활성화 처리됩니다.
                    </p>
                  </div>

                  <div className="flex">
                    <div className="discount-list w-[183px] border-r border-[#d7d6cf]">
                      <ul>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("CGV 할인쿠폰")}
                        >
                          <a href="#">CGV 할인쿠폰</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("CJ ONE 할인쿠폰")}
                        >
                          <a href="#">CJ ONE 할인쿠폰</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("신용카드 할인쿠폰")}
                        >
                          <a href="#">신용카드 할인쿠폰</a>
                        </li>
                        <li
                          className="w-[100%]"
                          onClick={() => handleCouponClick("최종결제 할인쿠폰")}
                        >
                          <a href="#">최종결제 할인쿠폰</a>
                        </li>
                      </ul>
                    </div>
                    <div className="discount-form w-[556px] min-h-[280px]">
                      <div className="p-4 relative">
                        {/* 선택된 쿠폰에 따라 내용 표시 */}
                        {selectedCoupon === "CGV 할인쿠폰" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              CGV 할인쿠폰
                            </h5>
                            <div className="form_btn absolute top-[12px] right-[30px]">
                              <button className="bg-[#926f60] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                등록하기
                              </button>
                              <button className="bg-[#82898e] border-[#6a7176] rounded px-2 text-[12px] text-[#fff] ml-1">
                                전체 쿠폰
                              </button>
                            </div>
                            <div className="form_list">
                              <div className="list-header h-[18px] border-b border-[#1c1c1c] text-[#666] text-[11px]">
                                <span className="float-left w-[197px] pl-[15px]">
                                  사용가능 쿠폰
                                </span>
                                <span className="float-left w-[135px] text-center">
                                  쿠폰 번호
                                </span>
                                <span className="float-left w-[130px] text-center">
                                  유효기간
                                </span>
                              </div>
                              <div className="list-body flex justify-center min-h-[150px] items-center text-[#666] text-[13px] font-semibold">
                                사용 가능한 CGV 할인쿠폰이(가) 없습니다.
                              </div>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "CJ ONE 할인쿠폰" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              CJ ONE 할인쿠폰
                            </h5>
                            <div className="form_btn absolute top-[12px] right-[30px]">
                              <button className="bg-[#82898e] border-[#6a7176] rounded px-2 text-[12px] text-[#fff] ml-1">
                                전체 쿠폰
                              </button>
                            </div>
                            <div className="form_list">
                              <div className="list-header h-[18px] border-b border-[#1c1c1c] text-[#666] text-[11px]">
                                <span className="float-left w-[197px] pl-[15px]">
                                  사용가능 쿠폰
                                </span>
                                <span className="float-left w-[135px] text-center">
                                  쿠폰 번호
                                </span>
                                <span className="float-left w-[130px] text-center">
                                  유효기간
                                </span>
                              </div>
                              <div className="list-body flex justify-center min-h-[150px] items-center text-[#666] text-[13px] font-semibold">
                                사용 가능한 CJ ONE 할인쿠폰이(가) 없습니다.
                              </div>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[50px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] pr-[17px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[13px] text-[#666] pl-[17px]">
                                CJ ONE 쿠폰은 최대 3매까지 사용이 가능합니다.
                                <br />
                                유효기간 만료 시, 기 예매된 티켓의 취소 후 재
                                사용 불가합니다.
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "신용카드 할인쿠폰" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              신용카드 할인쿠폰
                            </h5>
                            <div className="form_btn absolute top-[12px] right-[30px]">
                              <button className="bg-[#926f60] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                등록하기
                              </button>
                              <button className="bg-[#82898e] border-[#6a7176] rounded px-2 text-[12px] text-[#fff] ml-1">
                                전체 쿠폰
                              </button>
                            </div>
                            <div className="h-[44px] pt-[5px] text-[12px]">
                              <span className="px-[15px] ">카드종류</span>
                              <select className="w-[150px] bg-[#F2F0E4] border border-[#999] py-1">
                                <option value="">BC카드</option>
                                <option value="">현대카드</option>
                                <option value="">하나카드</option>
                                <option value="">삼성카드</option>
                                <option value="">신한카드</option>
                                <option value="">KB국민카드</option>
                                <option value="">NH카드</option>
                                <option value="">시티카드</option>
                                <option value="">롯데카드</option>
                                <option value="">우리카드</option>
                                <option value="">코나카드</option>
                              </select>
                            </div>
                            <div className="form_list">
                              <div className="list-header h-[18px] border-b border-[#1c1c1c] text-[#666] text-[11px]">
                                <span className="float-left w-[197px] pl-[15px]">
                                  사용가능 쿠폰
                                </span>
                                <span className="float-left w-[135px] text-center">
                                  쿠폰 번호
                                </span>
                                <span className="float-left w-[130px] text-center">
                                  유효기간
                                </span>
                              </div>
                              <div className="list-body flex justify-center min-h-[150px] items-center text-[#666] text-[13px] font-semibold">
                                사용 가능한 CGV 할인쿠폰이(가) 없습니다.
                              </div>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "최종결제 할인쿠폰" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              최종결제 할인쿠폰
                            </h5>
                            <div className="form_btn absolute top-[12px] right-[30px]">
                              <button className="bg-[#926f60] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                등록하기
                              </button>
                              <button className="bg-[#82898e] border-[#6a7176] rounded px-2 text-[12px] text-[#fff] ml-1">
                                전체 쿠폰
                              </button>
                            </div>
                            <div className="h-[44px] pt-[5px] text-[12px]">
                              <span className="px-[15px] ">쿠폰종류</span>
                              <select className="w-[150px] bg-[#F2F0E4] border border-[#999] py-1">
                                <option value="">내통장결제</option>
                                <option value="">네이버페이</option>
                                <option value="">스마일페이</option>
                                <option value="">카카오페이</option>
                                <option value="">신한카드</option>
                                <option value="">토스</option>
                                <option value="">PAYCO</option>
                                <option value="">SSGPAY</option>
                              </select>
                            </div>
                            <div className="form_list">
                              <div className="list-header h-[18px] border-b border-[#1c1c1c] text-[#666] text-[11px]">
                                <span className="float-left w-[197px] pl-[15px]">
                                  사용가능 쿠폰
                                </span>
                                <span className="float-left w-[135px] text-center">
                                  쿠폰 번호
                                </span>
                                <span className="float-left w-[130px] text-center">
                                  유효기간
                                </span>
                              </div>
                              <div className="list-body flex justify-center min-h-[150px] items-center text-[#666] text-[13px] font-semibold">
                                사용 가능한 CGV 할인쿠폰이(가) 없습니다.
                              </div>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === null && (
                          <p className="flex justify-center items-center min-h-[200px] text-[13px] font-extrabold text-[#666]">
                            쿠폰을 선택하세요.
                          </p>
                        )}{" "}
                        {/* 기본 메시지 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* STEP 2 */}
          <div className="w-[744px] mt-[5px] mb-[30px]">
            <div className="h-[33px] leading-[33px] text-[#e0e0e0] bg-[#333] flex justify-between mb-[3px]">
              <h2 className="h-[100%] text-[17px] font-extrabold flex items-center ml-4">
                STEP 2.
              </h2>
              <a href="#" className="refresh mr-[12px] pr-[24px]">
                <span className="text-[#e6e6e6] text-[12px] font-extrabold">
                  다시하기
                </span>
              </a>
            </div>
            <div className="flex justify-between h-[43px] bg-[#dfded6] text-[#333]">
              <h4 className="h-[100%] text-[17px] font-extrabold flex items-center ml-4">
                관람권/기프트콘
              </h4>
              <button
                onClick={() => setIsStep2Open(!isStep2Open)} // 클릭 시 상태 변경
                style={{
                  width: "43px",
                  height: "43px",
                  background: `url(/image/step3_bullets.png)`, // 같은 이미지 경로
                  backgroundPosition: isStep2Open ? "0 -43px" : "0 0", // 열기/닫기 상태에 따라 다르게 위치 설정
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                }}
              />
            </div>
            {isStep2Open && (
              <div className="">
                {/* STEP 2 내용 */}
                <div className="border-2 border-[#dfded6]">
                  <div className="flex justify-center items-center h-[31px] bg-[#f9f8f3] border-b border-[#dfded6]">
                    <p className="text-[14px] font-bold text-[#666]">
                      선택 불가능한 관람권/상품권 항목은 비활성화 처리됩니다.
                    </p>
                  </div>

                  <div className="flex">
                    <div className="discount-list w-[183px] border-r border-[#d7d6cf]">
                      <ul>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("CGV 영화관람권")}
                        >
                          <a href="#">CGV 영화관람권</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("CGV 기프트콘")}
                        >
                          <a href="#">CGV 기프트콘</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("무비패스카드")}
                        >
                          <a href="#">무비패스카드</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() =>
                            handleCouponClick("쿠프마케팅 아이넘버 예매권")
                          }
                        >
                          <a href="#">쿠프마케팅 아이넘버 예매권</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() =>
                            handleCouponClick("즐거운 스마일콘 예매권")
                          }
                        >
                          <a href="#">즐거운 스마일콘 예매권</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() =>
                            handleCouponClick("카카오선물하기 예매권")
                          }
                        >
                          <a href="#">카카오선물하기 예매권</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("옥션/G마켓 예매권")}
                        >
                          <a href="#">옥션/G마켓 예매권</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("FUN-CON")}
                        >
                          <a href="#">FUN-CON</a>
                        </li>
                        <li
                          className="w-[100%]"
                          onClick={() =>
                            handleCouponClick("원큐브마케팅 기프팅 예매권")
                          }
                        >
                          <a href="#">원큐브마케팅 기프팅 예매권</a>
                        </li>
                      </ul>
                    </div>
                    <div className="discount-form w-[556px] min-h-[280px]">
                      <div className="p-4 relative">
                        {/* 선택된 쿠폰에 따라 내용 표시 */}
                        {selectedCoupon === "CGV 영화관람권" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              CGV 영화관람권
                            </h5>
                            <div className="form_btn absolute top-[12px] right-[30px]">
                              <button className="bg-[#926f60] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                등록하기
                              </button>
                              <button className="bg-[#82898e] border-[#6a7176] rounded px-2 text-[12px] text-[#fff] ml-1">
                                전체 관람권
                              </button>
                            </div>
                            <div className="form_list">
                              <div className="list-header h-[18px] border-b border-[#1c1c1c] text-[#666] text-[11px]">
                                <span className="float-left w-[197px] pl-[15px]">
                                  사용가능 관람권
                                </span>
                                <span className="float-left w-[135px] text-center">
                                  관람권 번호
                                </span>
                                <span className="float-left w-[130px] text-center">
                                  유효기간
                                </span>
                              </div>
                              <div className="list-body flex justify-center min-h-[150px] items-center text-[#666] text-[13px] font-semibold">
                                사용 가능한 CGV 영화관람권(가) 없습니다.
                              </div>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "CGV 기프트콘" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              CGV 기프트콘
                            </h5>
                            <div className="form_btn absolute top-[12px] right-[30px]">
                              <button className="bg-[#926f60] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                등록하기
                              </button>
                              <button className="bg-[#82898e] border-[#6a7176] rounded px-2 text-[12px] text-[#fff] ml-1">
                                전체 쿠폰
                              </button>
                            </div>
                            <div className="form_list">
                              <div className="list-header h-[18px] border-b border-[#1c1c1c] text-[#666] text-[11px]">
                                <span className="float-left w-[197px] pl-[15px]">
                                  사용가능 쿠폰
                                </span>
                                <span className="float-left w-[135px] text-center">
                                  쿠폰 번호
                                </span>
                                <span className="float-left w-[130px] text-center">
                                  유효기간
                                </span>
                              </div>
                              <div className="list-body flex justify-center min-h-[150px] items-center text-[#666] text-[13px] font-semibold">
                                사용 가능한 CJ ONE 할인쿠폰이(가) 없습니다.
                              </div>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "무비패스카드" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              무비패스카드
                            </h5>
                            <div className="form_btn absolute top-[12px] right-[30px]">
                              <button className="bg-[#926f60] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                등록하기
                              </button>
                              <button className="bg-[#82898e] border-[#6a7176] rounded px-2 text-[12px] text-[#fff] ml-1">
                                전체 카드
                              </button>
                            </div>
                            <div className="form_list">
                              <div className="list-header h-[18px] border-b border-[#1c1c1c] text-[#666] text-[11px]">
                                <span className="float-left w-[197px] pl-[15px]">
                                  사용가능 카드
                                </span>
                                <span className="float-left w-[135px] text-center">
                                  카드 번호
                                </span>
                                <span className="float-left w-[130px] text-center">
                                  유효기간
                                </span>
                              </div>
                              <div className="list-body flex justify-center min-h-[150px] items-center text-[#666] text-[13px] font-semibold">
                                사용 가능한 무비패스카드이(가) 없습니다.
                              </div>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "쿠프마케팅 아이넘버 예매권" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              쿠프마케팅 아이넘버 예매권
                            </h5>
                            <div className="mb-[20px]">
                              <input
                                type="text"
                                placeholder="쿠폰번호 12자리를 입력해 주세요."
                                className="w-[250px] h-[22px] px-1 text-[12px] bg-[#F2F0E4] border border-[#999] "
                              />
                              <button className="bg-[#926f60] ml-2 h-[22px] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                조회/적용
                              </button>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[50px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] pr-[17px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[13px] text-[#666] pl-[17px]">
                                CJ ONE 포인트 및 기타 제휴 포인트 적립 불가
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "즐거운 스마일콘 예매권" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              즐거운 스마일콘 예매권
                            </h5>
                            <div className="mb-[20px]">
                              <input
                                type="text"
                                placeholder="쿠폰번호 12자리를 입력해 주세요."
                                className="w-[250px] h-[22px] px-1 text-[12px] bg-[#F2F0E4] border border-[#999] "
                              />
                              <button className="bg-[#926f60] ml-2 h-[22px] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                조회/적용
                              </button>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[50px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] pr-[17px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[13px] text-[#666] pl-[17px]">
                                CJ ONE 포인트 및 기타 제휴 포인트 적립 불가
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "카카오선물하기 예매권" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              카카오선물하기 예매권
                            </h5>
                            <div className="mb-[20px]">
                              <input
                                type="text"
                                placeholder="쿠폰번호 12자리를 입력해 주세요."
                                className="w-[250px] h-[22px] px-1 text-[12px] bg-[#F2F0E4] border border-[#999] "
                              />
                              <button className="bg-[#926f60] ml-2 h-[22px] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                조회/적용
                              </button>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[50px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] pr-[17px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[11px] text-[#666] pl-[17px]">
                                CJ ONE 포인트 및 기타 제휴 포인트 적립 불가
                                <br />
                                카카오선물하기 예매권 유효기간 만료 시, 예매된
                                티켓의 취소 후 재예매 불가
                                <br />
                                카카오선물하기 복합상품의 '매점상품'을 사용
                                완료하였을 경우, 예매된 티켓의 취소 불가
                                <br />
                                카카오 선물하기 복합상품으로 예매 시, 중복 적용
                                불가
                                <br />
                                {"  "} 예{")"} 4인 예매 시, 2인 PKG 2매 동시
                                적용 불가
                                <br />
                                예매권 관련 문의사항 ☎ 1661-8191 (주식회사
                                즐거운)
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "옥션/G마켓 예매권" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              옥션/G마켓 예매권
                            </h5>
                            <div className="mb-[20px]">
                              <input
                                type="text"
                                placeholder="쿠폰번호 12자리를 입력해 주세요."
                                className="w-[250px] h-[22px] px-1 text-[12px] bg-[#F2F0E4] border border-[#999] "
                              />
                              <button className="bg-[#926f60] ml-2 h-[22px] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                조회/적용
                              </button>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[50px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] pr-[17px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[11px] text-[#666] pl-[17px]">
                                CJ ONE 포인트 및 기타 제휴 포인트 적립 불가
                                <br />
                                옥션/G마켓 예매권 유효기간 만료 시, 기 예매된
                                티켓의 취소 후 재예매 불가
                                <br />
                                예매권 관련 문의사항 ☎ 1644-6835 (주식회사
                                쿠프마케팅)
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "FUN-CON" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              FUN-CON
                            </h5>
                            <div className="mb-[20px]">
                              <input
                                type="text"
                                placeholder="쿠폰번호 15자리를 입력해 주세요."
                                className="w-[250px] h-[22px] px-1 text-[12px] bg-[#F2F0E4] border border-[#999] "
                              />
                              <button className="bg-[#926f60] ml-2 h-[22px] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                조회/적용
                              </button>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[50px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] pr-[17px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[11px] text-[#666] pl-[17px]">
                                FUN-CON 결제는 잔여금액 적립 및 환불이 불가하여,
                                사용이 제한됩니다.
                                <br />
                                예) FUN-CON 5,000원 등록 6,000원 사용 시 결제
                                가능
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FUN-CON 5,000원
                                등록 4,000원 사용시 결제 불가
                                <br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(현장 결제 시
                                사용가능)
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "원큐브마케팅 기프팅 예매권" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              원큐브마케팅 기프팅 예매권
                            </h5>
                            <div className="mb-[20px]">
                              <input
                                type="text"
                                placeholder="쿠폰번호 12자리를 입력해 주세요."
                                className="w-[250px] h-[22px] px-1 text-[12px] bg-[#F2F0E4] border border-[#999] "
                              />
                              <button className="bg-[#926f60] ml-2 h-[22px] border-[#806052] rounded px-2 text-[12px] text-[#fff]">
                                조회/적용
                              </button>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[50px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] pr-[17px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[11px] text-[#666] pl-[17px]">
                                CJ ONE 포인트 및 기타 제휴 포인트 적립 불가
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === null && (
                          <p className="flex justify-center items-center min-h-[200px] text-[13px] font-extrabold text-[#666]">
                            쿠폰을 선택하세요.
                          </p>
                        )}{" "}
                        {/* 기본 메시지 */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* STEP 3 */}
          <div className="w-[744px] mt-[5px] mb-[30px]">
            <div className="h-[33px] leading-[33px] text-[#e0e0e0] bg-[#333] flex justify-between mb-[3px]">
              <h2 className="h-[100%] text-[17px] font-extrabold flex items-center ml-4">
                STEP 3.
              </h2>
              <a href="#" className="refresh mr-[12px] pr-[24px]">
                <span className="text-[#e6e6e6] text-[12px] font-extrabold">
                  다시하기
                </span>
              </a>
            </div>
            <div className="flex justify-between h-[43px] bg-[#dfded6] text-[#333]">
              <h4 className="h-[100%] text-[17px] font-extrabold flex items-center ml-4">
                포인트 및 기타결제 수단
              </h4>
              <button
                onClick={() => setIsStep3Open(!isStep3Open)} // 클릭 시 상태 변경
                style={{
                  width: "43px",
                  height: "43px",
                  background: `url(/image/step3_bullets.png)`, // 같은 이미지 경로
                  backgroundPosition: isStep3Open ? "0 -43px" : "0 0", // 열기/닫기 상태에 따라 다르게 위치 설정
                  border: "none",
                  cursor: "pointer",
                  outline: "none",
                }}
              />
            </div>
            {isStep3Open && (
              <div className="">
                {/* STEP 3 내용 */}
                <div className="border-2 border-[#dfded6]">
                  <div className="flex justify-center items-center h-[31px] bg-[#f9f8f3] border-b border-[#dfded6]">
                    <p className="text-[14px] font-bold text-[#666]">
                      선택 불가능한 기타 포인트 항목은 비활성화 처리됩니다.
                    </p>
                  </div>

                  <div className="flex">
                    <div className="discount-list w-[183px] border-r border-[#d7d6cf]">
                      <ul>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("CJ ONE 포인트")}
                        >
                          <a href="#">CJ ONE 포인트</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("CJ 기프트카드")}
                        >
                          <a href="#">CJ 기프트카드</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("CGV 기프트카드")}
                        >
                          <a href="#">CGV 기프트카드</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("현대카드 M포인트")}
                        >
                          <a href="#">현대카드 M포인트</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("신세계포인트")}
                        >
                          <a href="#">신세계포인트</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("삼성 U-Point")}
                        >
                          <a href="#">삼성 U-Point</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("우리WON꿀머니")}
                        >
                          <a href="#">우리WON꿀머니</a>
                        </li>
                        <li
                          className="w-[100%] border-b border-[#d7d6cf]"
                          onClick={() => handleCouponClick("하나머니")}
                        >
                          <a href="#">하나머니</a>
                        </li>
                      </ul>
                    </div>
                    <div className="discount-form w-[556px] min-h-[280px]">
                      <div className="p-4 relative">
                        {/* 선택된 쿠폰에 따라 내용 표시 */}
                        {selectedCoupon === "CJ ONE 포인트" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              CJ ONE 포인트
                            </h5>
                            <div className="flex p-[10px] justify-between">
                              <div>
                                <span className="text-[12px] text-[#333]">
                                  보유 포인트
                                </span>
                                <span className="text-[12px] text-[#b15129] ml-2 font-extrabold">
                                  0 원
                                </span>
                              </div>
                              <div>
                                <span className="text-[12px] text-[#333]">
                                  사용할 포인트
                                </span>
                                <input
                                  className="text-[12px] ml-2 border-2 border-[#acaba2] w-[90px] text-right py-[2px] pr-2 bg-[#F2F0E4]"
                                  type="text"
                                  placeholder="0"
                                />
                                <span className="text-[12px] ml-1">원</span>
                              </div>
                              <div className="flex items-center">
                                <input
                                  className="text-[12px]"
                                  type="checkbox"
                                />
                                <span className="text-[12px] ml-2">
                                  모두사용
                                </span>
                              </div>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[50px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] pr-[17px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[13px] text-[#666] pl-[17px]">
                                CJ ONE 포인트는 1,000P 이상부터 10P 단위로 사용
                                가능합니다.
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "CJ 기프트카드" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              CJ 기프트카드
                            </h5>
                            <div className="flex p-[10px] justify-between">
                              <div>
                                <span className="text-[12px] text-[#333]">
                                  카드 보유 금액
                                </span>
                                <span className="text-[12px] text-[#b15129] ml-2 font-extrabold">
                                  0 원
                                </span>
                              </div>
                              <div>
                                <span className="text-[12px] text-[#333]">
                                  적용금액
                                </span>
                                <input
                                  className="text-[12px] ml-2 border-2 border-[#acaba2] w-[90px] text-right py-[2px] pr-2 bg-[#F2F0E4]"
                                  type="text"
                                  placeholder="0"
                                />
                                <span className="text-[12px] ml-1">원</span>
                              </div>
                              <div className="flex items-center">
                                <input
                                  className="text-[12px]"
                                  type="checkbox"
                                />
                                <span className="text-[12px] ml-2">
                                  모두사용
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "CGV 기프트카드" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              CGV 기프트카드
                            </h5>
                            <div className="flex p-[10px] justify-between">
                              <div>
                                <span className="text-[12px] text-[#333]">
                                  카드 보유 금액
                                </span>
                                <span className="text-[12px] text-[#b15129] ml-2 font-extrabold">
                                  0 원
                                </span>
                              </div>
                              <div>
                                <span className="text-[12px] text-[#333]">
                                  적용금액
                                </span>
                                <input
                                  className="text-[12px] ml-2 border-2 border-[#acaba2] w-[90px] text-right py-[2px] pr-2 bg-[#F2F0E4]"
                                  type="text"
                                  placeholder="0"
                                />
                                <span className="text-[12px] ml-1">원</span>
                              </div>
                              <div className="flex items-center">
                                <input
                                  className="text-[12px]"
                                  type="checkbox"
                                />
                                <span className="text-[12px] ml-2">
                                  모두사용
                                </span>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "현대카드 M포인트" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              현대카드 M포인트
                            </h5>
                            <div className="mb-2">
                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left">
                                  카드번호
                                </span>
                                <div>
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666]"
                                    type="text"
                                  />{" "}
                                  -
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666] ml-1"
                                    type="text"
                                  />{" "}
                                  -
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666] ml-1"
                                    type="text"
                                  />{" "}
                                  -
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666] ml-1"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="flex h-[44px] items-center ">
                                <span className="text-[12px] px-[15px] text-left">
                                  유효기간
                                </span>
                                <input
                                  type="text"
                                  className="bg-[#F2F0E4] border-[1px] border-[#666] w-[38px] h-[21px] mr-1"
                                />{" "}
                                월
                                <input
                                  type="text"
                                  className="bg-[#F2F0E4] border-[1px] border-[#666] w-[38px] h-[21px] ml-2 mr-1"
                                />{" "}
                                년
                              </div>
                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left">
                                  비밀번호
                                </span>
                                <div className="flex items-center ">
                                  <input
                                    className="bg-[#F2F0E4] border-[1px] border-[#666] w-[38px] h-[21px] mr-1"
                                    type="text"
                                  />
                                  <span className="font-bold text-[25px] pt-2">
                                    **
                                  </span>
                                </div>
                              </div>
                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left">
                                  법정생년월일
                                  <br />
                                  (6자리)
                                </span>
                                <div className="flex items-center">
                                  <input
                                    type="text"
                                    className="bg-[#F2F0E4] border-[1px] border-[#666] w-[107px] mr-1"
                                  />{" "}
                                  -
                                  <span className="font-bold text-[25px] pt-2 ml-1 mr-2">
                                    *******
                                  </span>
                                  <button className="bg-[#926f60] border-[#806052] rounded px-2 h-[21px] text-[12px] text-[#fff]">
                                    조회
                                  </button>
                                </div>
                              </div>
                              <div className="flex h-[44px] items-center justify-between w-[380px]">
                                <span className="text-[12px] px-[15px] text-left">
                                  사용가능한 포인트
                                </span>
                                <span className="text-[12px] text-[#9b3d20] font-bold">
                                  0 점
                                </span>
                                <div>
                                  <span className="text-[12px] ml-12 mr-1">
                                    적용매수
                                  </span>
                                  <select
                                    className="text-[12px] bg-[#F2F0E4] border-[1px] border-[#666] h-[21px] w-[60px]"
                                    name=""
                                    id=""
                                  >
                                    <option value="">0</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px]">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[30px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] w-[100px] pr-[16px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[13px] text-[#666] px-[17px]">
                                현대 M포인트는 6,000포인트 사용 가능합니다.
                                <br />
                                M포인트 사용 후 잔여금액은 해당 현태카드로 자동
                                결제됩니다.
                                <br />
                                M포인트 사용과 관련한 안내사항은 'CGV할인정보{" "}
                                {">"}
                                신용카드 {">"} 현대카드 M포인트'를 확인해
                                주세요.
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "신세계포인트" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              신세계포인트
                            </h5>
                            <div className="mb-2">
                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left">
                                  카드번호
                                </span>
                                <div>
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666] ml-[55px]"
                                    type="text"
                                  />{" "}
                                  -
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666] ml-1"
                                    type="text"
                                  />{" "}
                                  -
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666] ml-1"
                                    type="text"
                                  />{" "}
                                  -
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666] ml-1"
                                    type="text"
                                  />
                                </div>
                              </div>

                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left ">
                                  비밀번호
                                </span>
                                <div className="flex items-center ml-[55px]">
                                  <input
                                    className="bg-[#F2F0E4] border-[1px] border-[#666] w-[100px] h-[21px] mr-1"
                                    type="text"
                                  />
                                  <button className="bg-[#926f60] border-[#806052] rounded px-2 h-[21px] text-[12px] text-[#fff]">
                                    조회
                                  </button>
                                </div>
                              </div>

                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left">
                                  사용가능한 포인트
                                </span>
                                <div className="flex items-center ml-[38px]">
                                  <span className="text-[12px] font-bold text-[#9b3d20] ml-12">
                                    0 점
                                  </span>
                                </div>
                              </div>

                              <div className="flex h-[44px] items-center w-[380px]">
                                <span className="text-[12px] px-[15px] text-left">
                                  사용할 포인트
                                </span>
                                <input
                                  className="bg-[#F2F0E4] text-right pr-2 text-[12px] border-[1px] border-[#666] w-[80px] h-[21px] mr-1 ml-8"
                                  type="text"
                                  placeholder="0"
                                />
                                <span className="text-[12px] font-bold text-[#666] ml-1">
                                  점
                                </span>
                              </div>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[30px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] w-[100px] pr-[16px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[13px] text-[#666] px-[17px]">
                                조회 후 가용 포인트 내에서 500포인트 단위로 사용
                                가능
                                <br />
                                비밀번호는 고객이 등록한 포인트 사용 비밀번호
                                4자리 입력
                                <br />
                                CJ ONE 포인트 및 기타 제휴 포인트 적립 불가
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "삼성 U-Point" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              현대카드 M포인트
                            </h5>
                            <div className="mb-2">
                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left">
                                  카드번호
                                </span>
                                <div>
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666]"
                                    type="text"
                                  />{" "}
                                  -
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666] ml-1"
                                    type="text"
                                  />{" "}
                                  -
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666] ml-1"
                                    type="text"
                                  />{" "}
                                  -
                                  <input
                                    className="w-[60px] h-[21px] bg-[#F2F0E4] border-[1px] border-[#666] ml-1"
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="flex h-[44px] items-center ">
                                <span className="text-[12px] px-[15px] text-left">
                                  유효기간
                                </span>
                                <input
                                  type="text"
                                  className="bg-[#F2F0E4] border-[1px] border-[#666] w-[38px] h-[21px] mr-1"
                                />{" "}
                                월
                                <input
                                  type="text"
                                  className="bg-[#F2F0E4] border-[1px] border-[#666] w-[38px] h-[21px] ml-2 mr-1"
                                />{" "}
                                년
                              </div>

                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left">
                                  법정생년월일
                                  <br />
                                  (6자리)
                                </span>
                                <div className="flex items-center">
                                  <input
                                    type="text"
                                    className="bg-[#F2F0E4] border-[1px] border-[#666] w-[107px] mr-1"
                                  />{" "}
                                  -
                                  <span className="font-bold text-[25px] pt-2 ml-1 mr-2">
                                    *******
                                  </span>
                                  <button className="bg-[#926f60] border-[#806052] rounded px-2 h-[21px] text-[12px] text-[#fff]">
                                    조회
                                  </button>
                                </div>
                              </div>
                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left">
                                  사용가능한 포인트
                                </span>
                                <div className="flex items-center ml-[38px]">
                                  <span className="text-[12px] font-bold text-[#9b3d20] ml-12">
                                    0 점
                                  </span>
                                </div>
                              </div>

                              <div className="flex h-[44px] items-center w-[380px]">
                                <span className="text-[12px] px-[15px] text-left">
                                  사용할 포인트
                                </span>
                                <input
                                  className="bg-[#F2F0E4] text-right pr-2 text-[12px] border-[1px] border-[#666] w-[80px] h-[21px] mr-1 ml-8"
                                  type="text"
                                  placeholder="0"
                                />
                                <span className="text-[12px] font-bold text-[#666] ml-1">
                                  점
                                </span>
                              </div>
                              <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px] mt-4">
                                <span className="text-[#59656e]">
                                  할인금액:{" "}
                                </span>
                                <span className="text-[#9b3d20] pl-[35px] font-bold">
                                  0
                                </span>
                                <span className="text-[#9b3d20]">원</span>
                              </div>
                              <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[30px]">
                                <div className="text-[13px] font-bold text-[#333] pl-[22px] w-[100px] pr-[16px] border-r border-[#d7d6cf]">
                                  이용안내
                                </div>
                                <div className="text-[13px] text-[#666] px-[17px]">
                                  1,000포인트 이상부터 사용가능(횟수제한 없음)
                                  <br />
                                  CJ ONE 포인트 및 기타 제휴포인트 적립 불가
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "우리WON꿀머니" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              우리WON꿀머니
                            </h5>
                            <div className="mb-[20px]">
                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left ">
                                  비밀번호
                                </span>
                                <div className="flex items-center ml-[55px]">
                                  <input
                                    className="bg-[#F2F0E4] border-[1px] border-[#666] w-[100px] h-[21px] mr-1"
                                    type="text"
                                  />
                                  <button className="bg-[#926f60] border-[#806052] rounded px-2 h-[21px] text-[12px] text-[#fff]">
                                    조회
                                  </button>
                                </div>
                              </div>

                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left">
                                  사용가능한 포인트
                                </span>
                                <div className="flex items-center ml-[38px]">
                                  <span className="text-[12px] font-bold text-[#9b3d20] ml-12">
                                    0 점
                                  </span>
                                </div>
                              </div>

                              <div className="flex h-[44px] items-center w-[380px]">
                                <span className="text-[12px] px-[15px] text-left">
                                  사용할 포인트
                                </span>
                                <input
                                  className="bg-[#F2F0E4] text-right pr-2 text-[12px] border-[1px] border-[#666] w-[80px] h-[21px] mr-1 ml-8"
                                  type="text"
                                  placeholder="0"
                                />
                                <span className="text-[12px] font-bold text-[#666] ml-1">
                                  점
                                </span>
                                <input type="checkbox" className="ml-4" />
                                <span className="text-[#9b3d20] text-[12px] font-bold ml-1">
                                  모두사용
                                </span>
                              </div>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px] mt-4">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[30px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] w-[100px] pr-[16px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[13px] text-[#666] px-[17px]">
                                - 조회 후 보유 포인트 내에서 10포인트 단위로
                                사용 가능
                                <br />- 비밀번호는 우리WON멤버스 app 로그인
                                핀번호 6자리 입력
                                <br />- 우리WON멤버스 점검시간동안 우리WON꿀머니
                                사용불가합니다.
                                <br />
                                (매일 23:30~00:50) / 우리WON멤버스
                                고객센터(080-899-5000)
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === "하나머니" && (
                          <div>
                            <h5 className="mb-[14px] text-[#306791] leading-[18px] text-[14px] font-bold h-[14px] tracking-[-1px]">
                              하나머니
                            </h5>
                            <div className="mb-[20px]">
                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left">
                                  사용가능한 포인트
                                </span>
                                <div className="flex items-center ml-[38px]">
                                  <span className="text-[12px] font-bold text-[#9b3d20] ml-12">
                                    0 점
                                  </span>
                                </div>
                              </div>

                              <div className="flex h-[44px] items-center w-[380px]">
                                <span className="text-[12px] px-[15px] text-left">
                                  사용할 포인트
                                </span>
                                <input
                                  className="bg-[#F2F0E4] text-right pr-2 text-[12px] border-[1px] border-[#666] w-[80px] h-[21px] mr-1 ml-8"
                                  type="text"
                                  placeholder="0"
                                />
                                <span className="text-[12px] font-bold text-[#666] ml-1">
                                  점
                                </span>
                              </div>
                              <div className="flex h-[44px] items-center">
                                <span className="text-[12px] px-[15px] text-left ">
                                  비밀번호
                                </span>
                                <div className="flex items-center ml-[55px]">
                                  <input
                                    className="bg-[#F2F0E4] border-[1px] border-[#666] w-[100px] h-[21px] mr-1"
                                    type="text"
                                  />
                                  <button className="bg-[#926f60] border-[#806052] rounded px-2 h-[21px] text-[12px] text-[#fff]">
                                    조회
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="form_result border-t border-[#1c1c1c] text-right py-3 px-5 text-[13px] mt-4">
                              <span className="text-[#59656e]">할인금액: </span>
                              <span className="text-[#9b3d20] pl-[35px] font-bold">
                                0
                              </span>
                              <span className="text-[#9b3d20]">원</span>
                            </div>
                            <div className="border-2 border-[#d7d6cf]  flex py-[14px] mt-[30px]">
                              <div className="text-[13px] font-bold text-[#333] pl-[22px] w-[100px] pr-[16px] border-r border-[#d7d6cf]">
                                이용안내
                              </div>
                              <div className="text-[13px] text-[#666] px-[17px]">
                                - 하나머니 포인트는 500머니 단위로 사용
                                가능합니다.
                                <br />- 하나멤버스 가입시 등록한 핸드폰번호로
                                인증번호가 발송됩니다.
                              </div>
                            </div>
                          </div>
                        )}
                        {selectedCoupon === null && (
                          <p className="flex justify-center items-center min-h-[200px] text-[13px] font-extrabold text-[#666]">
                            쿠폰을 선택하세요.
                          </p>
                        )}{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* STEP 4 */}
          <div className="w-[744px] mt-[5px] mb-[30px]">
            <div className="h-[33px] leading-[33px] text-[#e0e0e0] bg-[#333] flex justify-between mb-[3px]">
              <h2 className="h-[100%] text-[17px] font-extrabold flex items-center ml-4">
                STEP 4.
              </h2>
              <a href="#" className="refresh mr-[12px] pr-[24px]">
                <span className="text-[#e6e6e6] text-[12px] font-extrabold">
                  다시하기
                </span>
              </a>
            </div>

            {/* body */}
            <div className="mt-[5px] flex justify-center">
              <div className="flex w-[700px] items-center space-x-4 float-left ml-2 h-[50px] border-b border-[#666]">
                <div className="flex">
                  <input
                    type="radio"
                    id="creditCard"
                    name="paymentMethod"
                    onChange={() => handlePaymentMethodChange("신용카드")}
                  />
                  <span className="text-[15px] font-bold ml-1">신용카드</span>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    id="mobilePayment"
                    name="paymentMethod"
                    onChange={() => handlePaymentMethodChange("휴대폰 결제")}
                  />
                  <span className="text-[15px] font-bold ml-1">
                    휴대폰 결제
                  </span>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    id="easyPayment"
                    name="paymentMethod"
                    onChange={() => handlePaymentMethodChange("간편결제")}
                  />
                  <span className="text-[15px] font-bold ml-1">간편결제</span>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    id="bankTransfer"
                    name="paymentMethod"
                    onChange={() => handlePaymentMethodChange("내통장결제")}
                  />
                  <span className="text-[15px] font-bold ml-1">내통장결제</span>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    id="toss"
                    name="paymentMethod"
                    onChange={() => handlePaymentMethodChange("토스")}
                  />
                  <span className="text-[15px] font-bold ml-1">토스</span>
                </div>
              </div>
            </div>
            <div className="body mt-4 flex">
              {/* 선택된 결제 방식에 따라 내용 변경 */}
              <div className="w-[100%]">
                {selectedPaymentMethod === "신용카드" && (
                  <div>
                    <div className="flex">
                      <div className="px-[15px] ml-8 w-[500px]">
                        <span>카드종류</span>
                        <select
                          name="cardType"
                          id="cardType"
                          className="h-[30px] bg-transparent border border-[#666] ml-2 px-2"
                        >
                          <option
                            value="visa"
                            className="text-[12px]"
                            disabled
                            selected
                          >
                            카드를 선택하세요
                          </option>
                          <option value="visa">Visa</option>
                          <option value="visa">Visa</option>
                          <option value="visa">Visa</option>
                          <option value="visa">Visa</option>
                          <option value="visa">Visa</option>
                          <option value="mastercard">MasterCard</option>
                          <option value="amex">American Express</option>
                        </select>
                      </div>
                      {/* 광고 */}
                      <div>
                        <img
                          src={`${process.env.PUBLIC_URL}/image/CGV_BUGS_payment.png`}
                          alt=""
                          className="w-[192px]"
                        />
                      </div>
                    </div>
                    <div className="bg-[#ebe9df] px-12 py-12 mt-8 text-[#666]">
                      <span>
                        ※ 신용카드 결제 가능 최소 금액은 1,000원 이상입니다.
                      </span>
                      <div className="underline">
                        <span>삼성U포인트 적립, {"  "}</span>
                        <span>OK캐쉬백 적립, {"  "}</span>
                        <span>신세계포인트 적립</span>
                      </div>
                      <span>
                        (삼성U포인트, OK캐쉬백, 신세계포인트는 포인트 중복 적립
                        불가)
                      </span>
                    </div>
                  </div>
                )}
                {selectedPaymentMethod === "휴대폰 결제" && (
                  <div className="flex justify-center">
                    {/* head */}
                    <div className="w-[700px]">
                      <div className="border-b border-[#666] pl-4 py-2">
                        <span className="text-[15px]">결제금액</span>
                        <span className="text-[22px] font-extrabold ml-4">
                          {totalAmount.toLocaleString()}
                        </span>
                        <span className="ml-1">원</span>
                      </div>
                      <div className="border-b border-[#666] pl-4 py-4">
                        <span className="mr-4">상품명</span>
                        <span>영화티켓예매</span>
                      </div>
                      <div className="flex">
                        <div className="my-0 mx-auto text-[12px] p-[18px] mt-2">
                          <h3 className="text-[14px] font-bold text-[#333] mb-2">
                            휴대푠 결제 순서
                          </h3>
                          1. 우측 하단에 있는 "결제하기" 버튼 클릭해주세요
                          <br />
                          2. 예매내역 확인 후 결제하기 버튼 클릭 시 결제
                          팝업창이 뜹니다.
                          <br />
                          3. 해당 팝업에서 통신사 선택 후 정보를 입력해주세요.
                          <br />
                          <br />
                          <span className="text-red-600	font-bold">
                            ※ 휴대폰 결제 진행시 원할한 사용을 위하여 다음
                            사항을 꼭 확인하세요.
                          </span>
                          <br />
                          * 팝업 차단 설정을 꼭 해제하셔야 합니다. (도구→팝업
                          차단 끄기)
                          <br />* 팝업 차단 해제 시, 웹 브라우저 새로고침으로
                          인하여 최대 10분 동안 동일 좌석 선택이 제한 될 수
                          있습니다.
                        </div>
                      </div>
                    </div>
                    {/* body */}
                  </div>
                )}
                {selectedPaymentMethod === "간편결제" && (
                  <div>
                    <div className=" flex justify-center">
                      <div className="flex w-[700px] items-center space-x-4 float-left ml-2 pb-4 border-b border-[#666]">
                        <div className="flex">
                          <input
                            type="radio"
                            value="네이버페이"
                            checked={selectedPayment === "네이버페이"}
                            onChange={handlePaymentChange}
                          />
                          <span className="text-[15px] font-bold ml-1">
                            네이버페이
                          </span>
                        </div>
                        <div className="flex">
                          <input
                            type="radio"
                            value="스마일페이"
                            checked={selectedPayment === "스마일페이"}
                            onChange={handlePaymentChange}
                          />
                          <span className="text-[15px] font-bold ml-1">
                            스마일페이
                          </span>
                        </div>
                        <div className="flex">
                          <input
                            type="radio"
                            value="SSGPAY"
                            checked={selectedPayment === "SSGPAY"}
                            onChange={handlePaymentChange}
                          />
                          <span className="text-[15px] font-bold ml-1">
                            SSGPAY
                          </span>
                        </div>
                        <div className="flex">
                          <input
                            type="radio"
                            value="카카오페이"
                            checked={selectedPayment === "카카오페이"}
                            onChange={handlePaymentChange}
                          />
                          <span className="text-[15px] font-bold ml-1">
                            카카오페이
                          </span>
                        </div>
                        <div className="flex">
                          <input
                            type="radio"
                            value="PAYCO"
                            checked={selectedPayment === "PAYCO"}
                            onChange={handlePaymentChange}
                          />
                          <span className="text-[15px] font-bold ml-1">
                            PAYCO
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      {selectedPayment === "네이버페이" && (
                        <div className="flex flex-col">
                          <div className="ml-12 text-[12px] flex">
                            <input type="checkbox" name="" id="" />
                            <span className="ml-1 text-red-600 font-semibold">
                              문화누리카드 할인
                            </span>
                          </div>
                          <div className="my-0 mx-auto text-[12px] p-[18px] mt-2">
                            <h3 className="text-[14px] font-bold text-[#333] mb-2">
                              네이버페이 결제 순서
                            </h3>
                            1. 우측 하단에 있는 "결제하기" 버튼 클릭해주세요.
                            <br />
                            2. 예매내역 확인 후 결제하기 버튼 클릭 시
                            '네이버페이' 결제 인증창이 뜹니다.
                            <br />
                            3. '네이버페이'결제 인증창에서 정보를 입력하신 후
                            결제해주세요.
                          </div>
                          <div className="bg-[#ebe9df] py-[20px] flex">
                            <span className="text-red-600 text-[12px] font-bold flex text-center my-0 mx-auto">
                              네이버페이 결제 시 결제 금액의 최대 2%가
                              적립됩니다.
                              <br />
                              (네이버페이 기본 적립 0.1 ~ 최대 1% + 네이버페이
                              머니 충전 결제 적립 최대 1%)
                              <br />
                              네이버페이 기본 적립은 네이버 경로 결제 시 1%,
                              기타 경로 결제 시 0.1%가 적립되며,
                              <br />
                              적립 관련 문의사항은 네이버페이 고객센터로 문의
                              부탁드립니다.
                              <br />
                              네이버페이는 즉시 할인 신용카드 및 카드사 포인트
                              사용이 불가하며 신용카드별 청구할인은 이용
                              가능합니다.
                              <br />
                              네이버페이는 네이버 ID로 신용카드 또는 은행 계좌
                              정보를 등록하여 결제할 수 있는 간편결제
                              서비스입니다.
                              <br />
                              주문 변경 시 카드사 혜택 및 할부 적용 여부는 해당
                              카드사 정책에 따라 변경될 수 있습니다.
                              <br />
                              지원 가능 결제수단: 네이버페이 결제창 내 노출되는
                              모든 카드/계좌
                              <br />
                              네이버페이 문화누리카드는 [문화누리카드 할인] 적용
                              건에 한하여 결제 가능합니다.
                            </span>
                          </div>
                        </div>
                      )}
                      {selectedPayment === "스마일페이" && (
                        <div className="flex flex-col">
                          <div className="my-0 mx-auto text-[12px] p-[18px] mt-2">
                            <h3 className="text-[14px] font-bold text-[#333] mb-2">
                              스마일페이 결제 순서
                            </h3>
                            1. 아래 결제하기 버튼 클릭 후 다음 단계로 이동
                            <br />
                            2. 결제내역 확인 후 결제하기 버튼 클릭 시, 팝업창이
                            뜸
                            <br />
                            3. 해당 '스마일페이' 팝업에서 원하는 카드를 선택 후
                            정보를 입력하시면 됩니다.
                          </div>
                          <div className="bg-[#ebe9df] py-[20px] flex">
                            <span className="text-red-600 text-[12px] font-bold flex text-left my-0 mx-auto">
                              '스마일페이' 결제 시, 기본 0.5% 스마일캐시가
                              적립되며,
                              <br />
                              스마일카드로 결제 시, 기본 0.5% + 추가 2.0%
                              적립되어 최대 2.5% 적립됩니다.
                              <br />
                              <br />
                              '스마일페이' 는 즉시할인 신용카드, 카드사 포인트는
                              이용이 불가능하며,
                              <br />
                              신용카드별 청구할인은 이용이 가능합니다.
                            </span>
                          </div>
                        </div>
                      )}
                      {selectedPayment === "SSGPAY" && (
                        <div className="flex flex-col">
                          <div className="my-0 mx-auto text-[12px] p-[18px] mt-2">
                            <h3 className="text-[14px] font-bold text-[#333] mb-2">
                              SSGPAY 결제 순서
                            </h3>
                            1. 우측 하단에 있는 '결제하기' 버튼을 클릭해주세요.
                            <br />
                            2. 예매내역 확인 후 결제하기 버튼 클릭 시 'SSGPAY'
                            결제 인증창이 뜹니다.
                            <br />
                            3. 'SSGPAY' 결제 인증창에서 정보를 입력하신 후
                            결제해주세요.
                          </div>
                          <div className="bg-[#ebe9df] py-[20px] flex">
                            <span className="text-red-600 text-[12px] font-bold flex text-center my-0 mx-auto">
                              'SSGPAY' 는 결제 시 신용카드 선할인과 카드사
                              포인트는
                              <br />
                              이용이 불가능하며, 신용카드 별 청구할인은 이용이
                              가능합니다.
                            </span>
                          </div>
                        </div>
                      )}
                      {selectedPayment === "카카오페이" && (
                        <div className="flex flex-col">
                          <div className="my-0 mx-auto text-[12px] p-[18px] mt-2">
                            <h3 className="text-[14px] font-bold text-[#333] mb-2">
                              카카오페이 결제 순서
                            </h3>
                            1. 우측 하단에 있는 '결제하기' 버튼을 클릭해주세요.
                            <br />
                            2. 예매내역 확인 후 결제하기 버튼 클릭 시
                            '카카오페이' 결제 인증창이 뜹니다.
                            <br />
                            3. '카카오페이' 결제 인증창에서 정보를 입력하신 후
                            결제해주세요.
                          </div>
                          <div className="bg-[#ebe9df] py-[20px] flex">
                            <span className="text-red-600 text-[12px] font-bold flex text-center my-0 mx-auto">
                              * '카카오페이' 는 신용카드 선할인과 카드사
                              포인트는 이용이 불가능하며,
                              <br />
                              신용카드별 청구할인은 이용이 가능합니다.
                            </span>
                          </div>
                        </div>
                      )}
                      {selectedPayment === "PAYCO" && (
                        <div className="flex flex-col">
                          <div className="my-0 mx-auto text-[12px] p-[18px] mt-2">
                            <h3 className="text-[14px] font-bold text-[#333] mb-2">
                              PAYCO 결제 순서
                            </h3>
                            1. 우측 하단에 있는 '결제하기' 버튼을 클릭해주세요.
                            <br />
                            2. 예매내역 확인 후 결제하기 버튼 클릭 시 'PAYCO'
                            결제 인증창이 뜹니다.
                            <br />
                            3. 'PAYCO' 결제 인증창에서 정보를 입력하신 후
                            결제해주세요.
                          </div>
                          <div className="bg-[#ebe9df] py-[20px] flex">
                            <span className="text-red-600 text-[12px] font-bold flex text-center my-0 mx-auto">
                              'PAYCO' 는 씨티카드와 즉시할인 신용카드, 카드사
                              포인트는 이용이 불가능하며,
                              <br />
                              신용카드 별 청구할인은 이용이 가능합니다.
                              <br />
                              'PAYCO' 할인쿠폰 사용 금액에 대해서는 CJ ONE
                              포인트 적립이 불가합니다.
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
                {selectedPaymentMethod === "내통장결제" && (
                  <div className="flex flex-col">
                    <div className="my-0 mx-auto text-[12px] p-[18px] mt-2">
                      <h3 className="text-[14px] font-bold text-[#333] mb-2">
                        내통장결제 결제 순서
                      </h3>
                      1. 아래 결제하기 버튼 클릭 후 다음 단계로 이동
                      <br />
                      2. 결제내역 확인 후 결제하기 버튼 클릭 시, 팝업창 노출
                      <br />
                      3. 해당 팝업창을 통해 본인명의의 계좌 1회 등록
                      <br />
                      4. 계좌등록 시, 비밀번호만으로 현금 간편결제 서비스 이용
                    </div>
                    <div className="bg-[#ebe9df] py-[20px] flex">
                      <span className="text-red-600 text-[12px] font-bold flex text-center my-0 mx-auto">
                        '내통장결제'는 CGV 내 본인명의 계좌 등록 후
                        비밀번호만으로 결제할 수 있는 간편 결제 서비스입니다.
                        <br />
                        은행 점검시간인 경우 내통장결제 서비스 이용이
                        불가합니다.
                      </span>
                    </div>
                  </div>
                )}
                {selectedPaymentMethod === "토스" && (
                  <div className="flex flex-col">
                    <div className="my-0 mx-auto text-[12px] p-[18px] mt-2">
                      <h3 className="text-[14px] font-bold text-[#333] mb-2">
                        토스 결제 순서
                      </h3>
                      1. 우측 하단에 있는 "결제하기"버튼을 클릭해주세요.
                      <br />
                      2. 예매내역 확인 후 결제하기 버튼 클릭 시 '토스' 결제
                      인증창이 뜹니다.
                      <br />
                      3. '토스'결제 인증창에서 정보를 입력하신 후 결제해주세요.
                    </div>
                    <div className="bg-[#ebe9df] py-[20px] flex">
                      <span className="text-red-600 text-[12px] font-bold flex text-center my-0 mx-auto">
                        '토스'는 신용카드 선할인과 카드사 포인트는 이용이
                        불가능하며,
                        <br />
                        신용카드별 청구할인은 이용이 가능합니다.
                      </span>
                    </div>
                  </div>
                )}
                {selectedPaymentMethod === "" && <p>결제 방식을 선택하세요.</p>}
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div
            className="w-[216px] float-right"
            style={{
              position: "absolute",
              top: `${scrollPosition}px`,
              right: "20px",
            }}
          >
            <div className="tps-body pt-[19px] pb-[15px] shadow-lg bg-[#fff] space-y-4">
              {/* 결제하실 금액 */}
              <div className="total_box w-[187px] my-0 mx-auto bg-[#474747] p-[2px] border border-[#474747] rounded-[4px]">
                <div className="h-[32px] leading-[32px] tracking-[-1px] bg-[#fff] text-[15px] font-bold text-center">
                  결제하실금액
                </div>
                <div className="flex justify-end items-center pr-4 py-1">
                  <div className="text-[#fff] text-[22px] font-extrabold pr-1">
                    {totalAmount.toLocaleString()}
                  </div>
                  <div className="text-[#fff] text-[14px] font-lg">원</div>
                </div>
              </div>
              {/* 할인내역 */}
              <div className="discount_box w-[187px] my-0 mx-auto bg-[#242e35] p-[2px] border border-[#474747] rounded-[4px]">
                <div className="h-[32px] leading-[32px] tracking-[-1px] bg-[#d9e7eb] text-[15px] font-bold text-center">
                  할인내역
                </div>
                <div className="h-[32px] leading-[32px] tracking-[-1px] bg-[#fff] text-[15px] font-bold text-center">
                  총 할인금액
                </div>
                <div className="flex justify-end items-center pr-4 py-1">
                  <div className="text-[#89e5ff] text-[22px] font-extrabold pr-1">
                    0
                  </div>
                  <div className="text-[#89e5ff] text-[14px] font-lg">원</div>
                </div>
              </div>
              {/* 결제내역 */}
              <div className="payment_box w-[187px] my-0 mx-auto bg-[#2d1f19] p-[2px] border border-[#474747] rounded-[4px]">
                <div className="h-[32px] leading-[32px] tracking-[-1px] bg-[#f0ebd2] text-[15px] font-bold text-center">
                  결제내역
                </div>
                <div className="flex justify-between px-2 h-[32px] leading-[32px] tracking-[-1px] bg-[#fff] text-[13px]">
                  <div>{selectedPayment && selectedPaymentMethod}</div>
                  <div>{totalAmount.toLocaleString()}원</div>
                </div>
                <div className="h-[32px] leading-[32px] border-t border-[#474747] tracking-[-1px] bg-[#fff] text-[15px] font-bold text-center">
                  남은 결제금액
                </div>
                <div className="flex justify-end items-center pr-4 py-1 text-[#ffe56b]">
                  <div className=" text-[22px] font-extrabold pr-1">
                    {totalAmount.toLocaleString()}
                  </div>
                  <div className=" text-[14px] font-lg">원</div>
                </div>
              </div>
            </div>
            <div className="tps-footer mt-4">
              {/* OK캐쉬백 */}
              <div className="border-b pb-1 border-[#999]">
                <span className="text-red-500 text-[14px] font-bold tracking-[-1px] mr-1">
                  OK캐쉬백
                </span>
                <span className="text-[#666] text-[12px] tracking-[-1px]">
                  10포인트부터 티켓 전액 결제가능!
                </span>
              </div>
              {/* 현대카드 */}
              <div className="border-b pb-1 border-[#999]">
                <span className="text-[#333] text-[14px] font-bold tracking-[-1px] mr-1">
                  현대카드
                </span>
                <span className="text-[#666] text-[12px] tracking-[-1px]">
                  M포인트 사용하고 즉시 할인받자
                </span>
              </div>
              {/* 우리WON꿀머니 */}
              <div className="pb-1 border-[#999]">
                <span className="text-blue-800 text-[14px] font-bold tracking-[-1px] mr-1">
                  우리WON꿀머니
                </span>
                <span className="text-[#666] text-[12px] tracking-[-1px]">
                  현금처럼 꿀머니 사용가능!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BookingInfo
        selectedMovie={selectedMovie}
        selectedDate={selectedDate}
        selectedTheater={selectedTheater}
        selectedTime={selectedTime}
        selectedSeats={selectedSeats}
      />

      <FixedBtn />
    </div>
  );
}
