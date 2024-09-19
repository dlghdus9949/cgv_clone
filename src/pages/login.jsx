export default function Login() {
  return (
    <div>
      <div className="w-[100%] relative z-10">
        <div className="pb-[50px] w-[980px] my-0 mx-auto">
          <div className="loginWrap p-[30px] flex justify-between">
            {/* 로그인 */}
            <div>
              <div className="border-b-2 border-[#898987] w-[541px]">
                {/* 로그인, 비회원예매, 비회원예매확인 */}
                <ul className="flex tab_menu clear-both space-x-[2px] ">
                  <li className="flex justify-center w-[100px] bg-[#898987] text-[#fdfcf0] rounded-t-md h-[37px]">
                    <a
                      href="#"
                      className="flex items-center text-[#fff] text-[13px] font-medium text-center"
                    >
                      로그인
                    </a>
                  </li>
                  <li className="flex justify-center w-[100px] bg-[#898987] text-[#fdfcf0] rounded-t-md h-[37px]">
                    <a
                      href="#"
                      className="flex items-center text-[#fff] text-[13px] font-medium text-center"
                    >
                      비회원 예매
                    </a>
                  </li>
                  <li className="flex justify-center w-[100px] bg-[#898987] text-[#fdfcf0] rounded-t-md h-[37px]">
                    <a
                      href="#"
                      className="flex items-center text-[#fff] text-[13px] font-medium text-center"
                    >
                      비회원 예매확인
                    </a>
                  </li>
                </ul>
              </div>
              {/* id, password */}
              <div className="flex justify-center border-b-[2px] border-[#898987] w-[541px] py-[30px]">
                <form className="">
                  <fieldset>
                    <p>
                      아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해
                      주세요.
                    </p>
                    <div className="flex flex-col items-center space-y-1 mt-4">
                      <input
                        type="text"
                        title="id"
                        className="border-[2px] border-[#b5b5b5] w-[264px] h-[35px] pl-[40px] pr-[5px]"
                      />
                      <input
                        type="password"
                        title="id"
                        className="border-[2px] border-[#b5b5b5] w-[264px] h-[35px] pl-[40px] pr-[5px]"
                      />
                      <button className="border-[2px] border-[#fff] w-[264px] h-[42px] mb-[10px] bg-[#fb4357] text-[#fff] font-bold">
                        로그인
                      </button>
                    </div>
                    <div className="flex justify-center mt-1">
                      <div className="flex justify-between w-[264px] text-[13px]">
                        <div>
                          <input type="checkbox" className="mr-1" />
                          <label htmlFor="">아이디 저장</label>
                        </div>
                        <div className="flex">
                          <div className="mr-1 underline">
                            아이디 찾기 {">"}
                          </div>
                          <div className="underline">비밀번호 찾기 {">"}</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center mt-1">
                      <img
                        src={`${process.env.PUBLIC_URL}/image/btn_loginNaver.jpg`}
                        alt="네이버로그인"
                      />
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
            {/* 휴대폰으로 모든 사이트 로그인 */}
            <div className="mt-[33px]">
              <a href="#">
                <img
                  src={`${process.env.PUBLIC_URL}/image/phoneLogin.png`}
                  alt="휴대폰으로 모든 사이트 로그인"
                />
              </a>
            </div>
          </div>
          {/* CJ ONE 회원이 아니신가요? */}
          <div className="flex justify-center">
            <div className="border w-[920px] p-[20px]">
              <span className="font-semibold mr-2 ">
                CJ ONE 회원이 아니신가요?
              </span>
              <span>회원가입 하시고 다양한 혜택을 누리세요!</span>
              <button className="border-2 border-red-500 px-2 py-1 text-[14px] ml-6 text-red-500 font-bold">
                CJ ONE 회원가입하기
              </button>
              <button className="border-2 border-black px-2 py-1 text-[14px] ml-2 font-bold">
                CJ ONE 멤버십이란?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
