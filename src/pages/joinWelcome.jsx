import { NavLink } from "react-router-dom";

export default function joinWelcome() {
  return (
    <div className="w-[980px] my-0 mx-auto">
      <div className=" flex flex-col items-center mt-8">
        <img
          src={`${process.env.PUBLIC_URL}/image/join_welcome.jpg`}
          alt="welcome"
          className="w-[700px] justify-center"
        />
        <div className="flex flex-col items-center mt-8">
          <span>CJ ONE 회원이 되시면 하나의 통합된 회원 ID와 비밀번호로</span>
          <span>CGV와 CJ ONE의 다양한 서비스를 이용하실 수 있습니다.</span>
          <span className="text-[8px] mt-8">
            근데 저희는 CJ ONE 통합 로그인이 안돼요..
          </span>
        </div>

        <div className="mt-8 mb-28">
          <NavLink to={`/join`}>
            <button className="bg-[#fb4357] text-white font-bold px-6 py-2 rounded">
              CGV 회원가입
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
