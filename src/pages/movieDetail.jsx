import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieDetail() {
  const { movieId } = useParams(); // URL에서 movieId를 가져옵니다.
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // API 호출 코드
  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/movies/${movieId}`
        );

        // API 응답이 MovieResponseDTO에 따라 구조화되어 있는지 확인 후 movie state 업데이트
        if (response.status === 200) {
          setMovie(response.data);
        } else {
          throw new Error("영화 정보를 불러오는 데 실패했습니다.");
        }
      } catch (error) {
        console.error("영화 정보를 불러오지 못했습니다.", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [movieId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <div className="container w-[996px] my-0 mx-auto">
        <div className="contents pb-[50px]">
          <div className="wrap_movie_detail">
            {/* 위쪽 상세정보 */}
            <div className="detail_section pt-[40px] flex">
              <div className="imgbox">
                <img
                  src={`${IMG_BASE_URL}${movie.posterPath}`} // 응답 데이터에 맞게 변경
                  alt={movie.title}
                  className="w-[185px] h-[260px] object-cover shadow-xl"
                />
              </div>
              <div className="contentbox ml-4 w-[765px]">
                <div>
                  <strong className="text-[25px] text-[#1a1919]">
                    {movie.title}
                  </strong>
                  <div className="score py-2 flex flex-col ">
                    <span>
                      평점 <span>{movie.vote_average}</span>
                    </span>
                    <span className="mt-1">
                      {/* original_language에 대한 데이터가 없으므로 제거 */}
                      {/* {languageMap[movie.original_language] || "알 수 없음"} */}
                    </span>
                  </div>
                  <hr className="pb-4" />
                  <div className="flex flex-col text-[13px] font-bold">
                    <span>
                      개봉 <span>{movie.releaseDate}</span>
                    </span>{" "}
                    {/* 응답 데이터에 맞게 변경 */}
                    <span>줄거리: {movie.overview}</span>{" "}
                    {/* 응답 데이터에 맞게 변경 */}
                    <NavLink to={`/ticket`}>
                      <button className="bg-[#fb4357] text-white font-bold px-6 py-2 rounded w-32 mt-4">
                        예매하기
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            {/* 밑에부분.. */}
            <div className="flex justify-between pb-32">
              {/* 줄거리 */}
              <div className="pt-24 w-[700px] text-[18px]">
                <p className="text-[21px] font-bold pb-4">줄거리</p>
                <p>{movie.overview}</p>
              </div>
              {/* 광고 포스터 */}
              <div className="float-right">
                <img
                  src={`${process.env.PUBLIC_URL}/image/bread_poster.jpg`}
                  alt=""
                />
              </div>
            </div>

            {/* 광고 배너 */}
            <div className="banner flex justify-center bg-[#23114F] mb-32">
              <a href="/">
                <img
                  src={`${process.env.PUBLIC_URL}/image/banner.jpg`}
                  alt="banner"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
