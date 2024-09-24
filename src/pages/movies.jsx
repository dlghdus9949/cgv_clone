import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [showNowPlaying, setShowNowPlaying] = useState(false); // 현재 상영중인 영화

  useEffect(() => {
    // API 호출 코드
    const fetchMovies = async () => {
      const url = showNowPlaying
        ? "https://api.themoviedb.org/3/movie/now_playing"
        : "https://api.themoviedb.org/3/movie/popular";
      const options = {
        method: "GET",
        url: url,
        params: { language: "ko-kr", page: "1" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjU5MmMzNGIyMDU5NTVjZDM2M2YzMGRiYzM5YjljMiIsIm5iZiI6MTcyMDY3NDkyMy42NjIwNzUsInN1YiI6IjY2OGY2OGY3MmI3NWQ5MDIwZWU2ZWExOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK5NfoFsZr7QM0m1mYQ2tiTkkbBpDO1R6Thm_W7CTX8",
        },
      };

      try {
        const response = await axios.request(options);
        setMovies(response.data.results);
      } catch (error) {
        console.error("API를 불러오지 못했습니다.", error);
      }
    };
    fetchMovies();
  }, [showNowPlaying]);

  return (
    <div className="w-[996px] my-0 mx-auto">
      <div className="container w-[100%] z-7 my-0 mx-auto">
        <div className="contents w-[980px]">
          <div className="wrapMovieChart">
            {/* 타이틀 */}
            <div className="Title flex justify-between items-end pt-8 pb-4 border-b-4 border-black">
              <h3 className="text-[36px] font-bold">무비차트</h3>
              <div className="submenu">
                <ul className="flex">
                  <li className="on mr-2">
                    <a href="#">무비차트</a>
                  </li>
                  <li>
                    <a href="#">상영예정작</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* 종류 */}
            <div className="sorting mt-4 flex justify-between">
              <div>
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={showNowPlaying}
                  onChange={() => setShowNowPlaying(!showNowPlaying)}
                />
                <label htmlFor="">현재 상영작만 보기</label>
              </div>
              <div>
                <select
                  name="order-type"
                  id=""
                  className="py-[3px] px-[5px] border"
                >
                  <option value="1" className="h-[23px] leading-[23px]">
                    예매율순
                  </option>
                  <option value="2" className="h-[23px] leading-[23px]">
                    평점순
                  </option>
                  <option value="3" className="h-[23px] leading-[23px]">
                    관람객순
                  </option>
                </select>
                <button className="border-2 border-[#7b7b7b] ml-1">
                  <span className="text-[#7b7b7b] px-[5px] w-[100%] h-[100%]">
                    GO
                  </span>
                </button>
              </div>
            </div>
            {/* 무비차트 */}
            <div className="flex justify-center mt-3">
              <div className="flex flex-col justify-center w-[996px]">
                <div className="">
                  <div className="grid grid-cols-4 gap-16 mt-3 mb-8 w-[100%] mx-auto">
                    {movies.slice(0, 52).map((movie, index) => (
                      <div key={movie.id} className="h-fit mx-auto">
                        {/* No. 처리: 20위까지는 No. 표시 */}
                        {index < 20 ? (
                          <div
                            className={`flex justify-center font-bold text-xl text-white ${
                              index < 3 ? "bg-[#fb4357]" : "bg-[#333333]"
                            }`}
                          >
                            No.{index + 1}
                          </div>
                        ) : null}
                        {/* 영화 포스터 이미지 */}
                        <NavLink to={`/movieDetail/${movie.id}`}>
                          <img
                            src={`${IMG_BASE_URL}${movie.poster_path}`}
                            alt={movie.title}
                            className="mt-2 w-[200px] h-[290px]"
                          />
                        </NavLink>
                        {/* 영화 설명 */}
                        <div className="p-3">
                          <div className="font-bold h-6 overflow-hidden">
                            {movie.title}
                          </div>
                          <div className="flex justify-between mt-2 w-[95%] mx-auto">
                            <div className="text-xs">{movie.release_date}</div>
                            <div className="text-xs flex items-center">
                              {movie.vote_average.toFixed(1)} ★
                            </div>
                          </div>
                          <div className="flex justify-between mt-2">
                            <div className="text-sm">
                              예매율: {(Math.random() * 60 + 1).toFixed(1)}%
                            </div>
                            <div className="text-sm">
                              ★ {movie.vote_average}
                            </div>
                          </div>
                          <NavLink to={`/ticket`}>
                            <button className="bg-[#fb4357] text-white mt-2 py-1 px-4 rounded">
                              예매하기
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
