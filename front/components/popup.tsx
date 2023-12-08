import React, {useState} from "react";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/react";

const inter = Inter({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

export const Popup = (props: { map, onBackClick: any, hidden?: boolean, mainCardBody: any, statusCardBody: any }) => {
  return (
    <div className={inter.className} >
      {!props.hidden && (
        <div className="fixed top-[108px] left-[288px] z-20 w-[475px] space-y-4">
          <div className="w-full flex justify-between items-stretch h-12 text-white text-sm font-bold leading-[21px]">
            <div onClick={props.onBackClick} className="flex gap-x-2 justify-center items-center w-28 bg-[#1E1E2A] bg-opacity-50 rounded-[15px] border border-white border-opacity-30 backdrop-blur-[6px]">
                <img className="w-6 h-6" src="/icons/Arrow_Undo_Up_Left.svg" />
                <div>
                  Назад
                </div>
            </div>
            <div className="flex gap-x-2 justify-center items-center w-40 bg-[#1E1E2A] bg-opacity-50 rounded-[15px] border border-white border-opacity-30 backdrop-blur-[6px]">
              {props.statusCardBody}
            </div>
          </div>


          <div className="w-[475px] h-[580px] space-y-9 p-9  z-20 top-[170px] left-[288px] bg-[#1E1E2A] bg-opacity-50 rounded-[30px] border border-white border-opacity-30 backdrop-blur-[6px]">
            <div className="flex justify-between">
              <div>
                <div className="text-3xl">#A888AA777</div>
                <div className="text-md text-[#FFFFFF] opacity-50 font-light">Маршрут 195</div>
              </div>
              <div className="pt-5">
                <div className="flex items-center">
                  <img className="w-6 h-6" src="/icons/flash.svg"/>
                  <div className="text-2xl">89%</div>
                </div>
                <div className="text-sm text-center opacity-50 text-[#FFFFFF]">5ч 29мин</div>
              </div>
            </div>
            <hr className="h-[1px] relative w-[106%] left-[-3%] opacity-[15%]"/>
            <div className="flex justify-between items-center">
              <div className="flex gap-x-5 items-center">
                <img className="w-10 h-10" src="/images/Avatar.png"/>
                <div className="text-2xl">Иван фёдоров</div>
              </div>
              <Button>
                <div className="flex items-center gap-x-3">
                  <img className="w-6 h-6" src="/icons/chat.svg"/>
                  <div>Написать</div>
                </div>
              </Button>
            </div>
            <hr className="h-[1px] relative w-[106%] left-[-3%] opacity-[15%]"/>
          </div>

          <div className={inter.className}></div>
        </div>
      )}
    </div>
  );
};
