import React, { useState } from "react";

export default function BookingTheater({ onTheaterSelect }) {
  // 지역과 세부극장 데이터를 관리하는 상태
  const [selectedArea, setSelectedArea] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);

  // 세부극장 데이터 (예시)
  const regions = [
    {
      name: "서울",
      theaters: [
        "강남",
        "강변",
        "건대입구",
        "구로",
        "대학로",
        "동대문",
        "등촌",
        "명동",
        "명동역 씨네라이브러리",
        "미아",
        "방학",
        "불광",
        "상봉",
        "성신여대입구",
        "송파",
        "수유",
        "신촌아트레온",
        "씨네드쉐프 압구정",
        "씨네드쉐프 용산아이파크",
        "압구정",
        "여의도",
        "연남",
        "영등포",
        "왕십리",
        "용산아이파크몰",
        "중계",
        "천호",
        "청담씨네시티",
        "피카디리1958",
        "하계",
        "홍대",
      ],
    },
    {
      name: "경기",
      theaters: [
        "경기광주",
        "고양백석",
        "고양행신",
        "광교",
        "광교상현",
        "광명역",
        "구리",
        "구리갈매",
        "기흥",
        "김포",
        "김포운양",
        "김포한강",
        "남양주화도",
        "다산",
        "동두천",
        "동백",
        "동수원",
        "동탄",
        "동탄그랑파사쥬",
        "동탄역",
        "동탄호수공원",
        "배곧",
        "범계",
        "부천",
        "부천역",
        "부천옥길",
        "북수원",
        "산본",
        "서현",
        "성남모란",
        "소풍",
        "스타필드시티위례",
        "신세계경기",
        "안산",
        "안성",
        "야탑",
        "양주옥정",
        "역곡",
        "오리",
        "오산",
        "오산중앙",
        "용인",
        "의정부",
        "의정부태흥",
        "이천",
        "일산",
        "정왕",
        "파주문산",
        "파주야당",
        "판교",
        "평촌",
        "평택",
        "평택고덕",
        "평택소사",
        "포천",
        "하남미사",
        "화성봉담",
        "화정",
        "Drive In 용인 크랙사이드",
      ],
    },
    {
      name: "인천",
      theaters: [
        "계양",
        "부평",
        "송도타임스페이스",
        "연수역",
        "인천",
        "인천가정",
        "인천도화",
        "인천시민공원",
        "인천연수",
        "인천학익",
        "청라",
      ],
    },
    {
      name: "강원",
      theaters: ["강릉", "기린", "원통", "인제", "춘천"],
    },
    {
      name: "대전/충천",
      theaters: [
        "논산",
        "당진",
        "대전",
        "대전가수원",
        "대전가오",
        "대전탄방",
        "대전터미널",
        "서산",
        "세종",
        "아산",
        "유성노은",
        "천안",
        "천안시청",
        "천안터미널",
        " 천안펜타포트",
        "청주율량",
        "청주지웰시티",
        "청주터미널",
        "청주(서문)",
        "충북혁신",
        "충주교현",
        "홍성",
      ],
    },
    {
      name: "대구",
      theaters: [
        "대구",
        "대구수성",
        "대구스타디움",
        "대구아카데미",
        "대구연경",
        "대구월성",
        "대구죽전",
        "대구한일",
        "대구현대",
      ],
    },
    {
      name: "부산/울산",
      theaters: [
        "대연",
        "동래",
        "부산명지",
        "서면",
        "서면삼정타워",
        "서면상상마당",
        "센텀시티",
        "씨네드쉐프 센텀시티",
        "아시아드",
        "울산동구",
        "울산삼산",
        "울산성남",
        "울산신천",
        "울산진장",
        "정관",
        "하단아트몰링",
        "해운대",
        "화명",
        "Drive In 영도",
      ],
    },
    {
      name: "경상",
      theaters: [
        "거제",
        "경산",
        "고성",
        "구미",
        "김천율곡",
        "김해",
        "김해율하",
        "김해장유",
        "마산",
        "북포항",
        "안동",
        "양산삼호",
        "진주혁신",
        "창원",
        "창원더시티",
        "창원상남",
      ],
    },
    {
      name: "광주/전라/제주",
      theaters: [
        "광양",
        "광양 엘에프스퀘어",
        "광주금남로",
        "광주상무",
        "광주용봉",
        "광주첨단",
        "광주충장로",
        "광주터미널",
        "광주하남",
        "나주",
        "목포",
        "목포평화광장",
        "서진주",
        "순천",
        "순천신대",
        "여수웅천",
        "익산",
        "전주고사",
        "전주에코시티",
        "전주효자",
        "정읍",
        "제주",
        "제주노형",
      ],
    },
  ];

  // 지역 클릭 시 상태 업데이트
  const handleAreaClick = (area) => {
    setSelectedArea(area); // 선택한 지역을 상태에 저장
    setSelectedTheater(null); // 세부극장 선택 초기화
  };

  const handleTheaterClick = (theater) => {
    setSelectedTheater(theater);
    if (onTheaterSelect) {
      onTheaterSelect(theater); // 선택된 극장을 부모 컴포넌트로 전달
    }
  };

  return (
    <div className="border-y-2">
      {/* 극장 */}
      <div className="section2 w-[265px]">
        <div className="head bg-[#333] flex justify-center">
          <h3 className="text-[#fff] font-bold">극장</h3>
        </div>

        {/* 전체, 아트하우스, 특별관 */}
        <div className="tab flex justify-center mt-2">
          <div className="">
            <section className="relative flex mt-[5px] h-[30px]">
              <a
                href="#"
                className="w-[58px] text-[12px] text-center items-center flex justify-center border-x border-t border-slate-950	"
              >
                전체
              </a>
              <select
                name=""
                id=""
                className="relative max-w-[90px] text-[12px] overflow bg-[#F2F0E4] text-center border border-slate-300 border-b-slate-950"
              >
                <option value="#" className="hidden border ">
                  아트하우스
                </option>
                <option value="">전체</option>
                <option value="">최신작</option>
                <option value="">시네마톡</option>
                <option value="">STAGE</option>
                <option value="">가을밤 날아온 어쿠스틱 콘서트</option>
                <option value="">프리미어 DAY</option>
                <option value="">라이브러리톡</option>
                <option value="">PRIVATE BOX, 싱어롱</option>
                <option value="">경기인디시네마 PICK</option>
              </select>
              <select
                name=""
                id=""
                className="relative w-[83px] text-[12px] bg-[#F2F0E4] text-center border border-slate-300 border-b-slate-950"
              >
                <option value="#" className="hidden">
                  특별관
                </option>
                <option value="">전체</option>
                <option value="">IMAX</option>
                <option value="">4DX</option>
                <option value="">SCREENX</option>
                <option value="">SUITE CINEMA</option>
                <option value="">CINE de CHEF</option>
                <option value="">TEMPUR CINEMA</option>
                <option value="">GOLD CLASS</option>
                <option value="">CINE&FORET</option>
                <option value="">CINE&LIVINGROOM</option>
                <option value="">CINE KIDS</option>
                <option value="">DOLBY ATMOS</option>
                <option value="">PREMIUM</option>
                <option value="">STARIUM</option>
                <option value="">SPHERX</option>
                <option value="">BRAND</option>
              </select>
            </section>
          </div>
        </div>

        {/* 극장 리스트 */}
        <div className="theater-list h-[513px] relative float-left w-[100%] mt-4 pl-2">
          {/* 지역 리스트 */}
          <div className="theater-area-list float-left w-[110px] overflow-hidden">
            <ul className="pl-2">
              {regions.map((region) => (
                <li
                  key={region.name}
                  className="overflow-hidden float-left w-[100%] h-[31px] leading-[31px] mb-[1px]"
                >
                  <a
                    href="#"
                    onClick={() => handleAreaClick(region.name)}
                    className={`block text-[#333] text-[12px] -tracking-[.1em] text-right text-ellipsis pl-[6px] pr-[8px] bg-[#e6e4d9] cursor-pointer transition-all duration-300 ${
                      selectedArea === region.name ? "bg-[#d3d3d3]" : ""
                    }`}
                  >
                    <span className="name">{region.name}</span>
                    <span className="count">({region.theaters.length})</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 세부극장 리스트 */}
          <div className="block absolute top-0 right-0 w-[145px] h-[510px] overflow-y-auto">
            {selectedArea && (
              <ul className="overflow-x-hidden absolute top-0 right-0 bottom-0 left-0">
                {regions
                  .find((region) => region.name === selectedArea)
                  ?.theaters.map((theater) => (
                    <li
                      key={theater}
                      className="overflow-hidden float-left w-[114px] h-[31px] leading-[31px] mb-[1px]"
                    >
                      <a
                        href="#"
                        className={`block text-[12px] font-bold px-[7px] cursor-pointer transition-all duration-300 ${
                          selectedTheater === theater
                            ? "bg-[#333] text-white"
                            : "text-[#333]"
                        }`}
                        onClick={() => handleTheaterClick(theater)} // 극장 클릭 시 호출
                      >
                        {theater}
                      </a>
                    </li>
                  ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
