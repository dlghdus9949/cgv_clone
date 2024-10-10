import { Link, NavLink } from "react-router-dom";
export default function FixedBtn() {
  return (
    <div>
      {/* fixedBtn */}
      <div className="fixedBtn flex justify-end fixed right-0 bottom-[80px] min-h-[50px] ml-[440px] text-center z-10">
        <a href={`/ticket`}>
          <div className="btn_fixed right-[90px] opacity-100 pointer-events-auto">
            예매하기
          </div>
        </a>
        <a
          href="#"
          className="gotoTop opacity-100 pointer-events-auto flex items-center justify-center relative right-[30px] w-[48px] h-[48px] bg-[#fff] border-[1px] border-black rounded-full"
          onClick={(e) => {
            e.preventDefault(); // 기본 동작 막기
            window.scrollTo({
              top: 0,
              behavior: "smooth", // 부드러운 스크롤 효과
            });
          }}
        >
          <img src={`${process.env.PUBLIC_URL}/image/gotoTop.png`} alt="" />
        </a>
      </div>
    </div>
  );
}
