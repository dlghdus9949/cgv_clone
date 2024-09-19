import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isSticky, setSticky] = useState(false); // 네브바 고정 상태 관리
  const dropdownRef = useRef(null); // 드롭다운 영역을 감지하기 위한 ref
  const navRef = useRef(null); // 네브바 영역을 감지하기 위한 ref

  // 마우스가 네브바나 드롭다운 외부로 나갔는지 감지하는 이벤트 핸들러
  const handleMouseLeave = (event) => {
    if (
      !event.relatedTarget ||
      !(event.relatedTarget instanceof Node) ||
      ((!dropdownRef.current ||
        !dropdownRef.current.contains(event.relatedTarget)) &&
        (!navRef.current || !navRef.current.contains(event.relatedTarget)))
    ) {
      setDropdownVisible(false);
    }
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      // 스크롤 위치가 100px 이상일 때 네브바를 상단에 고정
      if (window.scrollY > 190) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navRef}
      onMouseLeave={handleMouseLeave}
      className={`z-40 ${
        isSticky
          ? "fixed top-0 left-0 w-full bg-custom-gradient text-white"
          : "relative"
      } transition-colors duration-300`}
    >
      <div
        className={`flex justify-center py-[8px] px-60 border-b-[2px] ${
          isSticky ? "border-red-500" : "border-[#fb4357]"
        }`}
      >
        <div className="flex justify-between w-full items-center">
          {/* 왼쪽 메뉴 */}
          <div className="" onMouseEnter={handleMouseEnter}>
            <ul className="flex flex-row text-xl">
              {isSticky && (
                <img
                  src={`${process.env.PUBLIC_URL}/image/logoWhite.png`} // 이미지 경로 설정
                  alt="icon"
                  className="mr-8 w-[70px]" // 이미지를 "영화" 왼쪽에 추가
                />
              )}
              <li className="pr-[24px] relative group">
                <h2>
                  <a
                    href="/movies"
                    className={`text-[16px] ${
                      isSticky ? "text-white" : "text-[#222]"
                    } font-bold`}
                  >
                    영화
                  </a>
                </h2>
              </li>
              <li className="px-[24px]">
                <h2>
                  <a
                    href="/theaters"
                    className={`text-[16px] ${
                      isSticky ? "text-white" : "text-[#222]"
                    } font-bold`}
                  >
                    극장
                  </a>
                </h2>
              </li>
              <li className="px-[24px]">
                <h2>
                  <a
                    href="/ticket"
                    className={`text-[16px] ${
                      isSticky ? "text-white" : "text-[#fb4357]"
                    } font-extrabold`}
                  >
                    예매
                  </a>
                </h2>
              </li>
              <li className="px-[24px]">
                <h2>
                  <a
                    href="#"
                    className={`text-[16px] ${
                      isSticky ? "text-white" : "text-[#222]"
                    } font-bold`}
                  >
                    스토어
                  </a>
                </h2>
              </li>
              <li className="px-[24px]">
                <h2>
                  <a
                    href="#"
                    className={`text-[16px] ${
                      isSticky ? "text-white" : "text-[#222]"
                    } font-bold`}
                  >
                    이벤트
                  </a>
                </h2>
              </li>
              <li className="px-[24px]">
                <h2>
                  <a
                    href="#"
                    className={`text-[16px] ${
                      isSticky ? "text-white" : "text-[#222]"
                    } font-bold`}
                  >
                    혜택
                  </a>
                </h2>
              </li>
            </ul>
            {isDropdownVisible && (
              <div
                className="absolute left-0 top-full w-[100vw] h-[370px] bg-white border-b-[1px] px-24 z-20 "
                ref={dropdownRef}
              >
                <div className="px-36">
                  {/* 좌우 패딩 넓힘 */}
                  <div className="flex py-8 justify-between">
                    {/* 영화 */}
                    <div className="relative flex flex-col text-[#666] space-y-2 pr-14 after:absolute after:right-0 after:top-0 after:w-[1px] after:h-full after:bg-gray-300">
                      <h3 className="font-bold text-[#222] text-[16px]">
                        영화
                      </h3>
                      <a
                        href="/movies"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        무비차트
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        아트하우스
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        ICECON
                      </a>
                    </div>
                    {/* 극장 */}
                    <div className="relative flex flex-col text-[#666] space-y-2 pr-14 after:absolute after:right-0 after:top-0 after:w-[1px] after:h-full after:bg-gray-300">
                      <h3 className="font-bold text-[#222] text-[16px]">
                        극장
                      </h3>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        CGV 극장
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        특별관
                      </a>
                    </div>
                    {/* 예매 */}
                    <div className="relative flex flex-col text-[#666] space-y-2 pr-14 after:absolute after:right-0 after:top-0 after:w-[1px] after:h-full after:bg-gray-300">
                      <h3 className="font-bold text-[#222] text-[16px]">
                        예매
                      </h3>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        빠른예매
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        상영스케줄
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        English Ticketing
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        English Schedule
                      </a>
                    </div>
                    {/* 스토어 */}
                    <div className="relative flex flex-col text-[#666] space-y-2 pr-14 after:absolute after:right-0 after:top-0 after:w-[1px] after:h-full after:bg-gray-300">
                      <h3 className="font-bold text-[#222] text-[16px]">
                        스토어
                      </h3>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        패키지
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        영화관람권
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        기프트카드
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        콤보
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        팝콘
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        음료
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        스낵
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        플레이존
                      </a>
                    </div>
                    {/* 이벤트 */}
                    <div className="relative flex flex-col text-[#666] space-y-2 pr-14 after:absolute after:right-0 after:top-0 after:w-[1px] after:h-full after:bg-gray-300">
                      <h3 className="font-bold text-[#222] text-[16px]">
                        이벤트
                      </h3>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        SPECIAL
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        영화/예매
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        멤버십/CLUB
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        CGV 극장별
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        제휴할인
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        당첨자 발표
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        종료된 이벤트
                      </a>
                    </div>
                    {/* 혜택 */}
                    <div className="flex flex-col text-[#666] space-y-2">
                      <h3 className="font-bold text-[#222] text-[16px]">
                        혜택
                      </h3>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        CGV 할인정보
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        CLUB 서비스
                      </a>
                      <a
                        href="#"
                        className="font-normal text-[16px] text-[#666]"
                      >
                        VIP 라운지
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 검색 창 */}
          <div className="right">
            <div className="flex relative">
              <div className="before:content-[''] before:absolute before:top-[2px] before:left-0 before:w-[1px] before:h-[20px] before:bg-[#cacaca] after:content-[''] after:absolute after:top-[2px] after:right-0 after:w-[1px] after:h-[20px] after:bg-[#cacaca] flex self-center justify-between">
                <label htmlFor="totalSearch" className="pl-[15px]">
                  <input
                    type="text"
                    name="header_keyword"
                    id="header_keyword"
                    value="코미다 위스키 패밀리"
                    className={`text-[16px] ${
                      isSticky ? "text-white bg-transparent	" : "text-[#222]"
                    } w-[180px]`}
                  />
                </label>
                <button className="pr-[15px]">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/search.png`}
                    alt="search"
                    className="self-center w-[26px]"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
