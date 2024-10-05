import React from "react";

export default function defaultModal({ isOpen, closeModal, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content ">
        <div className="modal-header bg-[#333] text-[#f2f0e5] h-[51px]">
          <h3 className="font-bold text-[22px] border border-[#707070] w-full h-[45px] mb-[5px] leading-[43px] pl-4">
            예매 내역 확인
          </h3>
        </div>

        <div className="modal-body">{children}</div>

        <div className="modal-footer ">
          <button className="pay-btn bg-red-700 px-[30px] py-[10px] text-[#fff] font-bold mr-1 rounded">
            결제하기
          </button>
          <button
            onClick={closeModal}
            className="close-btn border-2 border-[#bebebd] px-[20px] py-[10px] font-bold rounded"
          >
            취소
          </button>
        </div>
      </div>

      <style jsx>{`
        .modal {
          display: block;
          position: fixed;
          z-index: 100;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
        }

        .modal-content {
          background-color: #f6f6f4;
          margin: 2% auto;
          border: 1px solid #888;
          width: 987px;
          max-width: 900px;
          border: 5px solid #333;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .close {
          color: #aaa;
          float: right;
          font-size: 28px;
          font-weight: bold;
          cursor: pointer;
        }

        .modal-body {
          padding: 20px 0;
        }

        .modal-footer {
          display: flex;
          justify-content: center;
          padding-top: 15px;
          padding-bottom: 40px;
        }

        .close-btn:hover,
        .pay-btn:hover {
          opacity: 0.8;
        }
      `}</style>
    </div>
  );
}
