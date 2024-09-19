import React, { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [credits, setCredits] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const languageMap = {
    en: "미국",
    ko: "대한민국",
    ja: "일본",
    fr: "프랑스",
    es: "스페인",
    zh: "중국",
    de: "독일",
    it: "이탈리아",
  };

  // 장르 이름을 반환하는 함수
  const getGenreNames = (genres) => {
    if (!genres) return ""; // genres가 undefined일 경우 빈 문자열 반환
    return genres.map((genre) => genre.name).join(", ");
  };

  useEffect(() => {
    // API 호출 코드
    const fetchMovieDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}`,
          {
            params: { language: "ko-kr", page: "1" },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjU5MmMzNGIyMDU5NTVjZDM2M2YzMGRiYzM5YjljMiIsIm5iZiI6MTcyMDY3NDkyMy42NjIwNzUsInN1YiI6IjY2OGY2OGY3MmI3NWQ5MDIwZWU2ZWExOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK5NfoFsZr7QM0m1mYQ2tiTkkbBpDO1R6Thm_W7CTX8", // 여기에 자신의 API 키를 입력하세요
            },
          }
        );
        setMovie(response.data);
      } catch (error) {
        console.error("영화 정보를 불러오지 못했습니다.", error);
        setError(error);
      }
    };

    // API 호출 코드
    const fetchCredits = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits`,
          {
            params: { language: "ko-kr", page: "1" },
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYjU5MmMzNGIyMDU5NTVjZDM2M2YzMGRiYzM5YjljMiIsIm5iZiI6MTcyMDY3NDkyMy42NjIwNzUsInN1YiI6IjY2OGY2OGY3MmI3NWQ5MDIwZWU2ZWExOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fK5NfoFsZr7QM0m1mYQ2tiTkkbBpDO1R6Thm_W7CTX8",
            },
          }
        );
        setCredits(response.data);
      } catch (error) {
        console.error("출연진 정보를 불러오지 못했습니다.", error);
        setError(error);
      }
    };

    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchMovieDetail(), fetchCredits()]);
      setLoading(false);
    };

    fetchData();
  }, [id]);

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
                  src={`${IMG_BASE_URL}${movie.poster_path}`}
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
                      {languageMap[movie.original_language] || "알 수 없음"}
                    </span>
                  </div>
                  <hr className="pb-4" />
                  <div className="flex flex-col text-[13px] font-bold">
                    <span>
                      출연진:{" "}
                      {credits.cast
                        ?.slice(0, 5)
                        .map((actor) => actor.name)
                        .join(", ")}
                    </span>
                    <span>장르: {getGenreNames(movie.genres)}</span>
                    <span>
                      개봉 <span>{movie.release_date}</span>
                    </span>
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
                {/* <img
                  src={`${process.env.PUBLIC_URL}/image/ad_poster.jpg`}
                  alt=""
                /> */}
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
