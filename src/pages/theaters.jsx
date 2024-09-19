import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Theaters() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // API 호출 코드
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
        setMovies(response.data.results);
        console.log(response.data.results);
      } catch (error) {
        console.error("API를 불러오지 못했습니다.", error);
      }
    };
    fetchMovies();
  }, []);
  return (
    <div className="flex justify-center mt-3">
      <div className="flex flex-col justify-center w-[70%]">
        <div className="">
          <div className="flex justify-center mt-4 font-bold text-lg">
            박스오피스
          </div>
          <div className="grid grid-cols-3 gap-4 mt-3 mb-8 w-[70%] mx-auto">
            {movies.slice(0, 3).map((movie, index) => (
              <div
                key={movie.id}
                className="bg-[#2c6cf0] text-white h-fit mx-auto"
              >
                <img
                  src={`${IMG_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="p-3">
                  <div className="font-bold text-xl mb-1">{index + 1}위</div>
                  <div className="font-bold h-6 overflow-hidden">
                    {movie.title}
                  </div>
                  <div className="flex justify-between mt-2 w-[95%] mx-auto">
                    <div className="text-xs">{movie.release_date}</div>
                    <div className="text-xs flex items-center">
                      {movie.vote_average.toFixed(1)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button className="border py-4 text-lg font-bold bg-gray-100 w-[100%] rounded-xl hover:text-white hover:bg-[#2c6cf0] p-1">
              예매하기
            </button>
            <button className="border py-4 text-lg font-bold bg-gray-100 w-[100%] rounded-xl hover:text-white hover:bg-[#2c6cf0] p-1">
              예매하기
            </button>
            <button className="border py-4 text-lg font-bold bg-gray-100 w-[100%] rounded-xl hover:text-white hover:bg-[#2c6cf0] p-1">
              예매하기
            </button>
          </div>
        </div>
        <div className="mb-10 flex justify-center">
          <img src="/img/HappyLittle.png" alt="" />
        </div>
      </div>
    </div>
  );
}
