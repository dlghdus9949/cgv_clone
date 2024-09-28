import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./bookingMovie.css";

export default function BookingMovie() {
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
    <div className="border-2">
      {/* 영화 */}
      <div className="section1 w-[285px]">
        <div className="head bg-[#333] flex justify-center">
          <h3 className="text-[#fff] font-bold">영화</h3>
        </div>
        <div className="body mt-[12px]">
          <div className="movie_select mt-[5px]">
            {/* 전체, 아트하우스, 특별관 */}
            <section className="relative flex mt-[5px] h-[30px] flex justify-center">
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
            {/* 예매율순, 가나다순 */}
            <div className="sort mx-[25px] mt-[5px] border-b-[3px] border-[#999] pb-[2px]">
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
    </div>
  );
}
