import React from "react";
import { useAuth } from "../AuthProvider"; // AuthProvider 가져오기
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const { isLoggedIn, logout } = useAuth(); // 로그인 상태와 로그아웃 함수 가져오기
  const navigate = useNavigate(); // navigate 훅 가져오기

  const handleLogout = () => {
    logout(); // 로그아웃 함수 호출
    alert("로그아웃 되었습니다."); // 로그아웃 알림
    navigate("/"); // 메인 화면으로 이동
  };
  return (
    <div>
      {/* 배너 */}
      <div className="banner flex justify-center bg-[#23114F]">
        <Link to="/">
          <img
            src={`${process.env.PUBLIC_URL}/image/banner.jpg`}
            alt="banner"
          />
        </Link>
      </div>

      {/* 헤더 */}
      <div className="flex justify-center pt-[30px] pb-[25px] px-40 border-b-[1px]">
        <div className="w-[86%] flex justify-between">
          <div className="left flex">
            <Link to="/" className="flex items-center">
              <img
                src={`${process.env.PUBLIC_URL}/image/logo.png`}
                alt="logo"
                className="w-[117px] mr-2"
              />
            </Link>
            <h1 className="mt-8 tracking-[0.3em] font-extralight text-base text-[#222] flex items-center">
              DEEP DIVE SPACE
            </h1>
          </div>

          <div className="right">
            <ul className="flex">
              <div className="flex mr-10">
                <Link to="#" className="flex flex-col justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/hyundaicard.png`}
                    alt="현대카드"
                    className="flex items-center w-[140px]"
                  />
                </Link>
              </div>
              {!isLoggedIn ? ( // 로그인 여부에 따라 조건부 렌더링
                <>
                  <li
                    className="flex flex-col text-center mr-[44px] justify-center cursor-pointer"
                    navigate="/login"
                  >
                    <NavLink to="/login" className="flex justify-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/login.png`}
                        alt="로그인"
                        className="w-[36px]"
                      />
                    </NavLink>
                    <div className="text-[13px]">로그인</div>
                  </li>
                  <li className="flex flex-col text-center mr-[36px] justify-center">
                    <Link to="/joinWelcome" className="flex justify-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/join.png`}
                        alt="회원가입"
                        className="w-[36px]"
                      />
                    </Link>
                    <div className="text-[13px]">회원가입</div>
                  </li>
                  <li className="flex flex-col text-center mr-[44px] justify-center">
                    <NavLink to="/my-page" className="flex justify-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/member.png`}
                        alt="마이페이지"
                        className="w-[36px]"
                      />
                    </NavLink>
                    <div className="text-[13px]">MY PAGE</div>
                  </li>
                </>
              ) : (
                // 로그인한 경우
                <>
                  <li className="flex flex-col text-center mr-[44px] justify-center">
                    <button onClick={handleLogout}>
                      <Link to="/login" className="flex justify-center">
                        <img
                          src={`${process.env.PUBLIC_URL}/image/login.png`}
                          alt="로그아웃"
                          className="w-[36px]"
                        />
                      </Link>
                      <div className="text-[13px]">로그아웃</div>
                    </button>
                  </li>
                  <li className="flex flex-col text-center mr-[44px] justify-center">
                    <NavLink to="/my-page" className="flex justify-center">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/member.png`}
                        alt="마이페이지"
                        className="w-[36px]"
                      />
                    </NavLink>
                    <div className="text-[13px]">MY PAGE</div>
                  </li>
                </>
              )}
              <li className="flex flex-col text-center justify-center mr-[40px]">
                <Link to="#" className="flex justify-center">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/customer.png`}
                    alt="고객센터"
                    className="w-[36px]"
                  />
                </Link>
                <div className="text-[13px]">고객센터</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
