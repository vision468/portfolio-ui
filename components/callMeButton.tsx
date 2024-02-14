import { PhoneOutgoingIcon, XIcon } from "@heroicons/react/outline";
import { Button, Card, Flex, Icon, Subtitle, Text, Title } from "@tremor/react";
import React, { useEffect, useState } from "react";

type Props = {
  toggle: boolean;
};

export default function CallMeButton({}: Props) {
  const [toggle, setToggle] = useState(false);

  const [loadingFlag, setLoadingFlag] = useState(false);
  const handleClick = () => {
    setToggle((prev) => !prev);
  };
  useEffect(() => {
    if (loadingFlag) {
      setTimeout(() => setLoadingFlag(false), 1000);
    }
  }, [loadingFlag]);
  return (
    <>
      {!toggle && (
        <div
          className={`fixed top-1 left-1 md:top-auto md:-right-32  ${
            toggle && "right-auto z-20"
          } transition-all md:absolute md:right-auto md:left-0   w-fit`}
          onClick={handleClick}
        >
          <Button
            className="dark:text-tremor-content"
            icon={PhoneOutgoingIcon}
            loading={loadingFlag}
            onClick={() => setLoadingFlag(true)}
          >
            {"تماس"}
          </Button>
        </div>
      )}
      <Card
        className={`fixed md:top-1/2 md:-translate-y-1/2 opacity-0 m-auto w-0 h-0 transition-all  z-10 ${
          toggle && "opacity-100 w-11/12 h-auto"
        } `}
      >
        <ContactForm setToggle={setToggle} />
      </Card>
    </>
  );
}

function ContactForm({ setToggle }) {
  return (
    <form dir="rtl" className="w-full" action={"/contact"}>
      <Card className="my-1 text-right">
        <Subtitle>
          {"اطلاعات زیر را تکمیل کنید و من در اولین فرصت پاسخگو شما خواهم بود."}
        </Subtitle>
      </Card>
      <Flex flexDirection="col" className="w-full text-right">
        <label htmlFor="first_name">
          <Text>{"نام"}</Text>
          <input
            type="text"
            name="first_name"
            id="first_name"
            maxLength={32}
            required
          />
        </label>
        <label htmlFor="last_name">
          <Text>{"نام خانوادگی"}</Text>
          <input
            type="text"
            name="last_name"
            id="last_name"
            maxLength={32}
            required
          />
        </label>
        <label htmlFor="phone_number">
          <Text>{"شماره تماس"}</Text>
          <input type="tel" name="phone_number" id="phone_number" />
        </label>
        <label htmlFor="email">
          <Text>{"ایمیل"}</Text>
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="message">
          <Text>{"پیام"}</Text>
          <textarea name="message" id="message" className="w-full" />
        </label>
      </Flex>
      <Flex>
        <Button type="submit">
          <Text>{"ارسال"}</Text>
        </Button>
        <Button type="reset" onClick={() => setToggle(false)}>
          <Text>{"انصراف"}</Text>
        </Button>
      </Flex>
    </form>
  );
}
