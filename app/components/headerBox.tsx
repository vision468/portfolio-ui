import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { URL } from "url";
import Link from "./link";

type PropsType = {
  headerTitle: React.ReactNode;
  headerDesc: React.ReactNode;
  headerLogoSrc: string | StaticImport;
  mainLink: string[];
} & React.HTMLAttributes<HTMLDivElement>;

export default function HeaderBox({
  headerTitle,
  headerDesc,
  headerLogoSrc,
  mainLink,
  className,
  children,
  ...props
}: PropsType) {
  return (
    <header
      {...props}
      className={`relative flex flex-col md:flex-row items-center gap-2 p-2 bg-orange-200 dark:bg-orange-800  rounded-md ${className}`}
    >
      <div className="relative rounded-full border-2 bg-orange-600 dark:bg-white dark:border-orange-600 overflow-hidden w-32 aspect-square">
        <Image
          src={headerLogoSrc}
          alt="profile picture"
          fill
          className="object-fill"
        />
      </div>
      <hgroup className="z-10">
        <h1 className="text-8xl rtl:text-4xl text-orange-600 dark:text-white">
          {headerTitle}
        </h1>
        <br />
        <h3 className="text-4xl rtl:text-xl ltr:first-letter:pl-10 text-orange-950 dark:text-orange-400">
          {headerDesc}
        </h3>
      </hgroup>
      <Link
        href={mainLink[1]}
        prefetch={false}
        className="z-0 md:absolute bottom-5 rtl:left-5 ltr:right-5 rtl:place-self-end ltr:place-self-start"
      >
        {mainLink[0]}
      </Link>
      {children}
    </header>
  );
}
