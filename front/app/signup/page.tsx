"use client";

import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Input, RadioGroup } from "@nextui-org/react";
import { RolesRadio } from "../../components/roles";
import { CheckboxGroup } from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

import { Inter } from "next/font/google";
import { useState } from "react";

const inter = Inter({
  weight: "700", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

export default function SignUp() {
  return (
    <div>
      <Card
        isBlurred
        className="w-[506px] h-[650px] bg-content1 rounded-[16px] border border-white border-opacity-30"
      >
        <CardBody className="p-5">
          <div className={inter.className}>
            <div className="text-white text-2xl font-bold mb-2">
              Регистрация
            </div>
          </div>

          <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-3">
            <Input type="first_name" label="Имя" placeholder="Введите имя" />
            <Input
              type="last_name"
              label="Фамилия"
              placeholder="Введите фамилию"
            />
          </div>

          <Input
            type="email"
            label="Email"
            placeholder="Введите email"
            className="mb-3"
          />

          <Input
            type="password"
            label="Пароль"
            placeholder="Придумайте пароль"
            className="mb-3"
          />

          <RadioGroup
            label=""
            description=""
            className="mb-3"
            defaultValue="passanger"
          >
            <RolesRadio description="" value="dispatcher">
              Я диспетчер автобуса
            </RolesRadio>
            <RolesRadio value="driver">Я водитель автобуса</RolesRadio>
            <RolesRadio description="" value="passanger">
              Я пассажир
            </RolesRadio>
          </RadioGroup>

          <Button color="primary">Продолжить</Button>
          <Button variant="bordered" className="text-white border-white mt-3">
            Войти
          </Button>
        </CardBody>
      </Card>
    </div>
  );
}
