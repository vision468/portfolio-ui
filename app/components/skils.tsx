type PropsType = {
  skils: string;
  skils_items: (string | number)[][];
} & React.HTMLAttributes<HTMLDivElement>;
import textContent from "../lib/content.json";
import Card from "./card";
import TextBox from "./textBox";

export default function SkilsBox({
  skils,
  skils_items,
  className,
  children,
  ...props
}: PropsType) {
  return (
    <Card className="bg-orange-200 dark:bg-orange-400 box-border">
      <div>
        <TextBox className="border-b-2 border-b-orange-950 dark:border-b-orange-50">
          <h3>{skils}</h3>
        </TextBox>
        <ul className="">
          {skils_items.map((skilsItem) => (
            <li className="my-1" key={skilsItem[0]}>
              <TextBox>
                <span
                  className="inline-block text-center align-bottom ltr:rounded-s-sm rtl:rounded-e-sm bg-orange-300 dark:bg-orange-950 border-b-orange-300 dark:border-b-orange-950  px-2"
                  style={{ width: `${Number(skilsItem[1]) + 100}px` }}
                >
                  {skilsItem[0]}
                </span>
                <span className="p-1 rounded-md border-2 border-orange-300 dark:border-orange-950">
                  {skilsItem[1]}%
                </span>
              </TextBox>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
