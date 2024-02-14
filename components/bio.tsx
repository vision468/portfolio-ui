import {
  Flex,
  Card,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Title,
  Text,
} from "@tremor/react";
import React from "react";

const bio = {
  education: [
    "دیپلمه دبیرستان غدیر تهران",
    "لیسانس دانشگاه علم و فناوری مازندران(درحال تحصیل)",
  ],
  awards: [
    "کسب مقام قهرمانی لیگ فوتبالیست هوشمند مسابفات برزیل اپن (مربی)",
    "شرکت در مسابقات ایران اپن (مربی)",
    "شرکت در مسابقات راینوکاپ (داور)",
  ],
};

export default function Bio() {
  return (
    <Flex className="gap-4" flexDirection="col">
      <Card>
        <Accordion>
          <AccordionHeader dir="rtl">
            {"تحصیلات"} ({bio.education.length})
          </AccordionHeader>
          <AccordionBody>
            {bio.education.map((text, index) => (
              <Text key={`text #${index}`} className="text-right">
                {text}
              </Text>
            ))}
          </AccordionBody>
        </Accordion>
      </Card>
      <Card>
        <Accordion>
          <AccordionHeader dir="rtl">
            {"افتخارات"} ({bio.awards.length})
          </AccordionHeader>
          <AccordionBody>
            {bio.education.map((text, index) => (
              <Text key={`text #${index}`} className="text-right">
                {text}
              </Text>
            ))}
          </AccordionBody>
        </Accordion>
      </Card>
    </Flex>
  );
}
