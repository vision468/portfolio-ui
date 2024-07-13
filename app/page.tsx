import Button from "./components/button";
import Swiper, { SwiperCard } from "./components/swiper";
import Card from "./components/card";
import TextBox from "./components/textBox";
import { ThemeSwitcher } from "./components/themeSwitcher";
import HeaderBox from "./components/headerBox";
import textContent from "./lib/content.json";
import Link from "./components/link";
export default function Home() {
  return (
    <main
      dir="rtl"
      className="relative min-w-[100vw] min-h-[100vh] flex justify-center items-center p-0 bg-orange-50 dark:bg-black text-black dark:text-white "
    >
      <Card className=" md:min-w-[50vw] md:aspect-video ">
        <HeaderBox
          headerTitle={<>{textContent.name}</>}
          headerDesc={<>{textContent.header_descriptin}</>}
          headerLogoSrc={""}
        >
          <ThemeSwitcher
            key={1}
            className="absolute top-5 ltr:right-5 rtl:left-5"
          />
        </HeaderBox>
        <Swiper>
          <SwiperCard>
            <Button className="ltr:float-left rtl:float-right">
              {textContent.about_me}
            </Button>
            <TextBox className="hidden">{textContent.about_me_content}</TextBox>
          </SwiperCard>
          <SwiperCard>
            <Button>{textContent.contact}</Button>
            <TextBox className="hidden">
              <div className="flex justify-items-center justify-evenly">
                {textContent &&
                  textContent.contact_ways.map((way, index) => (
                    <Link href={way[1]} key={way[0]} prefetch={false}>
                      {way[0]}
                    </Link>
                  ))}
              </div>
            </TextBox>
          </SwiperCard>
          <SwiperCard>
            <Button>{textContent.glory}</Button>
            <TextBox className="hidden">
              <ul className="list-disc">
                {textContent &&
                  textContent.glory_items.map((item) => (
                    <li key={item.substring(0, 5)}>{item}</li>
                  ))}
              </ul>
            </TextBox>
          </SwiperCard>
          <SwiperCard>
            <Button>{textContent.works}</Button>
            <TextBox className="hidden"></TextBox>
          </SwiperCard>
        </Swiper>
      </Card>
    </main>
  );
}
