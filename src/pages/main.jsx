import React, { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";

import axios from "axios";
import "./main.css";

export const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";

export default function Main(props) {
  const nav = useNavigate();

  const [movies, setMovies] = useState([]); // 영화 목록 저장
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const moviesPerPage = 5; // 한 번에 보여줄 영화 수

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

  // 현재 페이지에 맞는 영화 리스트 계산
  const currentMovies = movies.slice(
    currentPage * moviesPerPage,
    (currentPage + 1) * moviesPerPage
  );

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    if ((currentPage + 1) * moviesPerPage < movies.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 이전 슬라이드로 이동
  const prevSlide = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const [imgSrc, setImgSrc] = useState(
    `${process.env.PUBLIC_URL}/image/specialHall_1.png`
  );
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (img, index) => {
    setImgSrc(`${process.env.PUBLIC_URL}/image/${img}`);
    setHoveredIndex(index);
  };

  const handleMouseOut = () => {
    setHoveredIndex(null);
  };

  return (
    <div>
      {/* video */}
      <div className="w-full flex flex-row justify-center align-center bg-[#000] relative">
        <div className="container">
          <div className="movieSelectionWrap h-[498px]">
            <div className="contents my-0 mx-auto">
              <div className="videoWrap w-[100%] flex justify-center h-[100%] overflow-hidden relative">
                <video muted autoPlay loop>
                  <source src="../../video/Bread_main.mp4" type="video/mp4" />
                </video>
                <strong className="title absolute top-[170px] left-40 font-bold text-[40px] text-[#fff] leading-[1.450em] z-10">
                  브레드이발소: 빵스타의 탄생
                </strong>
                <span className="absolute top-[239px] left-40 max-w-[100%] text-[20px] text-[#fff] font-bold leading-[1.450em] z-10">
                  최고의 빵스타는 누가 될 것인가!
                  <br />
                  프리미어 상영 예매 GO
                </span>
                <div className="absolute flex flex-row top-[315px] left-40 z-10">
                  <a
                    href="#"
                    className="flex py-[5px] px-[18px] text-[14px] text-[#343434] leading-[1.429em] bg-[#fff] rounded-2xl items-center flex-row justify-center"
                  >
                    상세보기
                    <img
                      src={`${process.env.PUBLIC_URL}/image/arrowR.png`}
                      alt="banner"
                      className="flex pl-[6px] w-[17px] h-[17px] align-center"
                    />
                  </a>
                  <a
                    href="#"
                    className="flex flex-row items-center justify-center"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/image/play.png`}
                      alt="play"
                      className="flex align-center border rounded-3xl ml-[8px] w-[35px] p-[4px]"
                    />
                  </a>
                  <a
                    href="#"
                    className="flex flex-row items-center justify-center"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/image/soundOff.png`}
                      alt="soundOff"
                      className="flex align-center border rounded-3xl ml-[8px] w-[35px] p-[4px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* movieChart */}
      <div className="movieChart bg-gradient-to-b from-white to-[#e8e8e8] flex justify-center">
        <div className="content w-[980px] h-[100%] my-0 mx-auto relative">
          <div className="btn_wrap flex items-center mt-[40px] mb-[20px] justify-between">
            <div className="flex">
              <h3>
                <a href="#" className="text-[26px] font-bold">
                  무비차트
                </a>
              </h3>
              <h3 className="ml-[32px] relative before:absolute before:left-[-16px] before:top-1/2 before:w-px before:h-[14px] before:-mt-[7px] before:bg-[#d8d8d8]">
                <a href="#" className="text-[26px] font-bold">
                  상영예정작
                </a>
              </h3>
            </div>
            <a
              href="/movies"
              className="text-[14px] text-[#222] font-medium leading-[1.429em] border rounded-[15px] py-[4px] px-[15px] shadow-sm"
            >
              전체보기 {" >"}
            </a>
          </div>

          <div className="movie_list flex items-center justify-center pt-[20px] relative">
            {/* 이전 슬라이드 버튼 */}
            <button
              onClick={prevSlide}
              disabled={currentPage === 0}
              className="prev_btn absolute left-[-10px] top-[155px] transform -translate-y-1/2 text-[#666] font-bold px-[10px] py-[5px] bg-white border rounded-full shadow-md z-20"
            />

            <div className="grid grid-cols-5 mt-3 mb-8 w-[100%] mx-auto relative">
              {movies
                .slice(
                  currentPage * moviesPerPage,
                  (currentPage + 1) * moviesPerPage
                )
                .map((movie, index) => (
                  <div key={movie.id} className="h-fit mx-auto relative group">
                    {/* 영화 포스터 이미지 */}
                    <img
                      src={`${IMG_BASE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="h-[234px] object-cover w-[170px] transition duration-300 ease-in-out group-hover:filter group-hover:blur-sm"
                    />
                    {/* 예매하기 버튼 */}
                    <div className="absolute h-[234px] inset-0 flex flex-col items-center justify-center gap-2 hidden group-hover:flex">
                      <NavLink to={`/movieDetail/${movie.id}`}>
                        <button className="bg-white  text-black font-semibold px-6 py-2 rounded">
                          상세보기
                        </button>
                      </NavLink>
                      <NavLink to={`/ticket`}>
                        <button className="bg-[#fb4357] text-white font-bold px-6 py-2 rounded">
                          예매하기
                        </button>
                      </NavLink>
                    </div>

                    {/* 영화 설명 */}
                    <div className="p-3 text-center">
                      <div className="font-bold h-6 overflow-hidden">
                        {movie.title}
                      </div>
                      <div className="text-sm mt-2">
                        예매율: {(Math.random() * 60 + 1).toFixed(1)}%
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* 다음 슬라이드 버튼 */}
            <button
              onClick={nextSlide}
              disabled={(currentPage + 1) * moviesPerPage >= movies.length}
              className="next_btn absolute right-[-10px] top-[140px] transform -translate-y-1/2 text-[#666] font-bold px-[10px] py-[5px] bg-white border rounded-full shadow-md z-20"
            />
          </div>
        </div>
      </div>

      {/* Event */}
      <div className="eventWrap w-[980px] h-[100%] my-0 mx-auto pt-[60px] pb-[6px] px-0 ">
        <div className="content">
          <div className="event_title flex justify-between">
            <h3 className="m-0 font-bold text-[26px] text-[#222] leading-[1.423em] ">
              Event
            </h3>
            <div className="flex items-center">
              <a href="#" className="mr-2">
                <div className="flex align-center justify-center items-center border border-[#e3e3e3] rounded-full ml-[8px] w-[28px] h-[28px] p-[2px]">
                  <img
                    src={`${process.env.PUBLIC_URL}/image/stop.png`}
                    alt="stop"
                    className="w-[15px] h-[15px] object-contain"
                  />
                </div>
              </a>
              <a
                href="/movies"
                className="text-[14px] font-medium	 text-[#222] leading-[1.429em] border rounded-[15px] py-[4px] px-[15px] shadow-sm"
              >
                전체보기 {" >"}
              </a>
            </div>
          </div>
          <div className="event_list_wrap mt-[19px] relative w-[100%]">
            <div className="event_list flex">
              <div className="w-[310px] mr-[24px]">
                <a href="#">
                  <div className="img_wrap border-none rounded-[10px]">
                    <img
                      src={`${process.env.PUBLIC_URL}/image/event_1.jpg`}
                      alt=""
                    />
                  </div>
                  <p className="mt-[16px] font-semibold text-[18px] text-[#222] leading-[1.444em]">
                    가을만큼 풍성한무비추천템
                  </p>
                  <p className="mt-[4px] text-[14px] text-[#666] leading-[1.429em]">
                    2024.8.30~2024.09.15
                  </p>
                </a>
              </div>
              <div className="w-[310px] mr-[24px]">
                <a href="#">
                  <div className="img_wrap border-none rounded-[10px]">
                    <img
                      src={`${process.env.PUBLIC_URL}/image/event_2.jpg`}
                      alt=""
                    />
                  </div>
                  <p className="mt-[16px] font-semibold text-[18px] text-[#222] leading-[1.444em]">
                    [브레드이발소]얼리브레드 할인 관람권
                  </p>
                  <p className="mt-[4px] text-[14px] text-[#666] leading-[1.429em]">
                    2024.8.29~2024.09.13
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 특별관 */}
      <div className="specialHall_wrap w-[980px] h-[100%] my-0 mx-auto pt-[60px] pb-[6px] px-0">
        <div className="content">
          {/* 특별관 타이틀 */}
          <div className="specialHall_title flex justify-between items-center">
            <h3 className="m-0 font-bold text-[26px] text-[#222] leading-[1.423em]">
              특별관
            </h3>
            <a
              href="/movies"
              className="text-[14px] font-medium text-[#222] leading-[1.429em] border rounded-[15px] py-[4px] px-[15px] shadow-sm"
            >
              전체보기 {" >"}
            </a>
          </div>
          {/* 특별관 콘텐츠 */}
          <div className="specialHall_content flex justify-between mt-[19px] relative">
            <a href="#" className="w-[500px] border-none rounded-[10px]">
              <div className="img_wrap relative">
                <img
                  src={imgSrc}
                  alt=""
                  className="object-cover w-full h-full transition-opacity duration-300"
                />
              </div>
            </a>
            <ul className="w-[440px]">
              {[
                "specialHall_1.png",
                "specialHall_2.png",
                "specialHall_3.png",
                "specialHall_4.png",
              ].map((img, index) => (
                <li
                  key={index}
                  className={` ${
                    hoveredIndex === index
                      ? "border-2 rounded-[10px] border-[#000]"
                      : "border-y"
                  } `}
                  onMouseOver={() => handleMouseOver(img, index)}
                  onMouseOut={handleMouseOut}
                >
                  <a
                    href="#"
                    className="flex justify-between items-center py-[19px] pr-[25px] pl-[19px]"
                  >
                    <strong
                      className={`font-normal text-[18px] text-[#222] leading-[1.444em] ${
                        hoveredIndex === index ? "font-black" : "font-normal"
                      }`}
                    >
                      {index === 0 && "SUITE CINEMA"}
                      {index === 1 && "CINE & LIVINGROOM"}
                      {index === 2 && "4DX"}
                      {index === 3 && "CINE de CHEF"}
                    </strong>
                    <div>
                      <span className="py-[2px] px-[7px] text-[#666] leading-[1.429em] bg-[#f6f6f6] border-none rounded-[5px]">
                        {index === 0 && "#호텔 컨셉의 프리미엄관"}
                        {index === 1 && "#신개념 소셜 상영관"}
                        {index === 2 && "#모션시트 #오감체험"}
                        {index === 3 && "#쉐프가 있는 영화관"}
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Gift */}
      <div className="giftcon_wrap pt-[60px]  w-[980px] h-[100%] my-0 mx-auto">
        <div className="content">
          <ul className="giftcon_list_wrap flex justify-between">
            {/* 패키지 */}
            <li className="w-[300px] px-[19px] pt-[20px] pb-[30px] border border-[#e4e4e4] rounded-[10px]">
              <dl className="giftcon_list">
                <dt className="flex justify-between items-center font-medium text-[20px] text-[#222] leading-[1.450em]">
                  패키지
                  <a
                    href="#"
                    className="text-[14px] font-medium text-[#222] leading-[1.429em] border rounded-[15px] py-[4px] px-[12px] shadow-sm"
                  >
                    더보기
                  </a>
                </dt>
                <dd className="mt-[27px]">
                  <a href="#" className="flex justify-left items-center">
                    <div className="img_wrap w-[75px] h-[76px] border-none rounded-[5px]">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/package_1.jpg`}
                        alt=""
                        className="left-0 top-[50%] w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="giftcon_info_wrap flex flex-col pl-[15px]">
                      <span className="font-medium text-[14px] text-[#222] leading-[1.429em]">
                        {"<"}브레드이발소:빵스타의 탄생{">"} 얼리버드 관람권
                      </span>
                      <strong className="font-bold text-[16px] text-[#222] leading-[1.444em]">
                        14,000원
                      </strong>
                    </div>
                  </a>
                </dd>
                <dd className="mt-[27px]">
                  <a href="#" className="flex justify-left items-center">
                    <div className="img_wrap w-[75px] h-[76px] border-none rounded-[5px]">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/package_2.jpg`}
                        alt=""
                        className="left-0 top-[50%] w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="giftcon_info_wrap flex flex-col pl-[15px]">
                      <span className="font-medium text-[14px] text-[#222] leading-[1.429em]">
                        우리 패키지
                      </span>
                      <strong className="font-bold text-[16px] text-[#222] leading-[1.444em]">
                        62,000원
                      </strong>
                    </div>
                  </a>
                </dd>
                <dd className="mt-[27px]">
                  <a href="#" className="flex justify-left items-center">
                    <div className="img_wrap w-[75px] h-[76px] border-none rounded-[5px]">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/package_3.jpg`}
                        alt=""
                        className="left-0 top-[50%] w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="giftcon_info_wrap flex flex-col pl-[15px]">
                      <span className="font-medium text-[14px] text-[#222] leading-[1.429em]">
                        나랑 너 패키지
                      </span>
                      <strong className="font-bold text-[16px] text-[#222] leading-[1.444em]">
                        35,000원
                      </strong>
                    </div>
                  </a>
                </dd>
              </dl>
            </li>
            {/* 영화관람권 */}
            <li className="w-[300px] px-[19px] pt-[20px] pb-[30px] border border-[#e4e4e4] rounded-[10px]">
              <dl className="giftcon_list">
                <dt className="flex justify-between items-center font-medium text-[20px] text-[#222] leading-[1.450em]">
                  영화관람권
                  <a
                    href="#"
                    className="text-[14px] font-medium text-[#222] leading-[1.429em] border rounded-[15px] py-[4px] px-[12px] shadow-sm"
                  >
                    더보기
                  </a>
                </dt>
                <dd className="mt-[27px]">
                  <a href="#" className="flex justify-left items-center">
                    <div className="img_wrap w-[75px] h-[76px] border-none rounded-[5px]">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/ticket_1.jpg`}
                        alt=""
                        className="left-0 top-[50%] w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="giftcon_info_wrap flex flex-col pl-[15px]">
                      <span className="font-medium text-[14px] text-[#222] leading-[1.429em]">
                        CGV 영화관람권
                      </span>
                      <strong className="font-bold text-[16px] text-[#222] leading-[1.444em]">
                        13,000원
                      </strong>
                    </div>
                  </a>
                </dd>
                <dd className="mt-[27px]">
                  <a href="#" className="flex justify-left items-center">
                    <div className="img_wrap w-[75px] h-[76px] border-none rounded-[5px]">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/ticket_2.jpg`}
                        alt=""
                        className="left-0 top-[50%] w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="giftcon_info_wrap flex flex-col pl-[15px]">
                      <span className="font-medium text-[14px] text-[#222] leading-[1.429em]">
                        IMAX 영화관람권
                      </span>
                      <strong className="font-bold text-[16px] text-[#222] leading-[1.444em]">
                        18,000원
                      </strong>
                    </div>
                  </a>
                </dd>
                <dd className="mt-[27px]">
                  <a href="#" className="flex justify-left items-center">
                    <div className="img_wrap w-[75px] h-[76px] border-none rounded-[5px]">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/ticket_3.jpg`}
                        alt=""
                        className="left-0 top-[50%] w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="giftcon_info_wrap flex flex-col pl-[15px]">
                      <span className="font-medium text-[14px] text-[#222] leading-[1.429em]">
                        4DX 영화관람권
                      </span>
                      <strong className="font-bold text-[16px] text-[#222] leading-[1.444em]">
                        19,000원
                      </strong>
                    </div>
                  </a>
                </dd>
              </dl>
            </li>
            {/* 기프트카드 */}
            <li className="w-[300px] px-[19px] pt-[20px] pb-[30px] border border-[#e4e4e4] rounded-[10px]">
              <dl className="giftcon_list">
                <dt className="flex justify-between items-center font-medium text-[20px] text-[#222] leading-[1.450em]">
                  기프트카드
                  <a
                    href="#"
                    className="text-[14px] font-medium text-[#222] leading-[1.429em] border rounded-[15px] py-[4px] px-[12px] shadow-sm"
                  >
                    더보기
                  </a>
                </dt>
                <dd className="mt-[27px]">
                  <a href="#" className="flex justify-left items-center">
                    <div className="img_wrap w-[75px] h-[76px] border-none rounded-[5px]">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/giftcard_1.jpg`}
                        alt=""
                        className="left-0 top-[50%] w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="giftcon_info_wrap flex flex-col pl-[15px]">
                      <span className="font-medium text-[14px] text-[#222] leading-[1.429em]">
                        PACONNIE A형
                      </span>
                      <strong className="font-bold text-[16px] text-[#222] leading-[1.444em]">
                        금액충전형
                      </strong>
                    </div>
                  </a>
                </dd>
                <dd className="mt-[27px]">
                  <a href="#" className="flex justify-left items-center">
                    <div className="img_wrap w-[75px] h-[76px] border-none rounded-[5px]">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/giftcard_2.jpg`}
                        alt=""
                        className="left-0 top-[50%] w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="giftcon_info_wrap flex flex-col pl-[15px]">
                      <span className="font-medium text-[14px] text-[#222] leading-[1.429em]">
                        PACONNIE B형
                      </span>
                      <strong className="font-bold text-[16px] text-[#222] leading-[1.444em]">
                        금액충전형
                      </strong>
                    </div>
                  </a>
                </dd>
                <dd className="mt-[27px]">
                  <a href="#" className="flex justify-left items-center">
                    <div className="img_wrap w-[75px] h-[76px] border-none rounded-[5px]">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/giftcard_3.jpg`}
                        alt=""
                        className="left-0 top-[50%] w-[100%] h-[100%] object-cover"
                      />
                    </div>
                    <div className="giftcon_info_wrap flex flex-col pl-[15px]">
                      <span className="font-medium text-[14px] text-[#222] leading-[1.429em]">
                        PACONNIE C형
                      </span>
                      <strong className="font-bold text-[16px] text-[#222] leading-[1.444em]">
                        금액충전형
                      </strong>
                    </div>
                  </a>
                </dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>

      {/* Info */}
      <div className="notice pt-[30px] pb-[120px] w-[980px] h-[100%] my-0 mx-auto">
        <div className="content flex justify-between items-center">
          <div className="noticeClient_container flex justify-between w-[736px] h-[250px] border border-[#e4e4e4] rounded-[10px] float-left">
            <div className="content w-[520px] pt-[24px] pb-[20px] pl-[26px] pr-[30px]">
              <div className="flex items-center align-center pb-[21px] border-b border-[#f4f4f4]">
                <strong className="float-left font-bold text-[16px] text-[#222] leading-[1.500em]">
                  공지사항
                </strong>
                <a
                  href="#"
                  className="float-left overflow-hidden	max-w-[300px] mt-[2px] ml-[28px] text-[14px] text-[#222] leading-[1.429em] text-ellipsis whitespace-nowrap"
                >
                  [극장][CGV] {"<"}블랙핑크 월드투어 [본 핑크] 인 시네마{">"}{" "}
                  무대인사 회차 휠체어석 유의사항 안내
                </a>
                <a
                  href="#"
                  className="float-right text-[14px] font-medium text-[#222] border rounded-[15px] py-[3px] px-[15px] shadow-sm "
                >
                  더보기
                </a>
              </div>

              <div className="client_wrap ">
                <dl className="client_list flex float-left pt-[19px] pb-[22px]">
                  <dt>
                    <strong className="font-bold text-[16px] text-[#222] leading-[1.500em]">
                      고객센터
                    </strong>
                  </dt>
                  <dd className="pl-[28px] overflow-hidden">
                    <strong className="block font-bold text-[14px] text-[#222] leading-[1.714em]">
                      1544-1122
                    </strong>
                    <span className="block text-[14px] text-[#222] leading-[1.714em]">
                      고객센터 운영시간 (평일 09:00~18:00)
                    </span>
                    <p className="block text-[14px] text-[#666] leading-[1.714em]">
                      업무시간 외 자동응답 안내 가능합니다.
                    </p>
                  </dd>
                </dl>
                <div className="flex float-left">
                  <a
                    href="#"
                    className="py-[7px] px-[14px] text-[14px] text-[#222] leading-[1.429em] bg-[#f6f6f6] rounded-[5px]"
                  >
                    FAQ
                  </a>
                  <a
                    href="#"
                    className="py-[7px] px-[14px] text-[14px] text-[#222] leading-[1.429em] bg-[#f6f6f6] rounded-[5px] ml-2"
                  >
                    1:1 문의
                  </a>
                  <a
                    href="#"
                    className="py-[7px] px-[14px] text-[14px] text-[#222] leading-[1.429em] bg-[#f6f6f6] rounded-[5px] ml-2"
                  >
                    대관/단체 문의
                  </a>
                </div>
              </div>
            </div>

            <div className="qr_wrap flex flex-col w-[222px] items-center border-l border-[#e4e4e4]">
              <strong className="flex mt-[24px] font-bold text-[16px] text-[#222]">
                앱 다운로드
              </strong>
              <span className="flex justify-center w-[100%] mt-[5px] text-[12px] text-[#222]">
                CGV앱에서 더 편리하게 이용하세요
              </span>
              <div>
                <img src={`${process.env.PUBLIC_URL}/image/qr.gif`} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center mt-[24px]">
                <span className="text-[12px] text-[#666] leading-[1.417em]">
                  QR코드를 스캔하고
                </span>
                <span className="text-[12px] text-[#666] leading-[1.417em]">
                  앱설치 페이지로 바로 이동하세요
                </span>
              </div>
            </div>
          </div>
          <div className="noticeClient_banner ">
            <img
              src={`${process.env.PUBLIC_URL}/image/CGV_BUGS.png`}
              alt=""
              className=" h-[250px] border rounded-[17px]"
            />
          </div>
        </div>
      </div>

      {/* fixedBtn */}
      <div className="fixedBtn flex justify-end	fixed	right-0 bottom-[80px] min-h-[50px] ml-[440px] text-center z-10">
        <NavLink to={`/ticket`}>
          <div className="btn_fixed right-[90px] opacity-100	pointer-events-auto	">
            예매하기
          </div>
        </NavLink>
        <a
          href="#"
          className="gotoTop opacity-100 pointer-events-auto flex items-center justify-center relative right-[30px] w-[48px] h-[48px] bg-[#fff] border-[1px] border-black rounded-full"
        >
          <img src={`${process.env.PUBLIC_URL}/image/gotoTop.png`} alt="" />
        </a>
      </div>
    </div>
  );
}
