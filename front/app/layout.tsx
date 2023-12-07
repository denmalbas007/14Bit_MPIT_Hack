"use client";

import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import NextLink from "next/link";
import { Logo } from "@/components/logo";
import { Tabs, Tab, Chip, Card, CardBody } from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";
import { Key } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const tab = async (key: Key) => {
    router.push(key.toString());
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v3.0.0/mapbox-gl.css"
          rel="stylesheet"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div
            className="relative flex flex-row h-screen bg-cover"
            style={{ backgroundImage: "url('/images/bg.png')" }}
          >
            {[
              "/map",
              "/schedule",
              "/chat",
              "/buses",
              "/health",
              "/report",
              "/statistics",
              "/settings",
              "/logout",
            ].includes(pathname) && (
              <nav className="flex flex-col h-screen px-4 py-5 bg-neutral-800">
                <NextLink className="inline-flex m-1" href="/">
                  <img src="logo.svg" alt="TimeBus" />
                </NextLink>
                <Tabs
                  aria-label="Options"
                  color="primary"
                  className="child:flex-col child:gap-3 pt-10 w-56 child:w-56 child:child:h-12 child:child:justify-start"
                  onSelectionChange={tab}
                  selectedKey={pathname}
                >
                  <Tab
                    key="/map"
                    title={
                      <div className="flex items-center space-x-2">
                        <img src="/icons/Map.svg" alt="Карта" />
                        <span>Карта</span>
                      </div>
                    }
                  ></Tab>
                  <Tab
                    key="/schedule"
                    title={
                      <div className="flex items-center space-x-2">
                        <img src="/icons/Calendar_Days.svg" alt="Расписание" />
                        <span>Расписание</span>
                      </div>
                    }
                  ></Tab>
                  <Tab
                    key="/chat"
                    title={
                      <div className="flex items-center space-x-2">
                        <img
                          src="/icons/Chat_Circle_Dots.svg"
                          alt="Чат с водителем"
                        />
                        <span>Чат с водителем</span>
                      </div>
                    }
                  ></Tab>
                  <Tab
                    key="/buses"
                    title={
                      <div className="flex items-center space-x-2">
                        <img
                          src="/icons/Text_Align_Justify.svg"
                          alt="Список автобусов"
                        />
                        <span>Список автобусов</span>
                      </div>
                    }
                  ></Tab>
                  <Tab
                    key="/report"
                    title={
                      <div className="flex items-center space-x-2">
                        <img
                          src="/icons/Triangle_Warning.svg"
                          alt="Реагирование"
                        />
                        <span>Реагирование</span>
                      </div>
                    }
                  ></Tab>
                  <Tab
                    key="/statistics"
                    title={
                      <div className="flex items-center space-x-2">
                        <img
                          src="/icons/Chart_Bar_Vertical_01.svg"
                          alt="Статистика"
                        />
                        <span>Статистика</span>
                      </div>
                    }
                  ></Tab>
                  <Tab
                    className="mb-28"
                    key="/health"
                    title={
                      <div className="flex items-center space-x-2">
                        <img src="/icons/First_Aid.svg" alt="Здоровье" />
                        <span>Здоровье</span>
                      </div>
                    }
                  ></Tab>
                  <Tab
                    key="/settings"
                    title={
                      <div className="flex items-center space-x-2">
                        <img src="/icons/Settings.svg" alt="Настройки" />
                        <span>Настройки</span>
                      </div>
                    }
                  ></Tab>
                  <Tab
                    key="/logout"
                    title={
                      <div className="flex items-center space-x-2">
                        <img src="/icons/Log_Out.svg" alt="Выйти" />
                        <span>Выйти</span>
                      </div>
                    }
                  ></Tab>
                </Tabs>
              </nav>
            )}

            <main className="container mx-auto h-screen items-center justify-center flex">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
