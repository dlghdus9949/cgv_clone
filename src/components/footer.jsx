export default function footer() {
  return (
    <div>
      <div className="bg-[#f8f8f8] pt-[240px]">
        {/* 정책 */}
        <ul className="policy_list flex flex-row justify-between py-[23px] max-w-[980px] my-0 mx-auto">
          <li>
            <a
              href="#"
              target="blank"
              className="font-medium	text-[13px] text-[#666]"
            >
              회사소개
            </a>
          </li>
          <li>
            <a
              href="#"
              target="blank"
              className="font-medium	text-[13px] text-[#666]"
            >
              지속가능경영
            </a>
          </li>
          <li>
            <a
              href="#"
              target="blank"
              className="font-medium	text-[13px] text-[#666]"
            >
              IR
            </a>
          </li>
          <li>
            <a
              href="#"
              target="blank"
              className="font-medium	text-[13px] text-[#666]"
            >
              광고/제휴/출점문의
            </a>
          </li>
          <li>
            <a
              href="#"
              target="blank"
              className="font-medium	text-[13px] text-[#666]"
            >
              이용약관
            </a>
          </li>
          <li>
            <a
              href="#"
              target="blank"
              className="font-medium	text-[13px] text-[#666]"
            >
              편성기준
            </a>
          </li>
          <li>
            <a
              href="#"
              target="blank"
              className="font-medium	text-[13px] text-[#666]"
            >
              <strong className="text-[#222] font-bold underline">
                개인정보처리방침
              </strong>
            </a>
          </li>
          <li>
            <a
              href="#"
              target="blank"
              className="font-medium	text-[13px] text-[#666]"
            >
              법적고지
            </a>
          </li>
          <li>
            <a
              href="#"
              target="blank"
              className="font-medium	text-[13px] text-[#666]"
            >
              이메일주소무단수집거부
            </a>
          </li>
          <li>
            <a
              href="#"
              target="blank"
              className="font-medium	text-[13px] text-[#666]"
            >
              윤리경영
            </a>
          </li>
          <li>
            <a
              href="#"
              target="blank"
              className="font-medium	text-[13px] text-[#666]"
            >
              사이버감사실
            </a>
          </li>
        </ul>

        {/* info */}
        <div className="info_wrap flex justify-between items-end max-w-[980px] my-0 mx-auto py-[23px]">
          {/* company_info */}
          <section className="text-[12px] text-[#666] leading-[1.667em]">
            <div>
              (04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰
              6층(한강로동)
            </div>
            <div className="flex space-x-[4px]">
              <div>대표이사 :</div>
              <div>허민회 ·</div>
              <div>사업자등록번호 :</div>
              <div>104-81-45690 ·</div>
              <div>통신판매업신고번호 :</div>
              <div>2017-서울용산-0662</div>
              <div className="underline">사업자정보확인</div>
            </div>
            <div className="flex space-x-[4px]">
              <div>호스팅 사업자 :</div>
              <div>CJ올리브네트웍스 ·</div>
              <div>대표이메일 :</div>
              <div>dlghdus9949@sungkyul.ac.kr</div>
            </div>
            <p>© CJ CGV. All Rights Reserved</p>
          </section>

          {/* familysite_wrap */}
          <section className="relative">
            <select
              id="family_site"
              className="relative h-[34px] text-[12px] px-[10px] text-[#666] leading-[34px] bg-color-transparent"
            >
              <option value className="hidden">
                계열사 바로가기
              </option>
              <optgroup label="CJ그룹">
                <option value="#">CJ주식회사</option>
              </optgroup>
              <optgroup label="식품 & 식품서비스">
                <option value="#">CJ제일제당</option>
                <option value="#">CJ푸드빌</option>
                <option value="#">CJ프레시웨이</option>
              </optgroup>
              <optgroup label="생명공학">
                <option value="#">CJ제일제당 BIO사업부문</option>
                <option value="#">CJ Feed&Card</option>
              </optgroup>
              <optgroup label="물류 & 신유통">
                <option value="#">CJ대한통운</option>
                <option value="#">CJ대한통운 건설부문</option>
                <option value="#">CJ올리브영</option>
                <option value="#">CJ올리브네트윅스</option>
                <option value="#">CJ ENM 커머스부문</option>
              </optgroup>
              <optgroup label="엔터테인먼트 & 미디어">
                <option value="#">CJ ENM 엔터테인먼트부문</option>
                <option value="#">CJ CGV</option>
              </optgroup>
            </select>
            <a
              href="#"
              className="inline-flex justify-center items-center ml-[4px] w-[36px] h-[34px] -ml-[1px] text-[14px] leading-[1.429em] text-white font-bold bg-[#9e9e9e]"
            >
              GO
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
