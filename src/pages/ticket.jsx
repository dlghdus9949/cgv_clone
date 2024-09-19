import { useEffect, useState } from "react";
import axios from "axios";
import "./ticket.css";

export default function Ticket() {
  const [movies, setMovies] = useState([]); // 영화 목록을 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 상태 관리
  const [activeSort, setActiveSort] = useState("예매율순"); // 정렬 방식 상태 관리

  // api 불러오기
  useEffect(() => {
    // API 호출
    axios
      .get("http://localhost:8080/movies/latest")
      .then((response) => {
        setMovies(response.data); // 영화 데이터를 상태에 저장
        setLoading(false); // 로딩 완료
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
        setError("영화를 불러오는데 문제가 발생했습니다."); // 에러 처리
        setLoading(false); // 로딩 완료
      });
  }, []);

  const handleSortClick = (sortType) => {
    setActiveSort(sortType);
  };

  return (
    <div className="h-[100vh]">
      <div className="container my-0 mx-auto w-[996px] z-1">
        <div className="ticket">
          {/* nav */}
          <div className="nav items-center space-x-2">
            <div className="mt-[30px] flex justify-end space-x-1">
              <a
                href="#"
                className="border-[1px] border-black font-bold rounded-lg h-[30px] flex justify-center items-center px-2 bg-[#F2F0E4]"
              >
                <span className="text-[#333] text-[13px]">ENGLISH</span>
              </a>
              <a
                href="#"
                className="border-[1px] border-black font-bold rounded-lg h-[30px] flex justify-center items-center px-2 bg-[#F2F0E4]"
              >
                <span>상영시간표</span>
              </a>
              <a
                href="#"
                className="border-[1px] border-black font-bold rounded-lg h-[30px] flex justify-center items-center px-2 bg-[#F2F0E4]"
              >
                <span>예매 다시하기</span>
              </a>
            </div>
          </div>

          {/* main */}
          <div className="flex justify-center bg-[#F2F0E4] mt-[20px]">
            {/* 영화 */}
            <div className="section1 w-[285px] border-2">
              <div className="head bg-[#333]  flex justify-center">
                <h3 className="text-[#fff] font-bold">영화</h3>
              </div>
              <div className="body">
                <div className="movie_select mt-[5px]">
                  {/* 전체, 아트하우스, 특별관 */}
                  <div className="tab flex justify-center">
                    <div className="">
                      <section className="relative flex mt-[5px]">
                        <a
                          href="#"
                          className="w-[58px] text-[12px] text-center"
                        >
                          전체
                        </a>
                        <select
                          name=""
                          id=""
                          className="relative max-w-[90px] text-[12px] overflow bg-[#F2F0E4] text-center"
                        >
                          <option value="#" className="hidden border ">
                            아트하우스
                          </option>
                          <option value="">전체</option>
                          <option value="">최신작</option>
                          <option value="">시네마톡</option>
                          <option value="">STAGE</option>
                          <option value="">
                            가을밤 날아온 어쿠스틱 콘서트
                          </option>
                          <option value="">프리미어 DAY</option>
                          <option value="">라이브러리톡</option>
                          <option value="">PRIVATE BOX, 싱어롱</option>
                          <option value="">경기인디시네마 PICK</option>
                        </select>
                        <select
                          name=""
                          id=""
                          className="relative w-[83px] text-[12px] bg-[#F2F0E4] text-center"
                        >
                          <option value="#" className="hidden border">
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
                  {/* 예매율순, 가나다순 */}
                  <div className="sort mx-[30px] mt-[5px] border-b-[3px] border-[#999] pb-[2px]">
                    <a
                      href="#"
                      onClick={() => handleSortClick("예매율순")}
                      className={`sort-link text-[#333] text-[12px] pr-[5px] pb-[8px] ${
                        activeSort === "예매율순" ? "active" : ""
                      }`}
                    >
                      예매율순
                    </a>
                    <a
                      href="#"
                      onClick={() => handleSortClick("가나다순")}
                      className={`sort-link text-[#333] text-[12px] pr-[5px] pb-[8px] ${
                        activeSort === "가나다순" ? "active" : ""
                      }`}
                    >
                      가나다순
                    </a>
                  </div>

                  <div className="movie_list">
                    {loading ? (
                      <p>영화 데이터를 불러오는 중...</p>
                    ) : error ? (
                      <p>{error}</p>
                    ) : (
                      movies.map((movie) => (
                        <div key={movie.id} className="movie-item">
                          {movie.title}
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* 극장 */}
            <div className="section2 w-[265px] border-y-2">
              <div className="head bg-[#333]  flex justify-center">
                <h3 className="text-[#fff] font-bold">극장</h3>
              </div>
              {/* 전체 아트하우스 특별관 */}
              <div className="flex justify-center mt-[5px]">
                <div className="">
                  <section className="relative flex mt-[5px] space-x-4">
                    <a href="#" className="w-[58px] text-[12px] text-center">
                      전체
                    </a>
                    <a href="#" className="w-[58px] text-[12px] text-center">
                      아트하우스
                    </a>
                    <a href="#" className="w-[58px] text-[12px] text-center">
                      특별관
                    </a>
                  </section>
                </div>
              </div>
            </div>
            {/* 날짜 */}
            <div className="section3 w-[100px] border-2">
              <div className="head bg-[#333]  flex justify-center">
                <h3 className="text-[#fff] font-bold">날짜</h3>
              </div>
            </div>
            {/* 시간 */}
            <div className="section4 w-[346px] border-y-2 border-r-2">
              <div className="head bg-[#333]  flex justify-center">
                <h3 className="text-[#fff] font-bold">시간</h3>
              </div>
            </div>
          </div>
        </div>
        {/* wing banner */}
        {/* <div className="ticket_banner absolut w-[100%] left-0 top-0 overflow-hidden">
          <div className="relative w-[996px] h-[100%] my-0 mx-auto">
            <div className="w-[160px] h-[300px] bg-none absolute -left-[164px]">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/image/CGV_BUGS_2.png`}
                  alt=""
                />
              </a>
            </div>
            <div className="w-[160px] h-[300px] bg-none absolute left-[1000px]">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/image/CGV_BUGS_2.png`}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div> */}
        <div className="ticket_banner absolut w-[100%] left-0 top-0">
          <div className="relative w-[996px] h-[100%] my-0 mx-auto">
            <div className="w-[160px] h-[300px] bg-none absolute -left-[185px]">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/image/CGV_BUGS_2.png`}
                  alt=""
                />
              </a>
            </div>
            <div className="w-[160px] h-[300px] absolute left-[1025px]">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/image/CGV_BUGS_2.png`}
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
