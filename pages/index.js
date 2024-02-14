import { Flex, Subtitle, Title } from "@tremor/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ToggleThemeButton from "@/components/toggleThemeButton";
import CallMeButton from "@/components/callMeButton";
import SkilsChart from "@/components/skilsChart";
import Bio from "@/components/bio";
import Footer from "@/components/footer";

const information = {
  name: "امیرحسین ابراهیمی",
  desc: "به سایت شخصی من خوش آمدید.",
  phone: "+989010333135",
  email: "mail.amirhosseinebrahimi@gmail.com",
};

export default function Home() {
  return (
    <>
      <main className="w-full  p-10">
        <div className="absolute right-1 top-1 w-fit">
          <ToggleThemeButton />
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-5 relative">
          <div className="w-[200px] h-[200px] relative object-fill">
            <Image src="next.svg" alt="logo" fill />
          </div>

          <div dir="rtl">
            <Title className="text-5xl md:text-4xl font-bold">
              {information.name}
            </Title>
            <Subtitle>{information.desc}</Subtitle>
          </div>
          <CallMeButton />
        </div>
        <br />
        <Flex className="gap-4 flex-col md:flex-row z-0">
          <SkilsChart />
          <Bio />
        </Flex>
      </main>
      <Footer />
    </>
  );
}
