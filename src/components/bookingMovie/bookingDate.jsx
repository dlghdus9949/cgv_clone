import React, { useState, useEffect } from "react";

export default function BookingDate({ onDateSelect }) {
  const [datesByMonth, setDatesByMonth] = useState([]);
  const [selectDate, setSelectDate] = useState(null);

  useEffect(() => {
    const today = new Date();
    const oneMonthLater = new Date(today);
    oneMonthLater.setMonth(today.getMonth() + 1);

    const generatedDates = [];
    for (
      let date = new Date(today);
      date <= oneMonthLater;
      date.setDate(date.getDate() + 1)
    ) {
      generatedDates.push(new Date(date));
    }

    // 월별로 그룹화
    const groupedDates = generatedDates.reduce((acc, date) => {
      const year = date.getFullYear();
      const month = date.getMonth(); // 0 (1월) 부터 11 (12월)
      const monthKey = `${year}-${month}`;

      if (!acc[monthKey]) {
        acc[monthKey] = [];
      }
      acc[monthKey].push(date);
      return acc;
    }, {});

    setDatesByMonth(groupedDates);
  }, []);

  // 날짜 클릭 시 상태 업데이트
  const handleDateClick = (date) => {
    console.log("선택된 날짜:", date.toLocaleDateString()); // 추가된 로그

    setSelectDate(date);
    if (onDateSelect) {
      onDateSelect(date); // 여기서 부모 컴포넌트로 전달됨
    }
  };

  return (
    <div className="border-2 w-[150px]">
      {/* 날짜 */}
      <div className="section3 w-[110px]">
        <div className="head bg-[#333] flex justify-center">
          <h3 className="text-[#fff] font-bold">날짜</h3>
        </div>

        {/* body - 날짜 목록 스크롤 가능 */}
        <div className="body max-h-[570px] overflow-y-scroll">
          {Object.keys(datesByMonth).map((monthKey, idx) => {
            const year = monthKey.split("-")[0];
            const month = new Date(year, monthKey.split("-")[1]).toLocaleString(
              "ko-KR",
              { month: "long" }
            );

            return (
              <div
                key={idx}
                className="flex flex-col align-center justify-center items-center mt-4 mb-8 text-[#666666]"
              >
                {/* 년도와 월 표시 */}
                <h3 className="font-bold text-md">{year}</h3>
                <h3 className="font-bold text-2xl">{month}</h3>

                {/* 해당 월의 날짜와 요일 표시 */}
                {datesByMonth[monthKey].map((date, index) => {
                  const dayOfWeek = date.getDay(); // 0 (일요일)부터 6 (토요일)까지 반환
                  const weekday = date.toLocaleDateString("ko-KR", {
                    weekday: "short",
                  }); // 요일 (예: '일', '월', '화')
                  const day = date.getDate(); // 날짜 (예: 21)

                  // 일요일 색상: #ad2727, 토요일 색상: #31597e, 그 외는 기본 색상
                  const textColor =
                    dayOfWeek === 0
                      ? "#ad2727"
                      : dayOfWeek === 6
                      ? "#31597e"
                      : "#000";

                  // 선택된 날짜와 비교하여 스타일 적용
                  const isSelected =
                    selectDate &&
                    selectDate.getFullYear() === date.getFullYear() &&
                    selectDate.getMonth() === date.getMonth() &&
                    selectDate.getDate() === date.getDate();

                  return (
                    <div
                      key={index}
                      className={`date-item flex justify-center py-2 cursor-pointer transition-all duration-300 ${
                        isSelected ? "bg-[#333333] w-[60%] text-[#fff]" : ""
                      }`}
                    >
                      {/* 요일과 날짜를 요일 먼저, 날짜 나중에 표시 */}
                      <span
                        onClick={() => handleDateClick(date)}
                        className={`font-bold ${
                          isSelected ? "text-[#fff]" : ""
                        }`}
                        style={{ color: !isSelected ? textColor : "#fff" }}
                      >
                        {weekday} {day}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
