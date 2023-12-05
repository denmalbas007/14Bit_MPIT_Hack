import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from "@nextui-org/react";

import { Inter } from "next/font/google";

const inter = Inter({
  weight: "400", // if single weight, otherwise you use array like [400, 500, 700],
  style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
  subsets: ["latin"],
});

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center content-center">
        <Card className="w-[406px] h-[187px] bg-neutral-800 bg-opacity-50 rounded-[16px] border border-white border-opacity-30">
          <CardBody className="content-center justify-center">
            <Button color="primary">Войти</Button>
            <div className={inter.className}>
              <div className="text-white text-opacity-50 text-base font-medium leading-normal text-center mb-3 mt-3">
                или
              </div>
            </div>
            <Button variant="bordered" className="text-white border-white">
              Зарегистрироваться
            </Button>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}
