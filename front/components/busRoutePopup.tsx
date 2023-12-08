
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import {Popup} from "@/components/popup";

export const BusRoutePopup = (props: {
	hidden: boolean,
	onBackClick: any
}) => {
	return (
		<div>
			<Popup onBackClick={props.onBackClick} statusCardBody={([<img className="w-6 h-6" src="/icons/Dummy_Circle_Small.svg" />, <div>12 автобусов</div>])} hidden={props.hidden} mainCardBody={([
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
				</div>,
				<hr className="h-[1px] relative w-[106%] left-[-3%] opacity-[15%]"/>,
				<div className="flex justify-between items-center">
				<div className="flex gap-x-5 items-center">
				<img className="w-10 h-10" src="/icons/Avatar.png"/>
				<div className="text-2xl">Иван фёдоров</div>
				</div>
				<Button>
				<div className="flex items-center gap-x-3">
				<img className="w-6 h-6" src="/icons/chat.svg"/>
				<div>Написать</div>
				</div>
				</Button>
				</div>,
				<hr className="h-[1px] relative w-[106%] left-[-3%] opacity-[15%]"/>
				]
			)} >fsdgdg</Popup>
		</div>
	);
};
