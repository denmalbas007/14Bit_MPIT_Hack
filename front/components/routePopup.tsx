
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import {Popup} from "@/components/popup";
import {Chip} from "@nextui-org/chip";

export const RoutePopup = (props: {
    hidden: boolean,
    onBackClick: any
}) => {
    return (
        <div>
            <Popup onBackClick={props.onBackClick} statusCardBody={([<img className="w-6 h-6" src="/icons/Dummy_Circle_Small.svg" />, <div>12 автобусов</div>])} hidden={props.hidden} mainCardBody={([
                    <div className="text-3xl">
                        Старопанский Переулок
                    </div>,
                    <hr className="h-[1px] relative w-[106%] left-[-3%] opacity-[15%]"/>,
                    <div className="space-y-4">
                        <div className="text-3xl">Автобусы:</div>
                        <div className="flex items-center gap-x-2">
                            <Chip>Хуета</Chip>
                            <Chip>Хуета</Chip>
                            <Chip>Хуета</Chip>
                            <Chip>Хуета</Chip>
                            <Chip>Хуета</Chip>
                        </div>
                    </div>,
                    <hr className="h-[1px] relative w-[106%] left-[-3%] opacity-[15%]"/>,
                    <div className="text-3xl">Прогноз прибытия</div>,
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <Chip>Хуета</Chip>
                            <div className="text-xl text-[#3EEE00]">
                                4 минуты
                            </div>
                        </div>
                        <hr className="h-[1px] relative w-[106%] left-[-3%] opacity-[15%]"/>
                        <div className="flex items-center justify-between">
                            <Chip>Хуета</Chip>
                            <div className="text-xl text-[#3EEE00]">
                                4 минуты
                            </div>
                        </div>
                        <hr className="h-[1px] relative w-[106%] left-[-3%] opacity-[15%]"/>
                        <div className="flex items-center justify-between">
                            <Chip>Хуета</Chip>
                            <div className="text-xl text-[#3EEE00]">
                                4 минуты
                            </div>
                        </div>
                        <hr className="h-[1px] relative w-[106%] left-[-3%] opacity-[15%]"/>
                    </div>,
                    <Button>
                        <div className="flex gap-x-1 items-center">
                            <img className="w-6 h-6" src="/icons/Calendar_Days.svg" />
                            <div>
                                Полное расписание
                            </div>
                        </div>
                    </Button>
                ]
            )} >fsdgdg</Popup>
        </div>
    );
};
