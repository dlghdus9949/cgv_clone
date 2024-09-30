import BookingNav from "./bookingNav";
import FixedBtn from "../fixedBtn";
import { useState } from "react";
import "./bookingMovie.css";

export default function BookingDefault() {
  // 각 STEP의 토글 상태를 관리
  const [isStep1Open, setIsStep1Open] = useState(false);
  const [isStep2Open, setIsStep2Open] = useState(false);
  const [isStep3Open, setIsStep3Open] = useState(false);
  const [isStep4Open, setIsStep4Open] = useState(false);

  // STEP 1.
  const [selectedCoupon, setSelectedCoupon] = useState(null); // 선택된 쿠폰 상태
  const handleCouponClick = (coupon) => {
    setSelectedCoupon(coupon); // 클릭한 쿠폰으로 상태 업데이트
  };

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
        </div>
      </div>

      <FixedBtn />
    </div>
  );
}
