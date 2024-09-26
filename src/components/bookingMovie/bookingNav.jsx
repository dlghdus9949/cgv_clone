export default function BookingNav() {
  return (
    <div className="w-[996px] my-0 mx-auto">
      <div className="nav items-center space-x-2">
        <div className="mt-[30px] flex justify-end space-x-1">
          <a
            href="#"
            className="border-[1px] border-black font-bold rounded-lg h-[30px] flex justify-center items-center px-2 bg-[#F2F0E4]"
          >
            <span className="text-[#333] text-[13px]">ENGLISH</span>
          </a>
          <a
            href="#"
            className="border-[1px] border-black font-bold rounded-lg h-[30px] flex justify-center items-center px-2 bg-[#F2F0E4]"
          >
            <span>상영시간표</span>
          </a>
          <a
            href="#"
            className="border-[1px] border-black font-bold rounded-lg h-[30px] flex justify-center items-center px-2 bg-[#F2F0E4]"
          >
            <span>예매 다시하기</span>
          </a>
        </div>
      </div>
    </div>
  );
}
