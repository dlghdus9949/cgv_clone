import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import "./bookingMovie.css";
import { useContext } from "react";
import { BookingContext } from "./bookingContext"; // BookingContext 불러오기
import { Link } from "react-router-dom";
export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function BookingMovie({ onMovieSelect }) {
  const [movies, setMovies] = useState([]); // 영화 목록을 저장할 상태
  const [loading, setLoading] = useState(true); // 로딩 상태 관리
  const [error, setError] = useState(null); // 에러 상태 관리
  const [activeSort, setActiveSort] = useState("예매율순"); // 정렬 방식 상태 관리
  const [selectedMovieId, setSelectedMovieId] = useState(null); // 선택된 영화 ID 상태

  const navigate = useNavigate(); // 페이지 이동을 위한 navigate

  const { setSelectedMovie, setPosterPath } = useContext(BookingContext);

  // API 불러오기
  useEffect(() => {
    const fetchMovies = async () => {
      const options = {
        method: "GET",
        url: "https://api.themoviedb.org/3/movie/popular",
        params: { language: "ko-kr", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjU5MmMzNGIyMDU5NTVjZDM2M2YzMGRiYzM5YjljMiIsIm5iZiI6MTcyMDY3NDkyMy42NjIwNzUsInN1YiI6IjY2OGY2OGY3MmI3NWQ5MDIwZWU2ZWExOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK5NfoFsZr7QM0m1mYQ2tiTkkbBpDO1R6Thm_W7CTX8",
        },
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data.results); // 영화 데이터를 상태에 저장
        setLoading(false); // 로딩 완료
      } catch (error) {
        console.error("API를 불러오지 못했습니다.", error);
        setError("영화를 불러오는데 문제가 발생했습니다."); // 에러 처리
        setLoading(false); // 로딩 완료
      }
    };

    fetchMovies();
  }, []);

  const handleSortClick = (sortType) => {
    setActiveSort(sortType);
  };

  const handleMovieClick = (id, title, poster_path) => {
    setSelectedMovieId(id); // 선택된 영화 ID를 상태에 저장
    setSelectedMovie(title); // 선택된 영화 제목을 BookingContext에 저장
    setPosterPath(poster_path); // 선택된 영화 포스터 경로를 BookingContext에 저장
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
              <Link
                to="#"
                className="w-[58px] text-[12px] text-center items-center flex justify-center border-x border-t border-slate-950	"
              >
                전체
              </Link>
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
              <Link
                to="#"
                onClick={() => handleSortClick("예매율순")}
                className={`sort-link text-[#333] text-[12px] pr-[5px] pb-[8px] ${
                  activeSort === "예매율순" ? "active" : ""
                }`}
              >
                예매율순
              </Link>
              <Link
                to="#"
                onClick={() => handleSortClick("가나다순")}
                className={`sort-link text-[#333] text-[12px] pr-[5px] pb-[8px] ${
                  activeSort === "가나다순" ? "active" : ""
                }`}
              >
                가나다순
              </Link>
            </div>

            <div className="movie_list mx-[25px] mt-[5px] pb-[2px]">
              {loading ? (
                <p>영화 데이터를 불러오는 중...</p>
              ) : error ? (
                <p>{error}</p>
              ) : (
                movies.map((movie) => (
                  <div>
                    <img
                      src={`${IMG_BASE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="w-0 h-0 object-cover shadow-xl"
                    />
                    <div
                      className={`text-[#333] text-[12px] font-bold px-[7px] py-1 cursor-pointer transition-all duration-300r ${
                        selectedMovieId === movie.id
                          ? "bg-[#333] text-white" // 선택된 영화의 배경색 및 텍스트 색상
                          : ""
                      }`}
                      onClick={() =>
                        handleMovieClick(
                          movie.id,
                          movie.title,
                          movie.poster_path
                        )
                      }
                    >
                      {movie.title}
                    </div>
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
