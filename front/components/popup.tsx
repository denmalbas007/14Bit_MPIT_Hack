import React from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

export const Popup = (props: { hidden?: boolean }) => {
  return (
    <div>
      {!props.hidden && (
        <div>
          <div className="w-[108px] h-12 fixed top-[108px] left-[288px] z-20">
            <div className="w-[108px] h-12 left-0 top-0 absolute">
              <div className="w-[108px] h-12 left-0 top-0 absolute bg-[#1E1E2A] bg-opacity-50 rounded-[15px] border border-white border-opacity-30 backdrop-blur-[6px]" />
              <div className="w-[108px] h-12 left-0 top-0 absolute bg-[#1E1E2A] bg-opacity-50 rounded-[15px] border border-white border-opacity-30 blur-[20px]" />
            </div>
            <div className="w-[76px] h-6 left-[16px] top-[12px] absolute">
              <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex">
                <img src="/icons/Arrow_Undo_Up_Left.svg" alt="Карта" />
              </div>
              <div className={inter.className}>
                <div className="w-11 h-6 left-[32px] top-0 absolute text-white text-sm font-bold leading-[21px]">
                  Назад
                </div>
              </div>
            </div>
          </div>

          <div className="w-[275px] h-12 fixed top-[108px] left-[288px] z-20">
            <div className="w-[275px] h-12 left-0 top-0 absolute">
              <div className="w-[275px] h-12 left-0 top-0 absolute bg-neutral-800 bg-opacity-50 rounded-[15px] border border-white border-opacity-30 backdrop-blur-[6px]" />
              <div className="w-[275px] h-12 left-0 top-0 absolute bg-neutral-800 bg-opacity-50 rounded-[15px] border border-white border-opacity-30 blur-[20px]" />
            </div>
            <div className="w-[243px] h-6 left-[16px] top-[12px] absolute">
              <div className="w-6 h-6 left-0 top-0 absolute flex-col justify-start items-start inline-flex" />
              <div className="left-[32px] top-[2px] absolute text-white text-sm font-bold font-['Inter'] leading-[21px]">
                Минимальная загруженность
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
