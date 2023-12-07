import React from "react";
import { Inter } from "next/font/google";
import { Button } from "@nextui-org/button";
import { Avatar } from "@nextui-org/react";

const inter = Inter({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

export const Popup = (props: { hidden?: boolean }) => {
  return (
    <div>
      {!props.hidden && (
        <div className={inter.className}>
          <div className="w-[108px] h-12 top-[108px] left-[288px] fixed z-20">
            <div className="w-[108px] h-12 left-0 top-0 absolute">
              <div className="w-[108px] h-12 left-0 top-0 absolute bg-[#1E1E2A] bg-opacity-50 rounded-[15px] border border-white border-opacity-30 backdrop-blur-[6px]" />
              <div className="w-[108px] h-12 left-0 top-0 absolute bg-[#1E1E2A] bg-opacity-50 rounded-[15px] border border-white border-opacity-30 blur-[20px]" />
            </div>
            <div className="w-[76px] h-6 left-[16px] top-[12px] absolute">
              <div className="w-6 h-6 left-0 top-0 absolute">
                <img src="/icons/Arrow_Undo_Up_Left.svg" />
              </div>
              <div className="w-11 h-6 left-[32px] top-0 absolute text-white text-sm font-bold leading-[21px]">
                Назад
              </div>
            </div>
          </div>

          <div className="w-[275px] h-12 top-[108px] left-[488px] fixed z-20">
            <div className="w-[275px] h-12 left-0 top-0 absolute">
              <div className="w-[275px] h-12 left-0 top-0 absolute bg-[#1E1E2A] bg-opacity-50 rounded-[15px] border border-white border-opacity-30 backdrop-blur-[6px]" />
              <div className="w-[275px] h-12 left-0 top-0 absolute bg-[#1E1E2A] bg-opacity-50 rounded-[15px] border border-white border-opacity-30 blur-[20px]" />
            </div>
            <div className="w-[243px] h-6 left-[16px] top-[12px] absolute">
              <div className="w-6 h-6 left-0 top-0 absolute">
                <img src="/icons/Dummy_Circle_Small.svg" />
              </div>
              <div className="left-[32px] top-[2px] absolute text-white text-sm font-bold leading-[21px]">
                Минимальная загруженность
              </div>
            </div>
          </div>

          <div className="w-[475px] h-[375px] fixed z-20 top-[170px] left-[288px]">
            <div className="w-[475px] h-[375px] left-0 top-0 absolute bg-[#1E1E2A] bg-opacity-50 rounded-[30px] border border-white border-opacity-30 backdrop-blur-[6px]" />
            <div className="w-[475px] h-[375px] left-0 top-0 absolute bg-[#1E1E2A] bg-opacity-50 rounded-[30px] border border-white border-opacity-30 blur-[20px]" />
          </div>

          <div className="w-[475px] h-[580px] fixed z-20 top-[170px] left-[288px]">
            <div className="w-[475px] h-[580px] left-0 top-0 absolute">
              <div className="w-[475px] h-[580px] left-0 top-0 absolute bg-[#1E1E2A] bg-opacity-50 rounded-[30px] border border-white border-opacity-30 backdrop-blur-[6px]" />
            </div>
            <div className="w-[215.92px] h-[41.96px] left-[36.16px] top-[31.47px] absolute text-white text-[32px] font-bold leading-[48px]">
              #A888AA777
            </div>
            <div className="w-[185.80px] h-[41.96px] left-[36.16px] top-[241.84px] absolute text-white text-[32px] font-bold leading-[48px]">
              Остановки:
            </div>
            <div className="w-[130.50px] h-[23.60px] left-[36.16px] top-[73.42px] absolute text-white text-opacity-50 text-lg font-light leading-[27px]">
              Маршрут 195
            </div>
            <div className="w-[48.21px] h-[28.84px] left-[382.64px] top-[49.82px] absolute text-white text-[22px] font-bold leading-[33px]">
              89%
            </div>
            <div className="w-[32.14px] h-7 left-[346.48px] top-[50.70px] absolute justify-center items-center inline-flex">
              <div className="w-[32.14px] h-7 relative">
                <img src="/icons/flash.svg"></img>
              </div>
            </div>
            <div className="w-[394.17px] h-14 left-[36.16px] top-[159.96px] absolute">
              <div className="w-14 h-14 left-0 top-0 absolute justify-start items-start inline-flex">
                <Avatar
                  src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                  className="w-14 h-14 text-tiny"
                />
              </div>
              <div className="w-[131.56px] h-[20.98px] left-[76.33px] top-[13.99px] absolute text-white text-base font-bold leading-normal">
                Иван Федоров
              </div>
              <div className="w-[122px] h-8 left-[272.17px] top-[10.49px] absolute">
                <Button
                  color="primary"
                  startContent={<img src="icons/chat.svg" />}
                >
                  Написать
                </Button>
              </div>
            </div>
            <div className="w-[392.68px] h-[190.31px] left-[38.16px] top-[305.77px] absolute">
              <div className="absolute top-[5px]">
                <img src="icons/route.svg" width={14}></img>
                {/* <div className="w-[12px] h-[12px] left-0 top-[5.24px]  bg-[#60FF00] rounded-full" />
                <div className="left-0 top-[5.24px] ">
                  <img src="icons/green_route.svg"></img>
                </div> */}
              </div>
              <div className="w-[150.58px] h-[20.98px] left-[24.10px] top-0 absolute text-white text-opacity-50 text-base font-normal leading-normal">
                Метро Окружная
              </div>
              <div className="w-[46.20px] h-[20.98px] left-[346.48px] top-0 absolute text-white text-opacity-50 text-base font-bold leading-normal">
                19:40
              </div>
              <div className="w-[45.19px] h-[20.98px] left-[346.48px] top-[52.44px] absolute text-white text-opacity-50 text-base font-bold leading-normal">
                19:45
              </div>
              <div className="w-[45.19px] h-[20.98px] left-[346.48px] top-[104.89px] absolute text-white text-base font-bold leading-normal">
                19:50
              </div>
              <div className="w-[45.19px] h-[20.98px] left-[346.48px] top-[157.33px] absolute text-white text-base font-bold leading-normal">
                19:58
              </div>
            </div>
            <div className="w-[148.64px] h-[20.98px] left-[38.16px] top-[357.21px] absolute">
              {/* <div className="w-[12px] h-[12px] left-0 top-[5.24px] absolute bg-[#60FF00] rounded-full" /> */}
              <div className="w-[150.53px] h-[20.98px] left-[24.10px] top-0 absolute text-white text-opacity-50 text-base font-normal leading-normal">
                Улица Гагарина
              </div>
            </div>
            <div className="w-[153.66px] h-[20.98px] left-[36.16px] top-[409.66px] absolute">
              {/* <div className="w-[16px] h-[16px] left-0 top-[3.50px] absolute bg-white rounded-full" /> */}
              <div className="w-[127.55px] h-[20.98px] left-[26.11px] top-0 absolute text-white text-base font-bold leading-normal">
                Улица Пушкина
              </div>
            </div>
            <div className="w-[168.72px] h-[20.98px] left-[38.16px] top-[462.10px] absolute">
              {/* <div className="w-[12px] h-[12px] left-0 top-[5.24px] absolute bg-zinc-300 rounded-full" /> */}
              <div className="w-[160.62px] h-[20.98px] left-[24.10px] top-0 absolute text-white text-base font-normal leading-normal">
                Метро Владыкино
              </div>
            </div>
            <div className="w-[378.62px] h-[20.98px] left-[38.16px] top-[514.55px] absolute">
              <div className="w-[128.55px] h-[20.98px] left-0 top-0 absolute">
                {/* <div className="w-[12px] h-[12px] left-0 top-[5.24px] absolute bg-zinc-300 rounded-full" /> */}
                <div className="w-[120.45px] h-[20.98px] left-[24.10px] top-[-0px] absolute text-white text-base font-normal leading-normal">
                  12 остановок
                </div>
              </div>
              <div className="w-[18.08px] h-[15.73px] left-[360.54px] top-[2.62px] absolute justify-center items-center inline-flex">
                <div className="w-[18.08px] h-[15.73px] relative">
                    <img src="icons/arrow-down.svg"></img>
                </div>
              </div>
            </div>
            <div className="w-[90.32px] h-[20.98px] left-[351.51px] top-[83.91px] absolute text-white text-opacity-50 text-base font-normal leading-normal">
              5ч 23мин
            </div>
          </div>

          <div className={inter.className}></div>
        </div>
      )}
    </div>
  );
};
