import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Login() {
  const [selectedTab, setSelectedTab] = useState("login");

  // 탭 클릭 시 선택된 탭을 업데이트하는 함수
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <div className="w-[100%] relative z-10">
        <div className="pb-[50px] w-[980px] my-0 mx-auto">
          <div className="loginWrap p-[30px] ">
            {/* 로그인 */}
            <div>
              <div className="border-b-2 border-[#898987] w-[541px]">
                {/* 로그인, 비회원예매, 비회원예매확인 */}
                <ul className="flex tab_menu clear-both space-x-[2px] ">
                  <li
                    className={`flex justify-center w-[100px] h-[37px] rounded-t-md ${
                      selectedTab === "login"
                        ? "bg-[#fb4357] text-white font-black"
                        : "bg-[#898987] text-[#fdfcf0]"
                    }`}
                  >
                    <a
                      href="#"
                      className="flex items-center text-[13px] text-center"
                      onClick={() => handleTabClick("login")}
                    >
                      로그인
                    </a>
                  </li>
                  <li
                    className={`flex justify-center w-[100px] h-[37px] rounded-t-md ${
                      selectedTab === "guestReservation"
                        ? "bg-[#fb4357] text-white font-black"
                        : "bg-[#898987] text-[#fdfcf0]"
                    }`}
                  >
                    <a
                      href="#"
                      className="flex items-center text-[13px] text-center"
                      onClick={() => handleTabClick("guestReservation")}
                    >
                      비회원 예매
                    </a>
                  </li>
                  <li
                    className={`flex justify-center w-[100px] h-[37px] rounded-t-md ${
                      selectedTab === "guestCheck"
                        ? "bg-[#fb4357] text-white font-black"
                        : "bg-[#898987] text-[#fdfcf0]"
                    }`}
                  >
                    <a
                      href="#"
                      className="flex items-center text-[13px] text-center"
                      onClick={() => handleTabClick("guestCheck")}
                    >
                      비회원 예매확인
                    </a>
                  </li>
                </ul>
              </div>
              {/* 조건부 렌더링 */}
              <div className="">
                {/* 로그인 탭 */}
                {selectedTab === "login" && (
                  <div className="flex flex-col justify-between">
                    <div className="flex justify-between">
                      <form className="flex justify-center border-b-[2px] border-[#898987] w-[541px] py-[30px]">
                        <fieldset>
                          <p>
                            아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해
                            주세요.
                          </p>
                          <div className="flex flex-col items-center space-y-1 mt-4">
                            <input
                              type="text"
                              title="id"
                              className="border-[2px] border-[#b5b5b5] w-[264px] h-[35px] pl-[40px] pr-[5px]"
                            />
                            <input
                              type="password"
                              title="password"
                              className="border-[2px] border-[#b5b5b5] w-[264px] h-[35px] pl-[40px] pr-[5px]"
                            />
                            <button className="border-[2px] border-[#fff] w-[264px] h-[42px] mb-[10px] bg-[#fb4357] text-[#fff] font-bold">
                              로그인
                            </button>
                          </div>
                          <div className="flex justify-center mt-1">
                            <div className="flex justify-between w-[264px] text-[13px]">
                              <div>
                                <input type="checkbox" className="mr-1" />
                                <label>아이디 저장</label>
                              </div>
                              <div className="flex">
                                <div className="mr-1 underline">
                                  아이디 찾기 {">"}
                                </div>
                                <div className="underline">
                                  비밀번호 찾기 {">"}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex justify-center mt-1">
                            <img
                              src={`${process.env.PUBLIC_URL}/image/btn_loginNaver.jpg`}
                              alt="네이버로그인"
                            />
                          </div>
                        </fieldset>
                      </form>
                      {/* 휴대폰으로 모든 사이트 로그인 */}
                      <div>
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/image/phoneLogin.png`}
                            alt="휴대폰으로 모든 사이트 로그인"
                          />
                        </a>
                      </div>
                    </div>
                    {/* CJ ONE 회원이 아니신가요? */}
                    <div className="flex justify-center mt-32">
                      <div className="border w-[920px] p-[20px]">
                        <span className="font-semibold mr-2">
                          CJ ONE 회원이 아니신가요?
                        </span>
                        <span>회원가입 하시고 다양한 혜택을 누리세요!</span>
                        <button className="border-2 border-red-500 px-2 py-1 text-[14px] ml-6 text-red-500 font-bold">
                          CJ ONE 회원가입하기
                        </button>
                        <button className="border-2 border-black px-2 py-1 text-[14px] ml-2 font-bold">
                          CJ ONE 멤버십이란?
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {/* 비회원 예매 탭 */}
                {selectedTab === "guestReservation" && (
                  <div>
                    <div className="flex pb-[30px] justify-between items-center">
                      {/* STEP 1 */}
                      <div className="flex flex-col justify-center w-[541px] border-b-2 border-[#898987] h-[300px]">
                        <h3 className="m-0 text-left leading-5 text-[#222] font-bold">
                          <strong className="text-[#fb4357]">STEP 1</strong>{" "}
                          개인정보 수집 및 동의
                        </h3>
                        <p className="my-[10px] text-[13px]">
                          비회원 예매 고객께서는 먼저 개인정보 수집 및 이용 동의
                          정책에 동의해 주셔야 합니다.
                        </p>
                        {/* table */}
                        <div>
                          <table className="w-[100%] border-y">
                            <colgroup>
                              <col className="w-[17%]" />
                              <col className="w-[37%]" />
                              <col className="w-[25%]" />
                              <col className="w-[16%]" />
                            </colgroup>
                            <thead>
                              <tr className="text-[13px] bg-[#e2e2e0]">
                                <th scope="col">항목</th>
                                <th scope="col">이용목적</th>
                                <th scope="col">보유기간</th>
                                <th scope="col">동의여부</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="text-[13px] ">
                                <th className="p-2 border-r font-medium">
                                  법정생년월일, 휴대폰번호, <br />
                                  비밀번호
                                </th>
                                <td className="p-2 border-r">
                                  <ul>
                                    <li>· 비회원 예매서비스 제공</li>
                                    <li>
                                      · 이용자식별, 요금정산, 추심, 신규서비스
                                      개발, 접속빈도 파악 등
                                    </li>
                                  </ul>
                                </td>
                                <td className="p-2 border-r">
                                  수집일로부터 5년
                                </td>
                                <td className="p-2 border-r flex flex-col text-center pt-4">
                                  <span>
                                    <input type="radio" />
                                    <label>동의함</label>
                                  </span>
                                  <span>
                                    <input type="radio" />
                                    <label>동의 안함</label>
                                  </span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="mt-4">
                            <p className="text-[13px]">
                              ※ CGV 비회원 예매서비스 제공을 위해 필요한
                              최소한의 개인정보이므로 입력(수집)에 동의하시지
                              않을 경우 서비스를 이용하실 수 없습니다.
                            </p>
                            <NavLink
                              to={"#"}
                              className="border-2 border-[#fb4357] text-[#fb4357] px-[5px] float-right flex"
                            >
                              <span className="text-[12px] font-bold">
                                개인정보처리(취급)방침전문보기
                              </span>
                            </NavLink>
                          </div>
                        </div>
                      </div>
                      {/* 휴대폰으로 모든 사이트 로그인 */}
                      <div>
                        <a href="#">
                          <img
                            src={`${process.env.PUBLIC_URL}/image/phoneLogin.png`}
                            alt="휴대폰으로 모든 사이트 로그인"
                          />
                        </a>
                      </div>
                    </div>
                    {/* STEP 2 */}
                    <div className="mt-12">
                      <h3 className="m-0 text-left leading-5 text-[#222] font-bold">
                        <strong className="text-[#fb4357]">STEP 2</strong>{" "}
                        개인정보(휴대폰번호, 법정생년월일, 비밀번호) 입력
                      </h3>
                      <p className="my-[10px] text-[13px]">
                        개인정보를 잘못 입력하시면 예매내역 확인/취소 및 티켓
                        발권이 어려울 수 있으니, 입력하신 정보를 다시 한번
                        확인해주시기 바랍니다.
                      </p>
                      <div className="border">
                        <h4 className="h-[45px] pl-[30px] bg-[#e2e2e0] text-[15px] text-[#222222] leading-[45px] font-semibold">
                          개인정보 입력
                        </h4>
                        <div className="pt-[15px] pb-[30px] px-[30px]">
                          <p className="text-[#222222] text-[14px] leading-7 border-b-2 border-[#999999]">
                            모든 항목은 필수 입력사항입니다.
                          </p>
                          <form>
                            <fieldset>
                              <table className="w-[100%]">
                                <tbody>
                                  <tr className="border-b">
                                    <th className="py-[15px] w-[100px] text-left text-[13px] font-medium">
                                      <label>법정생년월일(8자)</label>
                                    </th>
                                    <td className="pl-4 py-[15px]">
                                      <input
                                        type="text"
                                        className="border w-[120px] border-[#b4b3aa] h-[29px]"
                                        maxLength={8}
                                        minLength={8}
                                      />
                                    </td>
                                  </tr>
                                  <tr className="border-dashed border-b">
                                    <th className="py-[15px] w-[100px] text-left text-[13px] font-medium">
                                      <label>휴대폰번호</label>
                                    </th>
                                    <td className="pl-4 py-[15px]">
                                      <select className="border py-[3px] px-[5px] border-[#b4b3aa]">
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                        <option value="018">018</option>
                                        <option value="019">019</option>
                                      </select>{" "}
                                      -{" "}
                                      <input
                                        type="text"
                                        className="border w-[85px] border-[#b4b3aa] h-[29px]"
                                      />{" "}
                                      -{" "}
                                      <input
                                        type="text"
                                        className="border w-[85px] border-[#b4b3aa] h-[29px]"
                                      />
                                      <NavLink
                                        to={"#"}
                                        className="border-2 border-[#fb4357] text-[#fb4357] px-[5px] py-[2px] ml-2"
                                      >
                                        <span className="text-[12px] font-bold">
                                          인증번호받기
                                        </span>
                                      </NavLink>
                                    </td>
                                  </tr>
                                  <tr className="border-b">
                                    <th className="py-[15px] w-[100px] text-left text-[13px] font-medium">
                                      <label>
                                        인증번호
                                        <br />
                                        (4자리)
                                      </label>
                                    </th>
                                    <td className="pl-4 py-[15px]">
                                      <input
                                        type="text"
                                        className="border w-[100px] border-[#b4b3aa] h-[29px]"
                                        maxLength={4}
                                      />
                                      <NavLink
                                        to={"#"}
                                        className="border-2 border-[#fb4357] text-[#fb4357] px-[5px] py-[2px] ml-2 text-center"
                                      >
                                        <span className="text-[12px] font-bold">
                                          인증번호받기
                                        </span>
                                      </NavLink>
                                    </td>
                                  </tr>
                                  <tr className="border-b">
                                    <th className="py-[15px] w-[100px] text-left text-[13px] font-medium">
                                      <label>비밀번호(4자리)</label>
                                    </th>
                                    <td className="pl-4 py-[15px]">
                                      <input
                                        type="text"
                                        className="border w-[100px] border-[#b4b3aa] h-[29px]"
                                        maxLength={4}
                                      />
                                    </td>
                                  </tr>
                                  <tr className="border-b">
                                    <th className="py-[15px] w-[100px] text-left text-[13px] font-medium">
                                      <label>비밀번호 확인</label>
                                    </th>
                                    <td className="pl-4 py-[15px]">
                                      <input
                                        type="text"
                                        className="border w-[100px] border-[#b4b3aa] h-[29px]"
                                        maxLength={4}
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="mt-[25px] text-center">
                                <button className="bg-[#fb4357] text-[#fff] text-[14px] leading-[21px] px-6 py-1">
                                  <span className="font-bold">
                                    비회원 예매하기
                                  </span>
                                </button>
                              </div>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* 비회원 예매 시 참고하세요! */}
                    <div className="border mt-12 p-[30px] border-2 border-[#d5d4cd] leading-relaxed	bg-[#f9f7ec] flex flex-row">
                      <div className="border-r-2 border-[#c5c4bf] pr-8">
                        <p className="font-medium	 text-[#222222] text-[15px]">
                          비회원
                          <br />
                          예매 시<br />
                          참고하세요!
                        </p>
                      </div>
                      <div className="font-normal text-[13px] ml-12">
                        <p>
                          1. 위 정보수집 및 이용에 동의하지 않을 경우, 비회원
                          예매 서비스를 이용하실 수 없습니다.
                        </p>
                        <p>
                          2. 비회원 예매 시 청소년 관람불가 영화는 예매가
                          제한됩니다.
                        </p>
                        <p>
                          3. 만 14세 미만 고객은 비회원으로 예매하실 수
                          없습니다.
                        </p>
                        <p>
                          4. 비회원 예매 결제수단은 신용카드만 가능하며 모든
                          제휴상품권, 쿠폰, 영화예매권 등은 회원 예매 서비스
                          이용 시 사용 가능합니다.
                        </p>
                        <p>
                          5. ARS에서는 취소가 불가능하며, 홈페이지/모바일을
                          이용하여 취소 처리하실 수 있습니다.
                        </p>
                        <p>
                          6. 비회원 예매 및 예매 확인/취소 메뉴만 이용
                          가능합니다. 그 외 서비스는 회원 가입 후 이용해
                          주십시오.
                        </p>
                        <p>
                          7. 문의 사항은 CGV고객센터(1544-1122)로 문의해 주시기
                          바랍니다. (평일 9:00~18:00)
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {/* 비회원 예매 확인 탭 */}
                {selectedTab === "guestCheck" && (
                  <div>
                    <h3 className="mt-8 mb-2 font-bold ">비회원 예매 확인</h3>
                    <span className="text-[14px]">
                      비회원으로 예매하신 고객님은 개인정보(법정생년월일, 휴대폰
                      번호, 비밀번호(4자리))를 입력해 주세요.
                    </span>
                    <div className="flex mt-4">
                      {/* 비회원 예매 확인 */}
                      <div className="border w-[50%] ">
                        <h4 className="h-[45px] pl-[30px] bg-[#e2e2e0] flex items-center font-semibold text-[15px]">
                          비회원 예매확인
                        </h4>
                        <div className="pt-[40px] px-[30px] pb-[30px] h-[440px]">
                          <p className=" border-b-2 pb-2">
                            모든 항목은 필수 입력사항입니다.
                          </p>
                          <form>
                            <fieldset>
                              <table className="">
                                <tbody>
                                  <tr className="border-b">
                                    <th className="py-[15px] w-[100px] text-left text-[13px] font-medium">
                                      <label>법정생년월일(8자)</label>
                                    </th>
                                    <td className="pl-4 py-[15px]">
                                      <input
                                        type="text"
                                        className="border w-[120px] border-[#b4b3aa] h-[29px]"
                                        maxLength={8}
                                        minLength={8}
                                      />
                                    </td>
                                  </tr>
                                  <tr className=" border-b">
                                    <th className="py-[15px] w-[100px] text-left text-[13px] font-medium">
                                      <label>휴대폰번호</label>
                                    </th>
                                    <td className="pl-4 py-[15px]">
                                      <select className="border py-[3px] px-[5px] border-[#b4b3aa]">
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                        <option value="018">018</option>
                                        <option value="019">019</option>
                                      </select>{" "}
                                      -{" "}
                                      <input
                                        type="text"
                                        className="border w-[85px] border-[#b4b3aa] h-[29px]"
                                      />{" "}
                                      -{" "}
                                      <input
                                        type="text"
                                        className="border w-[85px] border-[#b4b3aa] h-[29px]"
                                      />
                                    </td>
                                  </tr>

                                  <tr className="border-b">
                                    <th className="py-[15px] w-[100px] text-left text-[13px] font-medium">
                                      <label>비밀번호(4자리)</label>
                                    </th>
                                    <td className="pl-4 py-[15px]">
                                      <input
                                        type="text"
                                        className="border w-[120px] border-[#b4b3aa] h-[29px]"
                                        maxLength={4}
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="mt-[25px] text-center">
                                <button className="bg-[#fb4357] text-[#fff] text-[14px] leading-[21px] px-6 py-1">
                                  <span className="font-bold">
                                    비회원 예매확인
                                  </span>
                                </button>
                              </div>
                            </fieldset>
                          </form>
                        </div>
                      </div>
                      {/* 비회원 예매 비밀번호 찾기 */}
                      <div className="w-[50%] border">
                        <h4 className="h-[45px] pl-[30px] bg-[#e2e2e0] flex items-center font-semibold text-[15px]">
                          비회원 예매 비밀번호 찾기
                        </h4>
                        <div className="pt-[40px] px-[30px] pb-[30px] h-[440px]">
                          <p className="text-[#222] text-[14px] border-b-2 border-[#888] pb-2">
                            비회원 예매 시, 입력한 휴대폰번호로 SMS인증을 하면
                            비회원 예매 비밀번호를 찾으실수 있습니다.
                          </p>
                          <button className="mt-8">
                            <span className="font-bold text-[12px] border-2 border-[#222] px-4 py-1">
                              휴대폰 SMS인증으로 찾기
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* 비회원 예매 시 참고하세요! */}
                    <div className="border mt-12 p-[30px] border-2 border-[#d5d4cd] leading-relaxed	bg-[#f9f7ec] flex flex-row">
                      <div className="border-r-2 border-[#c5c4bf] pr-8">
                        <p className="font-medium	 text-[#222222] text-[15px]">
                          비회원
                          <br />
                          예매 시<br />
                          참고하세요!
                        </p>
                      </div>
                      <div className="font-normal text-[13px] ml-12">
                        <p>
                          1. 위 정보수집 및 이용에 동의하지 않을 경우, 비회원
                          예매 서비스를 이용하실 수 없습니다.
                        </p>
                        <p>
                          2. 비회원 예매 시 청소년 관람불가 영화는 예매가
                          제한됩니다.
                        </p>
                        <p>
                          3. 만 14세 미만 고객은 비회원으로 예매하실 수
                          없습니다.
                        </p>
                        <p>
                          4. 비회원 예매 결제수단은 신용카드만 가능하며 모든
                          제휴상품권, 쿠폰, 영화예매권 등은 회원 예매 서비스
                          이용 시 사용 가능합니다.
                        </p>
                        <p>
                          5. ARS에서는 취소가 불가능하며, 홈페이지/모바일을
                          이용하여 취소 처리하실 수 있습니다.
                        </p>
                        <p>
                          6. 비회원 예매 및 예매 확인/취소 메뉴만 이용
                          가능합니다. 그 외 서비스는 회원 가입 후 이용해
                          주십시오.
                        </p>
                        <p>
                          7. 문의 사항은 CGV고객센터(1544-1122)로 문의해 주시기
                          바랍니다. (평일 9:00~18:00)
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
